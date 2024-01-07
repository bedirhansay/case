const { NEXT_PUBLIC_API_URL } = process.env;

export interface ApiConfig {
  url: string | undefined;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: NEXT_PUBLIC_API_URL,
  timeout: 10000,
};
