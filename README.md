# Nixon Photography Starter

## Notes

This project utilizes [Contentful](https://app.contentful.com/) for content management. You'll need to make a copy of `.env.example` for your own `.env` and fill in the Contentful values for this site to work.

You'll see on the `PortfolioItem` content type that there is a `products` definition. This is linked to [Shopify](), which stores all of the available products/prints available to purchase, and the commerce processes. I followed this [guide](https://www.theprintspace.co.uk/help/knowledge-base/start-selling-your-art-online-in-7-easy-steps/) to setup a sync from [CreativeHub](https://app.creativehub.io) to upload photos that I want to sell as prints for drop shipping, and then sync them to Shopify to handle the processing.

This integration is not fully setup, but where it is at demonstrates that you can pull Shopify data into the porfolio website, all the way through. Which means that with a later integration setup, you could have the ability to refer customers to purchase prints directly from the website. Even handing them off to the Stripe purchase/checkout flow would work very well. Since we have all of the variant data in Shopify, Contentful only needs to know which product each `PortfolioItem` refers to and we have all the connections we need to build out a robust flow for picking out frames, and sizes for prints to purchase.

### Resources

Since this is an Astro website, with TailwindCSS installed, I highly recommend leaning into [Tailwind Components](https://tailwindui.com/components) for the build out of more pages. The live website is hosted on [Netlify](https://www.netlify.com/), and is rebuilt anytime changes in Shopify, or Contentful occur.

I was able to accomplish all of this with just the free plan of all of these platforms. That being said, Shopify does cost a monthly amount after a trial period so I recommend building out the rest of the site to handle traffic and only enable/complete that integration when selling products at scale becomes a priority.


## Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
