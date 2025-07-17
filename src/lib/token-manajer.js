const ACCESS_TOKEN_KEY = 'access_token';

export class TokenManager {
  static setToken({ access_token }) {
    localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
  }
  static getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }
  static removeToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}