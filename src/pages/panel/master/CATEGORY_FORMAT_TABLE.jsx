import { Input } from "../../../components/ui/Input";

export const CATEGORY_FORMAT_TABLE = {
  th: [
    { key: "category", label: "category" },
    { key: "slug", label: "slug" },
  ],
  attribute: {
    no: true,
    checkbox: true,
    add: {
      route: "toggleModal",
    },
    edit: {
      route: "toggleModal",
    },
    delete: {
      route: "toggleModal",
    },
    search: {
      route: "/blog/search",
    },
    paginate: {
      route: "/blog/pagination",
    },
  },
};

export const CATEGORY_FORMAT_MODAL = {
  header: "Modal Header",
  footer: "Modal Footer",
  content: [
    {
      key: "category",
      label: "Category",
      elements: (
        <Input
          id={"category"}
          name={"category"}
          type={"text"}
          label={"Category"}
          required={true}
        />
      ),
    },
    {
      key: "slug",
      label: "slug",
      elements: (
        <Input
          id={"slug"}
          name={"slug"}
          type={"text"}
          label={"Slug"}
          required={true}
        />
      ),
    },
  ],
};
