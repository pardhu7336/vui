
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
  primary: '#464EB8',
  background: '#FAF9F6',
  white: '#FFFFFF',
  text: '#24243A',
  secondary: '#777887',
  border: '#E8E8ED',
  lavender: '#F0F0FF',
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>vui.</Text>

          <Pressable
            style={styles.avatar}
            onPress={() => Alert.alert('Profile', 'Profile screen coming soon!')}
          >
            <Text style={styles.avatarText}>R</Text>
          </Pressable>
        </View>

        {/* Greeting */}
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Hey, Rahul!</Text>
          <Text style={styles.heading}>
            Where are you heading today?
          </Text>
          <Text style={styles.university}>
            SRM University - AP
          </Text>
        </View>

        {/* Main Actions */}
        <View style={styles.actions}>
          <Pressable
            style={styles.actionCard}
            onPress={() =>
              Alert.alert('Find a Ride', 'Ride search is coming next!')
            }
          >
            <View style={styles.actionIcon}>
              <Text style={styles.iconText}>↗</Text>
            </View>

            <Text style={styles.actionTitle}>Find a ride</Text>
            <Text style={styles.actionDescription}>
              Find students travelling your way.
            </Text>

            <Text style={styles.actionLink}>
              Explore rides →
            </Text>
          </Pressable>

          <Pressable
            style={[styles.actionCard, styles.offerCard]}
            onPress={() =>
              Alert.alert('Offer a Ride', 'Ride publishing is coming next!')
            }
          >
            <View style={[styles.actionIcon, styles.offerIcon]}>
              <Text style={styles.iconText}>+</Text>
            </View>

            <Text style={styles.actionTitle}>Offer a ride</Text>
            <Text style={styles.actionDescription}>
              Have empty seats? Take someone along.
            </Text>

            <Text style={styles.actionLink}>
              Publish a ride →
            </Text>
          </Pressable>
        </View>

        {/* Upcoming Ride */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your next ride</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <View style={styles.upcomingCard}>
          <View style={styles.rideTop}>
            <Text style={styles.rideLabel}>UPCOMING RIDE</Text>
            <Text style={styles.rideStatus}>Sample</Text>
          </View>

          <View style={styles.route}>
            <View style={styles.routePoints}>
              <View style={styles.dot} />
              <View style={styles.routeLine} />
              <View style={styles.destinationDot} />
            </View>

            <View style={styles.routeDetails}>
              <Text style={styles.location}>Guntur</Text>
              <Text style={styles.destination}>
                SRM University - AP
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.rideTime}>
            Your upcoming rides will appear here.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Better rides. Better together.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  container: {
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: -1.5,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.lavender,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: COLORS.primary,
    fontSize: 17,
    fontWeight: '700',
  },

  greeting: {
    marginTop: 35,
    marginBottom: 25,
  },

  greetingText: {
    fontSize: 17,
    color: COLORS.secondary,
    marginBottom: 8,
  },

  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    lineHeight: 36,
    letterSpacing: -0.7,
  },

  university: {
    marginTop: 12,
    fontSize: 13,
    color: COLORS.secondary,
  },

  actions: {
    gap: 14,
  },

  actionCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 20,
  },

  offerCard: {
    backgroundColor: COLORS.lavender,
    borderColor: COLORS.lavender,
  },

  actionIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.lavender,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  offerIcon: {
    backgroundColor: COLORS.white,
  },

  iconText: {
    fontSize: 25,
    color: COLORS.primary,
    fontWeight: '600',
  },

  actionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },

  actionDescription: {
    fontSize: 14,
    color: COLORS.secondary,
    marginTop: 7,
    lineHeight: 21,
  },

  actionLink: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '700',
    marginTop: 17,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: COLORS.text,
  },

  seeAll: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '600',
  },

  upcomingCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 18,
  },

  rideTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  rideLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.secondary,
    letterSpacing: 1,
  },

  rideStatus: {
    fontSize: 11,
    color: COLORS.primary,
    backgroundColor: COLORS.lavender,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  route: {
    flexDirection: 'row',
    gap: 14,
  },

  routePoints: {
    alignItems: 'center',
    paddingVertical: 5,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },

  routeLine: {
    height: 31,
    width: 1,
    backgroundColor: COLORS.border,
  },

  destinationDot: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: '#26845B',
  },

  routeDetails: {
    justifyContent: 'space-between',
    paddingBottom: 2,
  },

  location: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
  },

  destination: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 17,
  },

  rideTime: {
    fontSize: 13,
    color: COLORS.secondary,
  },

  footer: {
    marginTop: 30,
    alignItems: 'center',
  },

  footerText: {
    color: COLORS.secondary,
    fontSize: 12,
  },
});
