import React from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
    <View >
        {/* Kết hợp cả 3 View vào trong container */}
        <View style={styles.profileWrapper}>
            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.profileImage}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>Hòa nek</Text>
                    <Text style={styles.userEmail} numberOfLines={2}>October 15, 2024 at 7:23PM - TPHCM City</Text>

                </View>
            </View>

            {/* Recent Activity Note */}
            <View style={styles.recentActivityNote}>
                <Text style={styles.noteText}>RUN</Text>
            </View>

            {/* Stats Section */}
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statLabel}>Distance</Text>
                    <Text style={styles.statValue}>3.15 km</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statLabel}>Pace</Text>
                    <Text style={styles.statValue}>11:34 /km</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statLabel}>Time</Text>
                    <Text style={styles.statValue}>38m 37s</Text>
                </View>
            </View>
        </View>
    </View>
 
    </View>
);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
  },
  profileWrapper: {
      backgroundColor: '#fff',
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 5,
      elevation: 5,
      padding: 15,
  },
  profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15, 
  },
  profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 10,
  },
  userEmail: {
      fontSize: 14,
      color: '#666',
      textAlign: 'left',
      flexWrap: 'wrap',       // Đảm bảo xuống dòng nếu text dài
      flexShrink: 1,          // Cho phép text co lại nếu cần
      width: '100%',          // Chiếm toàn bộ chiều ngang của View cha
      overflow: 'hidden',     // Đảm bảo không bị tràn ra ngoài
  },
  userInfo: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      flex: 1,                // Cho phép View chứa Text chiếm toàn bộ không gian còn lại
  },
  userName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
  },
  
  
  recentActivityNote: {
      marginBottom: 15,  
  },
  noteText: {
      fontSize: 16,
      color: '#999',
      fontWeight: 'bold',
  },
  statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  statItem: {
      alignItems: 'flex-start',
  },
  statValue: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
  },
  statLabel: {
      fontSize: 14,
      color: '#666',
  },
});
