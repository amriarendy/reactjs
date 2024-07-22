export const CATEGORY_FORMAT_TABLE = {
    th: [
      { key: "category", label: "category" },
      { key: "slug", label: "slug" },
    ],
    attribute: {
      no: true,
      checkbox: true,
      add: {
        route: '/blog/add'
      },
      edit: {
        route: '/blog/edit'
      },
      delete: {
        route: '/blog/delete'
      },
      search: {
        route: '/blog/search'
      },
      paginate: {
        route: '/blog/pagination'
      }
    },
  };
  