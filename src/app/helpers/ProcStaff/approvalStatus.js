import { ORDER_RESTRICTION } from "@/app/utils/constants";

import { catalogueStatus } from "../Manager/catalogueStatus";

//get approval status if both false
export const getApprovalStatus = () => {
  console.log("Approval status response");
  if (
    getBudgetStatus() === true ||
    catalogueStatus() === ORDER_RESTRICTION.RESTRICTED
  ) {
    console.log("Approval status response: restricted");
    return true;
  } else {
    console.log("Approval status response: not restricted");
    return false;
  }
};
