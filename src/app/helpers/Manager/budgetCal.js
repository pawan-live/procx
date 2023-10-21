export const budgetCalOrders = (order) => {
  let total = 0;
  for (let i = 0; i < order.items.length; i++) {
    total += order.items[i].price * order.items[i].qty;
  }
  total = order.items.reduce((acc, item) => acc + item.price * item.qty, 0);
  return total;
};

export const budgetCalOrder = (order) => {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i].price * order[i].qty;
  }

  total = order.reduce((acc, order) => acc + order.price * order.qty, 0);
  return total;
};
