import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Contact } from '../types';
import ContactRow, { ContactRowProps } from './ContactRow';
import Separator from './Separator';

interface ContactListProps {
  data: Contact[]
  onSelectContact: ContactRowProps['onSelect']
  selectedContacts: Contact['id'][]
  isLoading: boolean
  onRefresh: () => void
}

const ItemSeparatorComponent = () => <Separator size={15} />

export default function ContactList({
  data,
  onSelectContact,
  selectedContacts,
  isLoading,
  onRefresh
}: ContactListProps) {
  const renderItem: ListRenderItem<Contact> = useCallback(
    ({item}) => (
      <ContactRow
        {...item}
        onSelect={onSelectContact}
        isSelected={selectedContacts.includes(item.id)}
      />
    ),
    [selectedContacts, onSelectContact],
  )
  

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      refreshing={isLoading}
      onRefresh={onRefresh}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%'
  },
  listContent: {
    paddingHorizontal: 25
  },
});
