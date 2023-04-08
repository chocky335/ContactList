import { useMemo } from 'react';
import { View } from 'react-native';

export interface SeparatorProps {
  size: number
}

export default function Separator({
  size
}: SeparatorProps) {
  const style = useMemo(() =>( {
    paddingBottom: size
  }), [size])
  return (
    <View style={style} />
  );
}
