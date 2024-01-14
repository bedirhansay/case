// MockHandlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        kind: "ok",
        data: {
          products: [
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
              id: "1",
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
              id: "2",
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
              id: "3",
            },
            {
              createdAt: "2023-07-17T05:04:01.235Z",
              name: "Rolls Royce Taurus",
              image: "https://loremflickr.com/640/480/transport",
              price: "779.00",
              description:
                "Similique iste repellat minima recusandae similique. Voluptates omnis perferendis eius possimus dolor aut dignissimos temporibus. Quo molestias praesentium quasi rerum. Vitae harum pariatur recusandae reprehenderit. Blanditiis deleniti delectus quia. Suscipit blanditiis quod sunt expedita animi quis.\n" +
                "Inventore provident molestiae dicta aut corrupti. Dicta odio dolore minima voluptatibus velit velit ea voluptatibus. Aliquam occaecati magnam consectetur illum natus. Ipsum est ut quia est ab. Eius ad tempore libero ipsa ea atque.\n" +
                "Pariatur aperiam voluptas similique occaecati repellendus. Voluptas necessitatibus ut exercitationem non tenetur enim. Iure aliquam maiores eveniet consequatur nihil.",
              model: "Jetta",
              brand: "Volkswagen",
              id: "4",
            },
            {
              createdAt: "2023-07-17T02:25:46.420Z",
              name: "Land Rover Impala",
              image: "https://loremflickr.com/640/480/nightlife",
              price: "607.00",
              description:
                "Nesciunt dolorum occaecati sit error iure ullam labore tempora eveniet. Porro alias consequuntur. Voluptas nesciunt eligendi nostrum. Magni alias possimus maiores harum qui illo iure doloremque ipsam. Architecto quos recusandae ullam at distinctio.\n" +
                "Accusamus amet sequi provident amet aut nemo id odit atque. Numquam facilis ad deleniti. Voluptates corporis fuga nihil nesciunt inventore enim possimus magni.\n" +
                "Porro dolorum fugiat consectetur veniam ex labore consequuntur dolorum. Optio aut voluptas esse quisquam eveniet. Consequuntur dolorem ipsa. Cupiditate alias corrupti accusamus.",
              model: "Fortwo",
              brand: "Mercedes Benz",
              id: "5",
            },
            {
              createdAt: "2023-07-17T01:39:05.497Z",
              name: "Chevrolet Fortwo",
              image: "https://loremflickr.com/640/480/technics",
              price: "829.00",
              description:
                "Dolor explicabo libero. Maxime consequuntur voluptatum labore. Officiis et sit soluta impedit ad. Officiis neque occaecati blanditiis commodi molestias. Facilis itaque laboriosam consequuntur doloremque.\n" +
                "Omnis ipsum adipisci error quia tenetur. Voluptates quod eos quibusdam. Laudantium esse quis sint aut unde. Atque debitis nobis. Aliquid consequatur iste voluptates omnis. Consectetur ab assumenda omnis unde consequuntur.\n" +
                "Similique tenetur nostrum incidunt accusantium. Quaerat possimus perferendis earum nulla cupiditate excepturi et. Quae fugit necessitatibus voluptates vitae necessitatibus praesentium. Sunt eveniet commodi. Quas quos magni. Illum repudiandae necessitatibus consequatur quo iure cum accusantium.",
              model: "A4",
              brand: "Tesla",
              id: "6",
            },
            {
              createdAt: "2023-07-16T20:15:09.557Z",
              name: "Honda Model S",
              image: "https://loremflickr.com/640/480/technics",
              price: "607.00",
              description:
                "Magnam tempora incidunt at voluptatum itaque iure. Ipsa ullam deleniti incidunt dicta consectetur illo cum. Repellat dolorum autem voluptatum.\n" +
                "Assumenda recusandae nemo atque ipsam labore cumque laboriosam illo laudantium. Iure consequuntur tempora iste. Nihil minima autem vitae veniam fugit.\n" +
                "Velit magnam tempore quae. Facere repellat culpa mollitia. Fugiat amet at porro ratione aut iure veritatis fugiat sint.",
              model: "Taurus",
              brand: "Fiat",
              id: "7",
            },
            {
              createdAt: "2023-07-17T05:48:15.194Z",
              name: "Nissan El Camino",
              image: "https://loremflickr.com/640/480/fashion",
              price: "823.00",
              description:
                "Labore nam adipisci vel officiis in repellat. Enim blanditiis maxime magni temporibus eos dignissimos molestias amet nulla. Fugiat libero architecto voluptatum qui quis tempore quasi hic corporis. Accusamus aut ratione beatae illum fuga corporis quae quibusdam eligendi.\n" +
                "Soluta commodi omnis totam temporibus veritatis. Facilis tempora necessitatibus consequatur quis deleniti. Culpa provident veniam dolor. Ipsum culpa itaque exercitationem velit. Itaque cum aut quae autem ipsam natus. Consectetur nam vitae voluptatibus cupiditate assumenda officiis eaque.\n" +
                "A magni voluptates sequi et adipisci labore sed libero atque. Minus fugiat voluptas dolores iste quasi commodi suscipit. Fuga quo harum aut. Temporibus aliquam sequi eligendi maiores cum molestiae. Dicta neque quidem occaecati ipsum unde non ex.",
              model: "F-150",
              brand: "Land Rover",
              id: "8",
            },
            {
              createdAt: "2023-07-16T22:48:02.246Z",
              name: "Cadillac Expedition",
              image: "https://loremflickr.com/640/480/food",
              price: "17.00",
              description:
                "Quod eligendi illum ab aliquid maxime quasi velit. Asperiores suscipit ab amet iste voluptatibus provident accusamus consequatur. Aperiam eius eligendi.\n" +
                "Odit totam porro tenetur. Quasi aliquam quas. Illo officiis fugit recusandae blanditiis asperiores perferendis illum dolorum eum. Quibusdam pariatur quaerat expedita excepturi.\n" +
                "Aliquid praesentium praesentium. Maxime nesciunt quia ab. Rem repellat tempore repellat.",
              model: "Corvette",
              brand: "Nissan",
              id: "9",
            },
            {
              createdAt: "2023-07-16T08:48:55.384Z",
              name: "Ford Focus",
              image: "https://loremflickr.com/640/480/transport",
              price: "257.00",
              description:
                "Quos esse maiores sed repellendus expedita praesentium optio accusamus asperiores. Tempore dolores in. Qui nihil tenetur quis minima distinctio consequatur enim voluptatibus. Nobis provident temporibus perferendis.\n" +
                "Quas nemo itaque officiis eaque cum ex. Aut eius error atque error iste. Enim commodi architecto soluta nemo molestias quae exercitationem et aliquam.\n" +
                "Et velit fuga aut quaerat ex autem tempora. Nam natus numquam quae odio libero eum ipsam hic. Quidem voluptate aut vel velit modi eveniet. Rem officiis aliquam ducimus odit veniam molestias id magni. Temporibus enim quisquam nobis. Molestiae sit ducimus harum libero voluptates.",
              model: "CTS",
              brand: "Maserati",
              id: "10",
            },
            {
              createdAt: "2023-07-16T13:51:28.920Z",
              name: "Dodge Mercielago",
              image: "https://loremflickr.com/640/480/fashion",
              price: "873.00",
              description:
                "Explicabo laboriosam tempore aspernatur. Quaerat non quidem corporis dolorum saepe. Porro aut aut nobis officiis excepturi modi in.\n" +
                "Adipisci laboriosam quaerat sit maxime incidunt rem illo. At nostrum qui sed iure omnis fugit. Quod voluptatibus repellendus perspiciatis illum iure magnam velit. Blanditiis minima officiis.\n" +
                "Eos ad delectus tempore officiis optio culpa amet ipsam nesciunt. Doloremque et maiores et doloribus eos quam earum. Esse iusto quo voluptatibus. Pariatur harum doloremque saepe.",
              model: "Ranchero",
              brand: "Smart",
              id: "11",
            },
            {
              createdAt: "2023-07-16T10:59:47.744Z",
              name: "Polestar Expedition",
              image: "https://loremflickr.com/640/480/animals",
              price: "339.00",
              description:
                "Tempore tenetur dolor consequatur iste tempora distinctio ad. Alias aliquid id molestias totam ipsam. Maxime cum minus voluptas voluptates ducimus nisi voluptate. Quaerat placeat explicabo a officiis enim nisi impedit sequi id. Aut necessitatibus fugiat eveniet qui illum aliquid quam.\n" +
                "Dignissimos fugiat doloribus placeat recusandae. Placeat eius cum omnis. Expedita quasi id totam quia. Ullam sapiente officiis id aut iure aperiam vel ex expedita. Itaque accusamus excepturi repellendus culpa excepturi quisquam unde dolores.\n" +
                "In fugit officiis omnis vero cum. Quia corrupti id quae ipsam cupiditate consequuntur et. Cumque et tempora error suscipit error magnam hic voluptatum dolorem.",
              model: "Colorado",
              brand: "Bugatti",
              id: "12",
            },
          ],
          totalPages: 7,
          currentPage: 1,
        },
      })
    );
  }),

  rest.get("/api/categories", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        kind: "ok",
        data: {
          brands: [
            "Lamborghini",
            "Smart",
            "Ferrari",
            "Volkswagen",
            "Mercedes Benz",
            "Tesla",
            "Fiat",
            "Land Rover",
            "Nissan",
            "Maserati",
            "Bugatti",
            "Aston Martin",
            "Chevrolet",
            "Honda",
            "Rolls Royce",
            "Audi",
            "Cadillac",
            "Kia",
            "Hyundai",
            "Polestar",
            "Mini",
            "Mazda",
            "Dodge",
            "BMW",
            "Jeep",
            "Ford",
          ],
          models: [
            "CTS",
            "Roadster",
            "Taurus",
            "Jetta",
            "Fortwo",
            "A4",
            "F-150",
            "Corvette",
            "Ranchero",
            "Colorado",
            "911",
            "Altima",
            "Mercielago",
            "Land Cruiser",
            "Model X",
            "Accord",
            "Volt",
            "Mustang",
            "Golf",
            "Malibu",
            "Alpine",
            "Wrangler",
            "Grand Caravan",
            "Silverado",
            "Spyder",
            "Explorer",
            "ATS",
            "2",
            "Grand Cherokee",
            "Model T",
            "1",
            "Model S",
            "LeBaron",
            "V90",
            "Charger",
            "Camry",
            "Expedition",
            "Impala",
            "Fiesta",
            "Cruze",
            "El Camino",
            "PT Cruiser",
            "Element",
            "XTS",
          ],
        },
      })
    );
  }),
];
