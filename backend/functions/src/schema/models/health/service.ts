import { AccessControlMap } from "../../../types";
import { PaginatedService } from "../../core/services";

export class HealthService extends PaginatedService {
  defaultTypename = "health";

  filterFieldsMap = {
    id: {},
    "createdBy.id": {},
  };

  sortFieldsMap = {
    id: {},
    createdAt: {},
    updatedAt: {},
  };

  searchFieldsMap = {
    name: {},
  };

  accessControl: AccessControlMap = {};
}
