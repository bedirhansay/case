import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const { NEXT_PUBLIC_MOCK_API_URL } = process.env;

export async function GET(request: NextRequest, response: Response) {
  const url = request.nextUrl.pathname;
  const list = url.split("/");
  const id = list[list.length - 1];
  const { data } = await axios(`${NEXT_PUBLIC_MOCK_API_URL}/${id}`);
  return NextResponse.json({
    data: data,
  });
}
