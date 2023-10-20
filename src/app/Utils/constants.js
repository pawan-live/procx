export const PROCUREMENT_STATUS = {
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  PENDING: "PENDING",
};

// constants for API URLS

// BASE URL
export const BASE_URL = "https://procx-api-o9suw.ondigitalocean.app/api";
export const BASE_LOCAL = "http://localhost:3000";

export const API_URLS = {
  ITEMS: "/items",
  SUPPLIERS: "/suppliers",
  ORDERS: "/orders",
};

export const ORDER_STATUS = {
  PENDING: "pending",
  PARTIALLY_APPROVED: "Partially Approved",
  COMPLETED: "COMPLETED",
  REJECTED: "Rejected",
  APPROVED: "Approved",
};

export const ORDER_RESTRICION = {
  RESTRICTED: "Restricted",
  NOTRESTRICED: "Not Restricted",
};
