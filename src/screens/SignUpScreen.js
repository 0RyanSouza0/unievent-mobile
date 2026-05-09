import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppLogo from "../components/common/AppLogo";
import Button from "../components/common/Button";
import CheckRow from "../components/common/CheckRow";
import InputField from "../components/common/InputField";

export default function SignUpScreen({ theme, auth, onCreateSuccess, onSignIn }) {
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.orange }]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.signUpScroll}
      >
        <View style={styles.signUpLogoWrap}>
          <AppLogo color="#FFFFFF" size="medium" />
        </View>

        <View style={styles.signUpCard}>
          <Text style={styles.authTitle}>Cadastro</Text>

          <Text style={styles.authLabel}>Nome</Text>
          <InputField
            theme={theme}
            value={auth.signUpForm.name}
            onChangeText={(name) => auth.updateSignUpField("name", name)}
            placeholder="Nome completo"
            icon="person"
            lightOnOrange
          />

          <Text style={styles.authLabel}>E-mail</Text>
          <InputField
            theme={theme}
            value={auth.signUpForm.email}
            onChangeText={(email) => auth.updateSignUpField("email", email)}
            placeholder="E-mail institucional"
            icon="mail"
            keyboardType="email-address"
            lightOnOrange
          />

          <Text style={styles.authLabel}>Senha</Text>
          <InputField
            theme={theme}
            value={auth.signUpForm.password}
            onChangeText={(password) => auth.updateSignUpField("password", password)}
            placeholder="Digite sua senha"
            icon="lock-closed"
            secureTextEntry={!auth.showSignPassword}
            rightIcon={auth.showSignPassword ? "eye-off" : "eye"}
            onRightPress={() => auth.setShowSignPassword((current) => !current)}
            lightOnOrange
          />

          <Text style={styles.authLabel}>Confirmar senha</Text>
          <InputField
            theme={theme}
            value={auth.signUpForm.confirm}
            onChangeText={(confirm) => auth.updateSignUpField("confirm", confirm)}
            placeholder="Confirme sua senha"
            icon="lock-closed"
            secureTextEntry={!auth.showConfirmPassword}
            rightIcon={auth.showConfirmPassword ? "eye-off" : "eye"}
            onRightPress={() => auth.setShowConfirmPassword((current) => !current)}
            lightOnOrange
          />

          {!!auth.signUpError && <Text style={styles.formError}>{auth.signUpError}</Text>}

          <Button
            label="Criar conta"
            onPress={() => auth.handleSignUp(onCreateSuccess)}
            background="#1E1E1E"
            color="#FFFFFF"
          />

          <CheckRow
            label="Concordo com os Termos de Uso e Privacidade"
            checked={auth.signUpForm.terms}
            onPress={() => auth.updateSignUpField("terms", !auth.signUpForm.terms)}
            color="#FFFFFF"
          />

          <TouchableOpacity onPress={onSignIn} style={styles.authFooterLink}>
            <Text style={styles.authFooterText}>
              Já possui conta? <Text style={styles.authFooterStrong}>Entrar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  signUpScroll: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingTop: 44,
    paddingBottom: 44,
  },
  signUpLogoWrap: {
    alignItems: "center",
    marginBottom: 22,
  },
  signUpCard: {
    borderWidth: 0,
    borderRadius: 0,
    padding: 0,
    marginTop: 0,
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

