import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/essences/",
});

export const getEssencesData = (essenceType: string, timestamp: string) =>
  instance.get(essenceType, {
    params: {
      timestamp: timestamp,
    },
  });

export const getEssenceData = (url: string) => instance.get(url);

export const postEssenceData = (essenceType: string) =>
  instance.post(essenceType);
