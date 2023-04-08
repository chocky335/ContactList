import { useCallback, useEffect, useState } from 'react';
import { fetchContacts } from '../api';

import { Contact } from '../types';

interface UseContactsOutput {
  contacts: Contact[]
  isLoading: boolean
  onRefresh: () => void
}

export default function useContacts(): UseContactsOutput {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const loadContacts = useCallback(async () => {
    try {
      const latestContacts = await fetchContacts()
      setContacts(latestContacts)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const onRefresh = useCallback(async () => {
    setIsLoading(true)
    loadContacts()
  }, [])

  useEffect(() => {
    loadContacts()
  }, [])

  return {
    contacts,
    isLoading,
    onRefresh
  }
}
