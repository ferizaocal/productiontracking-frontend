export interface AuthState {
  firebaseToken: string | null;
  user: User | null;
}
export interface User {
  email: string;
  password: string;
}
