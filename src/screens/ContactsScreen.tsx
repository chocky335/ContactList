import ContactList from '../components/ContactList';
import Screen from '../components/Screen';
import SearchInput from '../components/SearchInput';
import useContacts from '../hooks/useContacts';
import useContactsSearch from '../hooks/useContactsSearch';
import useContactsSelection from '../hooks/useContactsSelection';

export default function ContactsScreen() {
  const {contacts, isLoading, onRefresh} = useContacts()
  const [selectedContacts, onSelectContact] = useContactsSelection()
  const {
    search,
    setSearch,
    searchedContacts,
  } = useContactsSearch(contacts)

  return (
    <Screen>
      <SearchInput
        search={search}
        setSearch={setSearch}
      />
      <ContactList
        data={searchedContacts}
        selectedContacts={selectedContacts}
        onSelectContact={onSelectContact}
        isLoading={isLoading}
        onRefresh={onRefresh}
      />
    </Screen>
  );
}
