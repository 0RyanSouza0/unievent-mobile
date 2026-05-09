import React, { useEffect, useRef } from "react";
import {
  Alert,
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import AppLogo from "../components/common/AppLogo";
import Button from "../components/common/Button";
import CheckRow from "../components/common/CheckRow";
import InputField from "../components/common/InputField";

export default function LoginScreen({ theme, auth, onLoginSuccess, onSignUp, onIntro }) {
  const isDark = theme.mode === "dark";
  const panelY = useRef(new Animated.Value(280)).current;
  const panelOpacity = useRef(new Animated.Value(0)).current;
  const fieldAnims = useRef(
    Array.from({ length: 7 }, () => ({
      opacity: new Animated.Value(0),
      y: new Animated.Value(18),
    }))
  ).current;

  useEffect(() => {
    panelY.setValue(280);
    panelOpacity.setValue(0);
    fieldAnims.forEach((anim) => {
      anim.opacity.setValue(0);
      anim.y.setValue(18);
    });

    Animated.sequence([
      Animated.parallel([
        Animated.timing(panelY, {
          toValue: 0,
          duration: 760,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(panelOpacity, {
          toValue: 1,
          duration: 520,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
      Animated.stagger(
        72,
        fieldAnims.map((anim) =>
          Animated.parallel([
            Animated.timing(anim.opacity, {
              toValue: 1,
              duration: 300,
              easing: Easing.out(Easing.quad),
              useNativeDriver: true,
            }),
            Animated.timing(anim.y, {
              toValue: 0,
              duration: 300,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: true,
            }),
          ])
        )
      ),
    ]).start();
  }, [fieldAnims, panelOpacity, panelY]);

  const AnimatedItem = ({ index, children }) => (
    <Animated.View
      style={{
        opacity: fieldAnims[index].opacity,
        transform: [{ translateY: fieldAnims[index].y }],
      }}
    >
      {children}
    </Animated.View>
  );

  return (
    <SafeAreaView
      style={[
        styles.safe,
        { backgroundColor: isDark ? theme.backgroundAlt : theme.background },
      ]}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.authScroll}
      >
        <View style={styles.authLogoWrap}>
          <AppLogo color="#FFFFFF" size="large" />
        </View>

        <Animated.View
          style={[
            styles.authCard,
            {
              backgroundColor: isDark ? theme.orange : "#242424",
              opacity: panelOpacity,
              transform: [{ translateY: panelY }],
            },
          ]}
        >
          <AnimatedItem index={0}>
            <Text style={styles.authTitle}>Login</Text>
          </AnimatedItem>

          <AnimatedItem index={1}>
            <Text style={styles.authLabel}>E-mail</Text>
            <InputField
              theme={theme}
              value={auth.loginForm.email}
              onChangeText={(email) => auth.updateLoginField("email", email)}
              placeholder="seu.email@fatec.sp.gov.br"
              icon="mail"
              lightOnOrange
              keyboardType="email-address"
            />
          </AnimatedItem>

          <AnimatedItem index={2}>
            <Text style={styles.authLabel}>Senha</Text>
            <InputField
              theme={theme}
              value={auth.loginForm.password}
              onChangeText={(password) => auth.updateLoginField("password", password)}
              placeholder="sua senha"
              icon="lock-closed"
              secureTextEntry={!auth.showLoginPassword}
              rightIcon={auth.showLoginPassword ? "eye-off" : "eye"}
              onRightPress={() => auth.setShowLoginPassword((current) => !current)}
              lightOnOrange
            />
          </AnimatedItem>

          <AnimatedItem index={3}>
            <View style={styles.loginMetaRow}>
              <CheckRow
                label="Lembrar senha"
                checked={auth.loginForm.remember}
                onPress={() => auth.updateLoginField("remember", !auth.loginForm.remember)}
                color="#FFFFFF"
              />
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "Recuperar senha",
                    "Um link fictício de recuperação seria enviado para seu e-mail."
                  )
                }
              >
                <Text style={styles.authSmallLink}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>
          </AnimatedItem>

          {!!auth.loginError && <Text style={styles.formError}>{auth.loginError}</Text>}

          <AnimatedItem index={4}>
            <Button
              label="Login"
              onPress={() => auth.handleLogin(onLoginSuccess)}
              background={isDark ? "#1E1E1E" : theme.orange}
              color="#FFFFFF"
            />
          </AnimatedItem>

          <AnimatedItem index={5}>
            <TouchableOpacity onPress={onSignUp} style={styles.authFooterLink}>
              <Text style={styles.authFooterText}>
                Não tem conta? <Text style={styles.authFooterStrong}>Cadastrar</Text>
              </Text>
            </TouchableOpacity>
          </AnimatedItem>

          <AnimatedItem index={6}>
            <TouchableOpacity onPress={onIntro} style={styles.authIntroLink}>
              <Text style={styles.authFooterText}>Ver introdução</Text>
            </TouchableOpacity>
          </AnimatedItem>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  authScroll: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingTop: 46,
  },
  authLogoWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 42,
  },
  authCard: {
    borderWidth: 0,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 28,
    paddingTop: 26,
    paddingBottom: 70,
    minHeight: 440,
  },
  authTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "900",
    marginBottom: 14,
  },
  authLabel: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
    marginBottom: 6,
  },
  loginMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 2,
    marginBottom: 18,
  },
  authSmallLink: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },
  formError: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
    backgroundColor: "rgba(0,0,0,0.22)",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    marginVertical: 8,
  },
  authFooterLink: {
    alignItems: "center",
    marginTop: 14,
  },
  authIntroLink: {
    alignItems: "center",
    marginTop: 8,
  },
  authFooterText: {
    color: "rgba(255,255,255,0.82)",
    fontSize: 11,
    fontWeight: "700",
  },
  authFooterStrong: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
});

