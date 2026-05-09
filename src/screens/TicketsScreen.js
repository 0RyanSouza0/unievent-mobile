import React from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import EmptyState from "../components/common/EmptyState";
import Header from "../components/layout/Header";
import TicketCard from "../components/tickets/TicketCard";

export default function TicketsScreen({ theme, tickets, events, onCancelTicket }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.mainContent}
    >
      <Header
        theme={theme}
        title="Meus ingressos"
        actionIcon="filter"
        onAction={() => Alert.alert("Meus ingressos", "Filtro visual do protótipo UniEvent.")}
      />
      {tickets.length ? (
        <View style={styles.ticketList}>
          {tickets.map((ticket) => {
            const event = events.find((item) => item.id === ticket.eventId);
            if (!event) return null;
            return (
              <TicketCard
                key={ticket.id}
                theme={theme}
                ticket={ticket}
                event={event}
                onCancel={() => onCancelTicket(ticket.id)}
              />
            );
          })}
        </View>
      ) : (
        <EmptyState
          theme={theme}
          icon="ticket-outline"
          text="Você ainda não possui ingressos"
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 104,
  },
  ticketList: {
    gap: 16,
  },
});

