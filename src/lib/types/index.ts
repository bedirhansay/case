export type LoginDTO = {
  email?: string;
  password: string;
};

export type RegisterDTO = {
  email?: string;
  password: string;
};

export type ProductDTO = {
  name: string;
  image: string;
  price: string;
  model: string;
  brand: string;
  description: string;
  id: number;
  createdAt: string;
};

export type ApiResponse = {
  data: ProductDTO[];
  totalPages: number;
  currentPage: number;
};

export type FilterDTO = {
  brands: string[];
  models: string[];
};
