export function validateLogin({ email, password }) {
  if (!email.trim() || !password.trim()) {
    return "Preencha e-mail e senha para continuar.";
  }
  return "";
}

export function validateSignUp({ name, email, password, confirm, terms }) {
  if (!name.trim()) return "Informe seu nome completo.";
  if (!email.trim()) return "Informe seu e-mail institucional.";
  if (!password || password !== confirm) return "As senhas precisam ser iguais.";
  if (!terms) return "Aceite os termos para criar sua conta.";
  return "";
}

export function validateProfile({ name, email }) {
  if (!name.trim() || !email.trim()) {
    return "Informe nome e e-mail para salvar.";
  }
  return "";
}

