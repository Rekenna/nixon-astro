import contentful, { type EntryFieldTypes } from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export enum CONTENT_TYPES {
  CONTENT_PAGE = "pageContent",
  BLOG_POST = "pageBlogPost",
  NAVIGATION_MENU = "settingsNavigationMenu",
  PORTFOLIO_COLLECTION = "contentPortfolioCollection",
  PORTFOLIO_ITEM = "contentPortfolioPhoto",
}

export interface PageContent {
  contentTypeId: CONTENT_TYPES.CONTENT_PAGE;
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
}

export interface PageBlogPost {
  contentTypeId: CONTENT_TYPES.BLOG_POST;
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
  };
}

export interface NavigationMenu {
  contentTypeId: CONTENT_TYPES.NAVIGATION_MENU;
  fields: {
    internalName: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<any>>;
  };
}

export interface PortfolioCollection {
  contentTypeId: CONTENT_TYPES.PORTFOLIO_COLLECTION;
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    photos: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<PortfolioItem>>;
  };
}

export interface PortfolioItem {
  contentTypeId: CONTENT_TYPES.PORTFOLIO_ITEM;
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    content: EntryFieldTypes.Text;
    products: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<any>>;
  };
}
