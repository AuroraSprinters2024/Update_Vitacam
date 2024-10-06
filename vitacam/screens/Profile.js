import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Importing Ionicons

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back-outline" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.bgd}></View>

      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg",
          }} // Add the profile image URL here
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>S.M.A. Perera</Text>
        <Text style={styles.emailText}>Perera23@gmail.com</Text>
        <Text style={styles.passwordText}>•••••••••</Text>

        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="home-outline" size={28} color="#1A3C75" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="camera-outline" size={28} color="#1A3C75" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="settings-outline" size={28} color="#1A3C75" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1A3C75",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    color: "#1A3C75",
    alignContent: "center",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
  },
  emailText: {
    fontSize: 16,
    color: "#666",
  },
  passwordText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 100,
  },
  editProfileButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1A3C75",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  editProfileText: {
    color: "#1A3C75",
  },
  logoutButton: {
    backgroundColor: "#1A3C75",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 30,
  },
  logoutText: {
    color: "#fff",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 16,
    backgroundColor: "#E6EDF7",
  },
  iconButton: {
    padding: 16,
  },
});

export default Profile;
