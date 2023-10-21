export const budgetStatus = (order) => {
  let status = "Not Restricted";
  for (let i = 0; i < order.length; i++) {
    if (order[i].price * order[i].qty > 200000) {
      status = "Restricted";
    }
  }
  return status;
};

export const budgetStatusOrders = (order) => {
  let status = "Not Restricted";
  for (let i = 0; i < order.items.length; i++) {
    if (order.items[i].price * order.items[i].qty > 200000) {
      status = "Restricted";
    }
  }
  return status;
};
