import { useEssenceState } from "@/store/essences";

function essenceTypeHandler(mode: "button" | "list" | "dropdown" = "list") {
  const {
    selectedEssence,
    essencesTitles,
    companies,
    addCompanie,
    contacts,
    addContact,
    leads,
    addLead,
    setLeads,
    setContacts,
    setCompanies,
  } = useEssenceState();

  switch (selectedEssence) {
    case essencesTitles.lead:
      if (mode === "button") {
        addLead();
        break;
      }
      if (mode === "dropdown") {
        setLeads();
        break;
      }
      return leads;

    case essencesTitles.contact:
      if (mode === "button") {
        addContact();
        break;
      }
      if (mode === "dropdown") {
        setContacts();
        break;
      }
      return contacts;

    case essencesTitles.companie:
      if (mode === "button") {
        addCompanie();
        break;
      }
      if (mode === "dropdown") {
        setCompanies();
        break;
      }
      return companies;

    default:
      return;
  }
}

export default essenceTypeHandler;
