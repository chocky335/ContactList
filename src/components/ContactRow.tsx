import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Contact } from '../types';
import CheckBox from './CheckBox';

export interface ContactRowProps extends Contact {
  isSelected: boolean
  onSelect: (id: Contact['id'], state: boolean) => void
}

export default function ContactRow({
  id,
  avatar: uri,
  first_name,
  last_name,
  isSelected,
  onSelect
}: ContactRowProps) {
  const onSelectContact = useCallback((state: boolean) => onSelect(id, state), [id, onSelect])
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.image} />
      <Text>{first_name} {last_name}</Text>
      <View style={styles.flexSpace} />
      <CheckBox isSelected={isSelected} onSelect={onSelectContact} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    marginRight: 15
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#7FFFD4',
  },
  flexSpace: {
    flex: 1
  },
});
