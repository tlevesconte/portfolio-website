import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const title = process.env.NEXT_PUBLIC_SANITY_TITLE!;

export default defineConfig({
  basePath: '/edit',

  title,
  projectId,
  dataset,

  plugins: [deskTool()],

  //   schema: {
  //     types: schemaTypes,
  //   },
});
