import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    icon: {
      type: "string",
      description: "URL to blog icon",
      required: true,
    },
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    categories: {
      type: "json",
      description: "The categories of the post",
      required: true,
    },
  },

  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `${doc.title.toLowerCase().split(" ").join("-")}`,
    },
    // categories: {
    //   type: "json",
    //   resolve: (doc) => {
    //     return doc.categories.split(",");
    //   },
    // },
  },
}));

export default makeSource({
  contentDirPath: "src",
  documentTypes: [Post],
});
