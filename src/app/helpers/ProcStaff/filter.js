//filter pending orders
export function filterOrders(orders, status, mappingFunction) {
  return orders
    .filter((order) => order.orderStatus === status)
    .map(mappingFunction);
}
