import { ORDER_STATUS } from "../../utils/constants";

export const managerPendingFilter = (order) => {
  for (let i = 0; i < order.items.length; i++) {
    // console.log(order.managerstatus);
    if (
      // order.items[i].restricted === true &&
      // order.managerstatus === "pending" &&
      // order.items[i].price * order.items[i].qty > 200000 &&
      order.managerstatus === ORDER_STATUS.PENDING &&
      order.orderStatus === ORDER_STATUS.PARTIALLY_APPROVED
    ) {
      return true;
    }
  }
  return false;
};
