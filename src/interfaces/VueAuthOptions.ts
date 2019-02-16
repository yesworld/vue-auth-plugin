export type TokenStore = 'vuex' | 'localStorage' | 'sessionStorage' | 'cookie';
export type Method = 'GET' | 'POST';
export type BasicRedirectData = { url: string; method: Method; };
export type BasicRedirectEnabledData = { url: string; method: Method; enabled?: boolean; };
export type RedirectData = BasicRedirectData & { redirect?: string; };
export type LoginRedirectData = RedirectData & { headerToken: string; fetchUser?: boolean; };
export type RequestRedirectData = RedirectData & { makeRequest?: boolean; };
export type FetchData = BasicRedirectEnabledData & { interval?: number; };

export type AuthUser = { [key: string]: any };

export interface VueAuthOptions {
  authMeta?: string;
  rolesVar?: string;
  tokenDefaultName?: string;
  userDefaultName?: string;
  tokenStore?: TokenStore[];
  vuexStoreSpace?: string;
  headerTokenReplace?: string;

  authRedirect?: string;

  loginData?: LoginRedirectData;
  logoutData?: RequestRedirectData;
  fetchData?: FetchData;
}
