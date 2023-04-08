import { useCallback, useState } from 'react';

import { Contact } from '../types';

type UseContactsSelectionOutput = [
  Contact['id'][],
  (contactId: Contact['id'], state: boolean) => void
]

export default function useContactsSelection(): UseContactsSelectionOutput {
  const [selectedContactIds, setSelectedContactIds] = useState<Contact['id'][]>([])

  const onSelectContact = useCallback(
    (contactId: Contact['id'], state: boolean) => {
      setSelectedContactIds(
        ids => {
          const nextSelectedContactIds = state
            ? [...ids, contactId]
            : ids.filter(id => id !== contactId)

          console.log(nextSelectedContactIds)

          return nextSelectedContactIds
        }
      )
    },
    [],
  )

  return [selectedContactIds, onSelectContact]
}
