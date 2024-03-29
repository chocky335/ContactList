import { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function Screen({children}: PropsWithChildren) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
