export const USER_FORMAT_TABLE = {
    th: [
      { key: "name", label: "name" },
      { key: "avatar", label: "Description" },
      { key: "email", label: "email" },
      { key: "biography", label: "Views" },
      { key: "position", label: "Date Publish" },
      { key: "country", label: "status" },
    ],
    attribute: {
      no: true,
      checkbox: true,
      add: {
        route: "/users/add",
      },
      edit: {
        route: "/users/edit",
      },
      delete: {
        route: "/users/delete",
      },
      search: {
        route: "/users/search",
      },
      paginate: {
        route: "/users/pagination",
      },
    },
  };
  