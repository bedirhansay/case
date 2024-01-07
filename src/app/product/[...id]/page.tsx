import { DetailPage } from "@/container/DetailPage/DetailPage";
import { callApi } from "@/lib/actions/__api.actions";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data } = await callApi({ path: `/products/${id}`, method: "get" });

  return <DetailPage singleItem={data.data} />;
}
