import contentful, { type EntryFieldTypes } from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export enum CONTENT_TYPES {
  PAGE_BLOG_POST = "pageBlogPost",
}

export interface PageBlogPost {
  contentTypeId: CONTENT_TYPES.PAGE_BLOG_POST;
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
  };
}
