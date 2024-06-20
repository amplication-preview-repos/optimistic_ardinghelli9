import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  propertyName?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
