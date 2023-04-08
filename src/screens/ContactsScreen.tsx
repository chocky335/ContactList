import ContactList from '../components/ContactList';
import Screen from '../components/Screen';
import useContacts from '../hooks/useContacts';
import useContactsSelection from '../hooks/useContactsSelection';

export default function ContactsScreen() {
  const {contacts, isLoading, onRefresh} = useContacts()
  const [selectedContacts, onSelectContact] = useContactsSelection()

  return (
    <Screen>
      <ContactList
        data={contacts}
        selectedContacts={selectedContacts}
        onSelectContact={onSelectContact}
        isLoading={isLoading}
        onRefresh={onRefresh}
      />
    </Screen>
  );
}
