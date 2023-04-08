import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export interface CheckBoxProps {
  isSelected: boolean
  onSelect: (state: boolean) => void
}


export default function CheckBox({
  isSelected: isSelectedDefault,
  onSelect
}: CheckBoxProps) {
  const [isSelected, setIsSelected] = useState(isSelectedDefault)
  const onPressSelect = useCallback(() => {
    setIsSelected(_isSelected => {
      const nextIsSelected = !_isSelected
      requestAnimationFrame(() => onSelect(nextIsSelected))
      return nextIsSelected
    })
  }, [onSelect])

  useEffect(() => {
    if (isSelectedDefault !== isSelected) {
      setIsSelected(isSelectedDefault)
    }
  }, [isSelectedDefault])
  

  return (
    <TouchableOpacity
      onPress={onPressSelect}
      style={styles.checkbox}
      hitSlop={15}
    >
      {isSelected && <View style={styles.selected} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
  },
  selected: {
    flex: 1,
    backgroundColor: '#7FFFD4',
  },
});
