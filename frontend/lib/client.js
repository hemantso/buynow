import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'oaxsf68n',
  dataset: 'production',
  apiVersion: '2023-01-16',
  useCdn: true,
  token: 'skjxuc9PgHPmlbiHxSWyrurR2ElLWyjLChENvalJk3Lhy20tE4TvdxeCJgk8lNe1WxzfwsDXZv3vMBKxqy8NOoFnRz9A9ZGtGzHUO4LEO7tHNdigWW89pD3L090S5nfxb7lOeUxM9TQ0r9C7WbhCVOpj0tEG9HkR93Jfil5mARrAjQ5QsPHe'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);