//get budget status

export const getBudgetStatus = (budget) => {
  if (budget > 100000) {
    console.log("Budget status response: true");
    return true;
  } else {
    console.log("Budget status response: false");
    return false;
  }
};
