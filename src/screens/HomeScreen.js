import React from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ThemeButton from "../components/common/ThemeButton";
import EmptyState from "../components/common/EmptyState";
import CategoryChips from "../components/events/CategoryChips";
import EventCard from "../components/events/EventCard";
import { categoriesMock } from "../data/categoriesMock";

function firstName(name) {
  return name?.trim()?.split(" ")?.[0] || "Teste";
}

function SectionTitle({ theme, title }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>{title}</Text>
    </View>
  );
}

function InviteCard({ theme }) {
  return (
    <View
      style={[
        styles.inviteCard,
        {
          backgroundColor: theme.mode === "dark" ? "#1B1B1B" : "#FFFFFF",
          borderColor: theme.mode === "dark" ? "#2B2B2B" : theme.border,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.inviteTitle, { color: theme.text }]}>
          Convide seus amigos
        </Text>
        <Text style={[styles.inviteText, { color: theme.textSoft }]}>
          Eventos são ainda melhores com amigos!
        </Text>
        <TouchableOpacity
          onPress={() => Alert.alert("Compartilhar", "Convite fictício criado para seus amigos.")}
          style={[styles.inviteButton, { backgroundColor: theme.orange }]}
        >
          <Text style={styles.inviteButtonText}>Compartilhe</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inviteTicket}>
        <Ionicons name="ticket" size={42} color="#1F1F1F" />
      </View>
    </View>
  );
}

export default function HomeScreen({
  theme,
  themeMode,
  user,
  eventsVm,
  favoritesVm,
  onOpenEvent,
  toggleTheme,
}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.mainContent}
    >
      <View style={styles.homeHeader}>
        <View>
          <Text style={[styles.brand, { color: theme.orange }]}>UNIEVENT</Text>
          <Text style={[styles.greeting, { color: theme.text }]}>
            Olá, {firstName(user?.name)}!
          </Text>
          <Text style={[styles.welcomeCopy, { color: theme.textSoft }]}>
            Bem-vindo! Conecte-se, participe e aproveite ao máximo!
          </Text>
        </View>
        <View style={styles.headerActions}>
          <ThemeButton theme={theme} themeMode={themeMode} onPress={toggleTheme} />
          <TouchableOpacity
            style={[
              styles.iconCircle,
              { backgroundColor: theme.card, borderColor: theme.border },
            ]}
            onPress={() =>
              Alert.alert("Notificações", "Você não possui notificações novas.")
            }
          >
            <Ionicons name="notifications-outline" size={18} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.searchBox, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Ionicons name="search" size={18} color={theme.muted} />
        <TextInput
          value={eventsVm.search}
          onChangeText={eventsVm.setSearch}
          placeholder="Buscar por evento, local ou categoria"
          placeholderTextColor={theme.muted}
          style={[styles.searchInput, { color: theme.text }]}
        />
      </View>

      <CategoryChips
        theme={theme}
        categories={categoriesMock}
        selectedCategory={eventsVm.selectedCategory}
        onSelectCategory={eventsVm.setSelectedCategory}
      />

      <View style={styles.sectionHeaderSplit}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Próximos eventos
        </Text>
        <TouchableOpacity onPress={() => eventsVm.setSelectedCategory("Todos")}>
          <Text style={[styles.seeMoreText, { color: theme.orange }]}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      {eventsVm.featuredEvents.length ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalEvents}
        >
          {eventsVm.featuredEvents.map((event) => (
            <EventCard
              key={event.id}
              theme={theme}
              event={event}
              favorite={favoritesVm.isFavorite(event.id)}
              onPress={() => onOpenEvent(event)}
              onFavorite={() => favoritesVm.toggleFavorite(event.id)}
              variant="featured"
            />
          ))}
        </ScrollView>
      ) : (
        <EmptyState theme={theme} icon="calendar-outline" text="Nenhum evento encontrado" />
      )}

      <InviteCard theme={theme} />

      <SectionTitle theme={theme} title="Todos eventos" />
      <View style={styles.eventList}>
        {(eventsVm.filteredEvents.length
          ? eventsVm.filteredEvents
          : eventsVm.newEvents.length
          ? eventsVm.newEvents
          : eventsVm.featuredEvents
        ).map((event) => (
          <EventCard
            key={event.id}
            theme={theme}
            event={event}
            favorite={favoritesVm.isFavorite(event.id)}
            onPress={() => onOpenEvent(event)}
            onFavorite={() => favoritesVm.toggleFavorite(event.id)}
            variant="list"
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 104,
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  brand: {
    fontSize: 20,
    fontWeight: "900",
  },
  greeting: {
    marginTop: 14,
    fontSize: 16,
    fontWeight: "900",
  },
  welcomeCopy: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: "700",
    maxWidth: 250,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    minHeight: 34,
    borderWidth: 1,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "700",
    paddingVertical: Platform.OS === "web" ? 10 : 8,
  },
  sectionHeader: {
    marginTop: 14,
    marginBottom: 10,
  },
  sectionHeaderSplit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "900",
  },
  seeMoreText: {
    fontSize: 10,
    fontWeight: "900",
  },
  horizontalEvents: {
    gap: 14,
    paddingRight: 18,
  },
  eventList: {
    gap: 10,
  },
  inviteCard: {
    minHeight: 76,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  inviteTitle: {
    fontSize: 14,
    fontWeight: "900",
  },
  inviteText: {
    marginTop: 4,
    fontSize: 9,
    fontWeight: "700",
  },
  inviteButton: {
    marginTop: 10,
    alignSelf: "flex-start",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  inviteButtonText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "900",
  },
  inviteTicket: {
    width: 58,
    height: 58,
    borderRadius: 8,
    backgroundColor: "#FF6B1A",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "32deg" }],
  },
});

