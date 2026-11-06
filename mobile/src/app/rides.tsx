
import { View, Text, StyleSheet } from 'react-native';

export default function RidesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Rides</Text>
      <Text style={styles.subtitle}>
        Manage your upcoming and completed rides.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#24243A',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
    color: '#777887',
  },
});
