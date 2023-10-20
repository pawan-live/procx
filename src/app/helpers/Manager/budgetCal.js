export const budgetCalOrders = (order) => {
  let totals = 0;
  let total = 0;
  for (let i = 0; i < order.items.length; i++) {
    total += order.items[i].price * order.items[i].qty;
  }
  total = totals;
  totals = order.items.reduce((acc, item) => acc + item.price * item.qty, 0);
  return totals;
};

export const budgetCalOrder = (order) => {
  let totals = 0;
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i].price * order[i].qty;
  }
  total = totals;
  totals = order.reduce((acc, order) => acc + order.price * order.qty, 0);
  return totals;
};
