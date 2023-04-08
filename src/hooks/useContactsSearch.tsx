import { useMemo, useState } from 'react';

import { Contact } from '../types';

interface UseContactsSearchOutput {
  search: string
  setSearch: (value: string) => void
  searchedContacts: Contact[]
}

export default function useContactsSearch(contacts: Contact[]): UseContactsSearchOutput {
  const [search, setSearch] = useState<string>('')
  const searchedContacts = useMemo(
    () => contacts
      .filter(
        ({first_name, last_name}) =>
          `${first_name} ${last_name}`
            .toLowerCase()
            .includes(search.toLowerCase())
    ), [contacts, search]
  )

  return {
    search,
    setSearch,
    searchedContacts
  }
}
