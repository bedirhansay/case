import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const { NEXT_PUBLIC_MOCK_API_URL } = process.env;
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest, response: NextResponse) {
  const { data } = await axios(NEXT_PUBLIC_MOCK_API_URL as string);
  const brands = [...new Set(data.map((item: any) => item.brand))];
  const models = [...new Set(data.map((item: any) => item.model))];

  return Response.json({
    brands: brands,
    models: models,
  });
}
