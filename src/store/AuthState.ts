import LoginResponse from '../DTO/Response/LoginResponse';

export interface AuthState {
  firebaseToken: string | null;
  user: LoginResponse | null;
}
