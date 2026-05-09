export function createUser({ name = "", email = "", password = "" } = {}) {
  return {
    name,
    email,
    password,
  };
}

