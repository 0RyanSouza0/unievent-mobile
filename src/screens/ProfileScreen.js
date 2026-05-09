import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ThemeButton from "../components/common/ThemeButton";
import CourseChip from "../components/profile/CourseChip";
import StatBox from "../components/profile/StatBox";

export default function ProfileScreen({
  theme,
  themeMode,
  user,
  ticketsCount,
  favoritesCount,
  profileVm,
  onMyEvents,
  onLogout,
  toggleTheme,
}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.mainContent}
    >
      <View style={styles.profileTopBar}>
        <Text style={[styles.screenTitle, { color: theme.text }]}>Perfil</Text>
        <ThemeButton theme={theme} themeMode={themeMode} onPress={toggleTheme} />
      </View>

      <View style={styles.profileHero}>
        <View style={[styles.avatar, { backgroundColor: theme.orange }]}>
          <Ionicons name="person" size={44} color="#242424" />
        </View>
        <Text style={[styles.profileName, { color: theme.text }]}>{user?.name}</Text>
        <Text style={[styles.profileEmail, { color: theme.textSoft }]}>{user?.email}</Text>
        <View style={styles.profileActions}>
          <TouchableOpacity
            onPress={profileVm.openProfileModal}
            style={[styles.profileButton, { backgroundColor: theme.orange }]}
          >
            <Text style={styles.profileButtonText}>Editar perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onMyEvents}
            style={[
              styles.profileButton,
              { backgroundColor: theme.mode === "dark" ? "#FFFFFF" : "#242424" },
            ]}
          >
            <Text
              style={[
                styles.profileButtonText,
                { color: theme.mode === "dark" ? "#242424" : "#FFFFFF" },
              ]}
            >
              Meus eventos
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          styles.profileSection,
          { backgroundColor: theme.card, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Cursos</Text>
        <View style={styles.courseWrap}>
          {profileVm.courses.map((course) => (
            <CourseChip
              key={course}
              theme={theme}
              label={course}
              selected={profileVm.selectedCourses.includes(course)}
              onPress={() => profileVm.toggleCourse(course)}
            />
          ))}
        </View>
      </View>

      <View style={styles.profileStats}>
        <StatBox theme={theme} value={ticketsCount} label="Ingressos" />
        <StatBox theme={theme} value={favoritesCount} label="Favoritos" />
      </View>

      <TouchableOpacity
        onPress={onLogout}
        style={[styles.logoutButton, { borderColor: theme.danger }]}
      >
        <Ionicons name="log-out-outline" size={18} color={theme.danger} />
        <Text style={[styles.logoutText, { color: theme.danger }]}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 104,
  },
  profileTopBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: "900",
  },
  profileHero: {
    alignItems: "center",
    marginBottom: 18,
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "900",
  },
  profileEmail: {
    fontSize: 11,
    fontWeight: "700",
    marginTop: 4,
  },
  profileActions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  profileButton: {
    minWidth: 112,
    minHeight: 36,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  profileButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
  },
  profileSection: {
    borderWidth: 1,
    borderRadius: 13,
    padding: 14,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "900",
  },
  courseWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  profileStats: {
    flexDirection: "row",
    gap: 10,
  },
  logoutButton: {
    minHeight: 43,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },
  logoutText: {
    fontSize: 13,
    fontWeight: "900",
  },
});

