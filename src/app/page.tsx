import { HomePage } from "@/container/HomePage/HomePage";
import { callApi } from "@/lib/actions/__api.actions";
import queryParamsHandler from "@/lib/utils/queryParamsHandler";
import { Metadata } from "next";

interface SearchParams {
  sortBy?: string;
  search?: string;
  model?: string | string[];
  brand?: string | string[];
  page?: number;
  orderBy?: string;
}

export const metadata: Metadata = {
  title: "Etharation | Home",
  description:
    "En kaliteli ürünlerle dolu e-ticaret mağazamıza hoş geldiniz. Geniş ürün yelpazemiz ve üstün hizmetlerimiz hakkında daha fazla bilgi alın.",
};

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  if (!searchParams) {
  }
  const queryParams = queryParamsHandler(searchParams);

  let prod = "";
  const path = `/products?${queryParams.toString()}`;
  const [products, categories] = await Promise.all([
    callApi({ method: "get", path: path }),
    callApi({ method: "get", path: "categories" }),
  ]);

  return (
    <HomePage
      products={products.data ? products.data : prod}
      categories={categories.data}
    />
  );
}
