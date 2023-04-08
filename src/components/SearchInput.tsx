import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface SearchInputProps {
  search: string
  setSearch: (value: string) => void
}

export default function SearchInput({
  search,
  setSearch
}: SearchInputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        defaultValue={search}
        onChangeText={setSearch}
        style={styles.input}
        placeholder={'Search'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
});
