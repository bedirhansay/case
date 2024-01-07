const { NEXT_PUBLIC_API_URL, NODE_ENV } = process.env;

const getApiUrl = (): string => {
  if (NODE_ENV === "development") {
    return NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  } else {
    return NEXT_PUBLIC_API_URL || "https://production-api-url.com";
  }
};

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: getApiUrl(),
  timeout: 10000,
};

export interface ApiConfig {
  url: string | undefined;
  timeout: number;
}
