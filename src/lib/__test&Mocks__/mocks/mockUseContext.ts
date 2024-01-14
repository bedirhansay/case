import { ContextProps } from "@/lib/context/ContextProvider";

export const mockContextData: ContextProps = {
  cart: [
    {
      id: 1,
      product: {
        name: "Aston Martin",
        brand: "BrSmart",
        image: "https://example.com/mock-image-url",
      },
      quantity: 1,
    },
  ],
  product: [
    {
      createdAt: "2023-07-17T07:21:02.529Z",
      name: "Bentley Focus",
      image: "https://loremflickr.com/640/480/food",
      price: "51.00",
      description:
        "Quasi adipisci sint veniam delectus. Illum laboriosam minima dignissimos natus earum facere consequuntur eius vero. Itaque facilis at tempore ipsa. Accusamus nihil fugit velit possimus expedita error porro aliquid. Optio magni mollitia veritatis repudiandae tenetur nemo. Id consectetur fuga ipsam quidem voluptatibus sed magni dolore.\n" +
        "Facilis commodi dolores sapiente delectus nihil ex a perferendis. Totam deserunt assumenda inventore. Incidunt nesciunt adipisci natus porro deleniti nisi incidunt laudantium soluta. Nostrum optio ab facilis quisquam.\n" +
        "Soluta laudantium ipsa ut accusantium possimus rem. Illo voluptatibus culpa incidunt repudiandae placeat animi. Delectus id in animi incidunt autem. Ipsum provident beatae nisi cumque nulla iure.",
      model: "CTS",
      brand: "Lamborghini",
      id: 1,
    },
    {
      createdAt: "2023-07-17T02:49:46.692Z",
      name: "Aston Martin Durango",
      image: "https://loremflickr.com/640/480/food",
      price: "374.00",
      description:
        "Odio et voluptates velit omnis incidunt dolor. Illo sint quisquam tenetur dolore nemo molestiae. Dolorum odio dicta placeat. Commodi rerum molestias quibusdam labore. Odio libero doloribus. Architecto repellendus aperiam nulla at at voluptatibus ipsum.\n" +
        "Fugit expedita a quo totam quaerat amet eveniet laboriosam. Ad assumenda atque porro neque iusto. Inventore repudiandae esse non sit veritatis ab reprehenderit quas. Sit qui natus exercitationem quis commodi vero.\n" +
        "Iure reiciendis quas corrupti incidunt repellat voluptatem esse eveniet. Aliquid illo cum doloremque similique. Blanditiis corporis repellendus cumque totam quod iusto dolorum. Incidunt a eos eum voluptas tempora voluptas reiciendis autem.",
      model: "Roadster",
      brand: "Smart",
      id: 2,
    },
    {
      createdAt: "2023-07-16T08:46:46.400Z",
      name: "Ford XC90",
      image: "https://loremflickr.com/640/480/city",
      price: "735.00",
      description:
        "Minima quas corrupti delectus. Pariatur itaque at. Voluptate expedita unde excepturi dolores quasi quis. Delectus occaecati quaerat iusto nihil reiciendis voluptatem excepturi illum.\n" +
        "Voluptatem qui ullam quas commodi ullam. Incidunt atque excepturi eveniet id consectetur maxime quia suscipit minima. Dicta excepturi molestiae dolore neque. Repellat minus sit inventore amet delectus omnis. Corrupti dolorem quam occaecati quisquam.\n" +
        "Voluptatibus dolore quos dolorem nemo iste ipsa totam quisquam odio. Eveniet enim animi adipisci iusto sit eveniet. Provident soluta maxime voluptatum accusamus consectetur nostrum sequi atque. Sunt doloribus quibusdam quia maxime vero ad accusantium. Esse animi velit velit aliquid itaque voluptatem.",
      model: "Taurus",
      brand: "Ferrari",
      id: 3,
    },
  ],
  filterCategories: {
    brands: ["Lamborghini", "Smart", "Ferrari"],
    models: ["CTS", "Roadster", "Taurus", "Jetta"],
  },
  totalPrice: 12,
  decreaseQuantity: jest.fn(),
  addProductToCart: jest.fn(),
  deleteAllCart: jest.fn(),
  setProduct: jest.fn(),
  setFilterCategories: jest.fn(),
};
