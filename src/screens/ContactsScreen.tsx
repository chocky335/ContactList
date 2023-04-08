import ContactList from '../components/ContactList';
import Screen from '../components/Screen';
import useContacts from '../hooks/useContacts';
import { Contact } from '../types';

const selectedContacts: Contact['id'][] = []
const onSelectContact = () => {}

export default function ContactsScreen() {
  const {contacts, isLoading, onRefresh} = useContacts()

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
