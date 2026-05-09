import { useState } from "react";
import {
  DEFAULT_USER,
  EMPTY_LOGIN_FORM,
  EMPTY_SIGN_UP_FORM,
} from "../constants/appConstants";
import { createUser } from "../models/UserModel";
import { validateLogin, validateSignUp } from "../utils/validators";

export function useAuthViewModel() {
  const [user, setUser] = useState(DEFAULT_USER);
  const [loginForm, setLoginForm] = useState(EMPTY_LOGIN_FORM);
  const [signUpForm, setSignUpForm] = useState(EMPTY_SIGN_UP_FORM);
  const [loginError, setLoginError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignPassword, setShowSignPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const updateLoginField = (field, value) => {
    setLoginForm((current) => ({ ...current, [field]: value }));
  };

  const updateSignUpField = (field, value) => {
    setSignUpForm((current) => ({ ...current, [field]: value }));
  };

  const handleLogin = (onSuccess) => {
    const error = validateLogin(loginForm);
    if (error) {
      setLoginError(error);
      return false;
    }

    const emailName = loginForm.email.split("@")[0]?.trim();
    setUser((current) =>
      createUser({
        name: current?.name || emailName || "Teste",
        email: loginForm.email.trim(),
      })
    );
    setLoginError("");
    onSuccess?.();
    return true;
  };

  const handleSignUp = (onSuccess) => {
    const error = validateSignUp(signUpForm);
    if (error) {
      setSignUpError(error);
      return false;
    }

    setUser(
      createUser({
        name: signUpForm.name.trim(),
        email: signUpForm.email.trim(),
        password: signUpForm.password,
      })
    );
    setSignUpError("");
    onSuccess?.();
    return true;
  };

  const clearSignUpError = () => setSignUpError("");

  const updateUser = (nextUser) => {
    setUser((current) =>
      createUser({
        ...current,
        name: nextUser.name,
        email: nextUser.email,
      })
    );
  };

  const logout = (onLogout) => {
    setLoginForm(EMPTY_LOGIN_FORM);
    setLoginError("");
    onLogout?.();
  };

  return {
    user,
    updateUser,
    loginForm,
    signUpForm,
    loginError,
    signUpError,
    showLoginPassword,
    showSignPassword,
    showConfirmPassword,
    setShowLoginPassword,
    setShowSignPassword,
    setShowConfirmPassword,
    setLoginForm,
    setSignUpForm,
    updateLoginField,
    updateSignUpField,
    handleLogin,
    handleSignUp,
    clearSignUpError,
    logout,
  };
}

