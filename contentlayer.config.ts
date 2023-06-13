import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

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
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            
            [
                rehypePrettyCode,
                {
                    theme: "one-dark-pro",
                    onVisitLine(node: any) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node: any) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node: any) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
  
        ],
    },
});
