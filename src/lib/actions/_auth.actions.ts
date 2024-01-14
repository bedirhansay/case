"use server";

import { LoginDTO } from "@/lib/types";
import { apiWorker } from "../api/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const setTokenCookie = (token: string) => {
  const oneMonth = 24 * 60 * 60 * 1000 * 30;
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + oneMonth);

  cookies().set("admin-token", token, {
    expires: expirationDate,
  });
};

const handleResponse = (response: any) => {
  if (response.status !== 200) {
    return { kind: "error" };
  }
  const { data } = response;
  return { kind: "ok", data };
};

const handleError = (e: any) => {
  return { kind: "error", error: e.response?.data };
};

const handleRedirect = (url: string) => {
  redirect(url);
};

export const login = async (payload: LoginDTO) => {
  try {
    const response = await apiWorker.instance.post(`auth/login`, payload);
    if (response.status === 200) {
      const { data } = response;
      setTokenCookie(data.token);
      await apiWorker.setAuth(data.token);
      return data;
    } else {
      return handleResponse(response);
    }
  } catch (e: any) {
    return handleError(e);
  }
};
