import { API_URL } from "./constants"
import { Contact } from "./types"

export const fetchContacts = async (): Promise<Contact[]> => {
    const response = await fetch(`${API_URL}/users.json`)
    const contacts: Contact[] = await response.json()
    const sortedByLastNameContacts = contacts.sort((a, b) => {
        if (a.last_name < b.last_name) {
          return -1;
        }
        if (a.last_name > b.last_name) {
          return 1;
        }
        return 0;
      })

    return sortedByLastNameContacts
}
