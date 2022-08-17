![T03G98B5BM4-U03G19N4BL7-eba3205c433d-512](https://user-images.githubusercontent.com/106018689/185019318-6a109439-97d6-4c1a-bcfc-6024639168c4.png)


Slaash-Co NextJS Template with TypeScript and ChakraUI

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Slaash Template Rule

### Import Between Layers

Typically, an inner layer cannot import from an outer layer: that means that core cannot import from lib and components, and the latter cannot import from pages. his rule can ensure your core is decoupled from the domain to avoid cyclical dependencies and keep your architecture untangled.

rsc: https://giancarlobuomprisco.com/next/a-scalable-nextjs-project-structure
