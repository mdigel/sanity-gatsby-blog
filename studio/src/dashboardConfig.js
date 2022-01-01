export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61d0a9a66f54ff69392aa78b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-oxvemdyc",
                  apiId: "051dbfbf-bc36-4601-8b92-b2f74179f06e",
                },
                {
                  buildHookId: "61d0a9a6c5975e7d70717e67",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-r5i9yarg",
                  apiId: "fc056dfe-7565-416c-9fbe-9ceac8eeb2aa",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mdigel/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-r5i9yarg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
