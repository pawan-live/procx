export const catalogueStatus = (order) => {
  let status = "Not Restricted";
  for (let i = 0; i < order?.length; i++) {
    if (order[i].restricted == true) {
      status = "Restricted";
    }
  }
  return status;
};
