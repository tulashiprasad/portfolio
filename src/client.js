import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  withCredentials: false, // Prevents CORS issues when serving from different origins
  ignoreBrowserTokenWarning: true, // Suppresses the warning - we acknowledge the token is needed for private dataset
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
