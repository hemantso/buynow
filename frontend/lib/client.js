import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'oaxsf68n',
  dataset: 'production',
  apiVersion: '2023-01-16',
  useCdn: true,
  token: process.env.SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);