import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const { NEXT_PUBLIC_MOCK_API_URL } = process.env;

export async function GET(request: NextRequest, response: NextResponse) {
  const { searchParams, search } = new URL(request.url);

  const pageQueryParam = searchParams.get("page");

  const { data } = await axios(`${NEXT_PUBLIC_MOCK_API_URL}${search}`);

  const page = pageQueryParam ? parseInt(pageQueryParam) : 1;
  const pageSize = 12;
  const totalProducts = data.length;

  const totalPages = Math.ceil(totalProducts / pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedData = data.slice(startIndex, endIndex);

  return Response.json({
    data: slicedData,
    totalPages,
    currentPage: page,
  });
}
