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
                    "60e1ffb2b8c8798c29aad0b3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-wsnxw8h6",
                  apiId: "fd9ce6ab-2fa0-4755-8147-7777e41a2fe6",
                },
                {
                  buildHookId: "60e1ffb1a3ec236d3bdc5b8b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wob74o2p",
                  apiId: "8f596f0d-83d1-4611-bce0-c73ccd7fc900",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/prabha-ar/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wob74o2p.netlify.app",
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
