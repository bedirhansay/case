import React from "react";

export default function queryParamsHandler(searchParams: any) {
  const { page, sortBy, model, brand, search, orderBy } = searchParams;
  const queryParams = new URLSearchParams();
  if (search) {
    queryParams.append("search", String(search));
    queryParams.append("orderBy", String(orderBy));
  }

  if (page) {
    queryParams.append("page", page.toString());
  }

  if (sortBy) {
    queryParams.append("sortBy", sortBy);
  }

  if (model) {
    if (Array.isArray(model)) {
      for (const query of model) {
        queryParams.append("model", query);
      }
    } else {
      queryParams.append("model", model);
    }
  }

  if (brand) {
    if (Array.isArray(brand)) {
      for (const query of brand) {
        queryParams.append("brand", query);
      }
    } else {
      queryParams.append("brand", brand);
    }
  }

  return queryParams;
}
