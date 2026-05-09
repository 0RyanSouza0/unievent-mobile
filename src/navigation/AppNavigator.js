import React, { useState } from "react";
import { Alert, StatusBar, View } from "react-native";
import ScreenContainer from "../components/layout/ScreenContainer";
import ProfileEditModal from "../components/profile/ProfileEditModal";
import { ROUTES } from "./routes";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";
import IntroScreen from "../screens/IntroScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SplashScreen from "../screens/SplashScreen";
import TicketsScreen from "../screens/TicketsScreen";
import { useAuthViewModel } from "../viewmodels/useAuthViewModel";
import { useEventsViewModel } from "../viewmodels/useEventsViewModel";
import { useFavoritesViewModel } from "../viewmodels/useFavoritesViewModel";
import { useIntroViewModel } from "../viewmodels/useIntroViewModel";
import { useProfileViewModel } from "../viewmodels/useProfileViewModel";
import { useThemeViewModel } from "../viewmodels/useThemeViewModel";
import { useTicketsViewModel } from "../viewmodels/useTicketsViewModel";

export default function AppNavigator() {
  const [currentScreen, setCurrentScreen] = useState(ROUTES.SPLASH);
  const themeVm = useThemeViewModel();
  const authVm = useAuthViewModel();
  const eventsVm = useEventsViewModel();
  const favoritesVm = useFavoritesViewModel(eventsVm.events);
  const ticketsVm = useTicketsViewModel();
  const introVm = useIntroViewModel();
  const profileVm = useProfileViewModel({ updateUser: authVm.updateUser });

  const { theme, themeMode, toggleTheme } = themeVm;

  const navigate = (route) => {
    setCurrentScreen(route);
  };

  const openEventDetails = (event) => {
    eventsVm.selectEvent(event);
    navigate(ROUTES.EVENT_DETAILS);
  };

  const reserveSelectedEvent = () => {
    const result = ticketsVm.reserveTicket(eventsVm.selectedEvent);
    if (!result.ok && result.reason === "duplicate") {
      Alert.alert("Ingresso já reservado", result.message);
    }
    navigate(ROUTES.TICKETS);
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case ROUTES.SPLASH:
        return (
          <SplashScreen
            theme={theme}
            onDone={() => navigate(ROUTES.LOGIN)}
          />
        );

      case ROUTES.INTRO:
        return (
          <IntroScreen
            theme={theme}
            introIndex={introVm.introIndex}
            nextIntro={introVm.nextIntro}
            previousIntro={introVm.previousIntro}
            onFinish={() => navigate(ROUTES.LOGIN)}
          />
        );

      case ROUTES.LOGIN:
        return (
          <LoginScreen
            theme={theme}
            auth={authVm}
            onLoginSuccess={() => navigate(ROUTES.HOME)}
            onSignUp={() => {
              authVm.clearSignUpError();
              navigate(ROUTES.SIGN_UP);
            }}
            onIntro={() => {
              introVm.resetIntro();
              navigate(ROUTES.INTRO);
            }}
          />
        );

      case ROUTES.SIGN_UP:
        return (
          <SignUpScreen
            theme={theme}
            auth={authVm}
            onCreateSuccess={() => navigate(ROUTES.HOME)}
            onSignIn={() => navigate(ROUTES.LOGIN)}
          />
        );

      case ROUTES.HOME:
        return (
          <ScreenContainer
            theme={theme}
            activeRoute={ROUTES.HOME}
            onNavigate={navigate}
            withBottomNav
          >
            <HomeScreen
              theme={theme}
              themeMode={themeMode}
              user={authVm.user}
              eventsVm={eventsVm}
              favoritesVm={favoritesVm}
              onOpenEvent={openEventDetails}
              toggleTheme={toggleTheme}
            />
          </ScreenContainer>
        );

      case ROUTES.EVENT_DETAILS:
        return (
          <ScreenContainer theme={theme}>
            <EventDetailsScreen
              theme={theme}
              event={eventsVm.selectedEvent}
              isFavorite={favoritesVm.isFavorite(eventsVm.selectedEvent.id)}
              onBack={() => navigate(ROUTES.HOME)}
              onFavorite={() => favoritesVm.toggleFavorite(eventsVm.selectedEvent.id)}
              onReserve={reserveSelectedEvent}
            />
          </ScreenContainer>
        );

      case ROUTES.TICKETS:
        return (
          <ScreenContainer
            theme={theme}
            activeRoute={ROUTES.TICKETS}
            onNavigate={navigate}
            withBottomNav
          >
            <TicketsScreen
              theme={theme}
              tickets={ticketsVm.tickets}
              events={eventsVm.events}
              onCancelTicket={ticketsVm.cancelTicket}
            />
          </ScreenContainer>
        );

      case ROUTES.FAVORITES:
        return (
          <ScreenContainer
            theme={theme}
            activeRoute={ROUTES.FAVORITES}
            onNavigate={navigate}
            withBottomNav
          >
            <FavoritesScreen
              theme={theme}
              events={favoritesVm.favoriteEvents}
              favoritesVm={favoritesVm}
              onOpenEvent={openEventDetails}
            />
          </ScreenContainer>
        );

      case ROUTES.PROFILE:
        return (
          <ScreenContainer
            theme={theme}
            activeRoute={ROUTES.PROFILE}
            onNavigate={navigate}
            withBottomNav
          >
            <ProfileScreen
              theme={theme}
              themeMode={themeMode}
              user={authVm.user}
              ticketsCount={ticketsVm.tickets.length}
              favoritesCount={favoritesVm.favorites.length}
              profileVm={profileVm}
              onMyEvents={() => navigate(ROUTES.TICKETS)}
              onLogout={() => authVm.logout(() => navigate(ROUTES.LOGIN))}
              toggleTheme={toggleTheme}
            />
          </ScreenContainer>
        );

      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar
        barStyle={theme.mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor={
          currentScreen === ROUTES.SPLASH && theme.mode === "dark"
            ? theme.orange
            : theme.background
        }
      />
      {renderCurrentScreen()}
      <ProfileEditModal
        theme={theme}
        visible={profileVm.profileModalVisible}
        user={authVm.user}
        onClose={profileVm.closeProfileModal}
        onSave={profileVm.saveProfile}
      />
    </View>
  );
}

