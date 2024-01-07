## Getting Started

First, run the development server:

```bash
npm run dev # or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Introduction

This project serves as a demonstration of building a robust and responsive e-commerce application using Next.js. The focus is on providing a smooth user experience with server actions for improved performance and a well-designed single-page interface.

## Features

- **Server Actions:** Utilizes Next.js server actions to enhance server-side rendering and improve overall page loading times.
- **Tailwind CSS:** Implements Tailwind CSS for efficient styling and a clean, modern design.
- **Global Context Provider:** Uses a global context provider to manage state across components, ensuring seamless communication and data flow.
- **Filtering Options:** Includes an extensive set of filtering options for a personalized shopping experience but API doesnt provide multiple selected brand or models that is why changed as radio button.
- **Single Page Design:** Designed as a single-page application for a fluid and uninterrupted user journey.

## Pagination

This project incorporates a pagination feature to enhance the user experience when browsing through a large set of products. The pagination system is designed to efficiently manage and display a limited number of products per page, improving performance and reducing load times.

- **Page Size:** By default, each page displays a predefined number of products (12 products per page).

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Context API](https://reactjs.org/docs/context.html)

## ENV Varaibles

    NEXT_PUBLIC_MOCK_API_URL=https://5fc9346b2af77700165ae514.mockapi.io/products
    NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Api Structure

    api/ - Contains mock API configurations and Express backend simulation.
    api/products - Returning 12 of all products.
    api/products/:id - returning single products item
    api/categories - returning  filterable area brands and models of all products
    pages/ - Houses Next.js pages, with app/page.tsx as the main page for editing.
    public/ - Stores static assets.

## Styling Approach

    This project adopts a hybrid styling approach, combining both inline CSS for smaller UI components and external CSS for larger components and overall layout.

### Inline CSS for UI Components

    Small and reusable UI components, such as buttons, form elements, and individual items, utilize inline CSS. This approach offers encapsulation and simplifies styling within the component file itself.

## Routes

    This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to optimize and load Urbanist

    / - Products Listing
    /product/:id - single produduct page
    /chekcout - Payment page

## FOLDER STRUCTURE

# Lib Folder

    utils - including smaller function which is commonly used
    hook - contains custom hook
    actions - includes server side request

# Container Folder

    includes route page components

# Componets

    includes partial component and ui componets

## SEO

    The HTTP requests used within the project are meticulously crafted to better index the content of the web page and optimize the user experience. Each request adheres to SEO best practices and includes concise descriptions.

# Favicon

        Favicon added random
