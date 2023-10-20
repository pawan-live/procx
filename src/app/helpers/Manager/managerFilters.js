import { ORDER_STATUS } from "../../utils/constants";

export const managerPendingFilter = (orders) => {
  return orders.filter(
    (order) =>
      order.orderStatus === ORDER_STATUS.PARTIALLY_APPROVED &&
      order.managerstatus === ORDER_STATUS.PENDING,
  );
};

export const managerRejectedFilter = (orders) => {
  return orders.filter(
    (order) =>
      order.managerstatus === ORDER_STATUS.REJECTED &&
      order.orderStatus === ORDER_STATUS.REJECTED,
  );
};

export const managerApprovedFilter = (orders) => {
  return orders.filter(
    (order) =>
      order.managerstatus === ORDER_STATUS.APPROVED &&
      order.orderStatus === ORDER_STATUS.APPROVED,
  );
};
