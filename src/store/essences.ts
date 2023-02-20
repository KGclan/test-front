import { defineStore } from "pinia";
import { AxiosResponse } from "axios";

import { Essence, EssencesTitles } from "@/types";

import { getEssencesData, postEssenceData, getEssenceData } from "../api/api";

interface EssencesState {
  essencesTitles: EssencesTitles;
  leads: Essence[];
  contacts: Essence[];
  companies: Essence[];
  selectedEssence: string;
  essenceListIsLoading: boolean;
  essenceIsAdding: boolean;
  applicationStartupTime: string;
}

export const useEssenceState = defineStore("essences", {
  state: (): EssencesState => ({
    essencesTitles: {
      notSelected: "Не выбрано",
      lead: "Сделка",
      contact: "Контакт",
      companie: "Компания",
    },
    leads: [],
    contacts: [],
    companies: [],
    selectedEssence: "Не выбрано",
    essenceListIsLoading: false,
    essenceIsAdding: false,
    // Время откытия окна с приложением, для того, что бы
    // мы могли получать только те сущности, которые были
    // созданы после запуска приложения
    applicationStartupTime: (Date.now() / 1000).toFixed(0),
  }),
  actions: {
    async setSelectedEssence(essencesTitle: string) {
      this.selectedEssence = essencesTitle;
    },

    async setContacts() {
      try {
        this.essenceListIsLoading = true;
        const responce: AxiosResponse<{ contacts: Essence[] }> =
          await getEssencesData("contacts", this.applicationStartupTime);

        if (Array.isArray(responce.data.contacts)) {
          this.contacts = responce.data.contacts.map((essence) => {
            const { id, name } = essence;

            return { id, name };
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.essenceListIsLoading = false;
      }
    },

    async setLeads() {
      try {
        this.essenceListIsLoading = true;
        const responce: AxiosResponse<{ leads: Essence[] }> =
          await getEssencesData("leads", this.applicationStartupTime);

        if (Array.isArray(responce.data.leads)) {
          this.leads = responce.data.leads.map((essence: any) => {
            const { id, name } = essence;

            return { id, name };
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.essenceListIsLoading = false;
      }
    },

    async setCompanies() {
      try {
        this.essenceListIsLoading = true;
        const responce: AxiosResponse<{ companies: Essence[] }> =
          await getEssencesData("companies", this.applicationStartupTime);

        if (Array.isArray(responce.data.companies)) {
          this.companies = responce.data.companies.map((essence: any) => {
            const { id, name } = essence;

            return { id, name };
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.essenceListIsLoading = false;
      }
    },

    async addContact() {
      try {
        this.essenceIsAdding = true;
        const postResponce: AxiosResponse<{ contacts: Essence[] }> =
          await postEssenceData("contacts");
        const getEssence: AxiosResponse<Essence> = await getEssenceData(
          `contacts/${postResponce.data.contacts[0].id}`
        );
        const { id, name } = getEssence.data;

        this.contacts.push({ id, name });
      } catch (error) {
        console.log(error);
      } finally {
        this.essenceIsAdding = false;
      }
    },

    async addLead() {
      try {
        this.essenceIsAdding = true;
        const postResponce: AxiosResponse<{ leads: Essence[] }> =
          await postEssenceData("leads");
        const getEssence: AxiosResponse<Essence> = await getEssenceData(
          `leads/${postResponce.data.leads[0].id}`
        );
        const { id, name } = getEssence.data;

        this.leads.push({ id, name });
      } catch (error) {
        console.log(error);
      } finally {
        this.essenceIsAdding = false;
      }
    },

    async addCompanie() {
      try {
        this.essenceIsAdding = true;
        const postResponce: AxiosResponse<{ companies: Essence[] }> =
          await postEssenceData("companies");
        const getEssence: AxiosResponse<Essence> = await getEssenceData(
          `companies/${postResponce.data.companies[0].id}`
        );
        const { id, name } = getEssence.data;

        this.companies.push({ id, name });
      } catch (error) {
        console.log(error);
      } finally {
        this.essenceIsAdding = false;
      }
    },
  },
});
