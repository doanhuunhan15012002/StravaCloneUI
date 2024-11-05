// src/components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header({ title }) {
  return (
    <View style={styles.headerContainer}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>
      
      {/* Right Icons */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="chatbubble-outline" size={24} color="#000" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="notifications-outline" size={24} color="#000" />
          {/* Notification Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>20</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 16,
  },
  iconButton: {
    marginLeft: 15,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
