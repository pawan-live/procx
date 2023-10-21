// import { catalogueStatus } from "@/app/helpers/Manager/catalogueStatus";
// import { getApprovalStatus } from "@/app/helpers/ProcStaff/approvalStatus";
// import { ORDER_RESTRICTION } from "@/app/utils/constants";

// // Mock the dependencies
// jest.mock("../src/app/utils/constants", () => ({
//   ORDER_RESTRICTION: {
//     RESTRICTED: "RESTRICTED",
//   },
// }));

// jest.mock("@/app/helpers/Manager/catalogueStatus");

// // Describe the test suite
// describe("getApprovalStatus", () => {
//   it("returns true when budget status is true", () => {
//     // Mock getBudgetStatus to return true
//     jest.spyOn(global, "getBudgetStatus").mockReturnValue(true);

//     // Call the function and expect the result
//     const result = getApprovalStatus();
//     expect(result).toBe(true);
//   });

//   it("returns true when catalogue status is RESTRICTED", () => {
//     // Mock getBudgetStatus to return false
//     jest.spyOn(global, "getBudgetStatus").mockReturnValue(false);

//     // Mock catalogueStatus to return RESTRICTED
//     catalogueStatus.mockReturnValue(ORDER_RESTRICTION.RESTRICTED);

//     // Call the function and expect the result
//     const result = getApprovalStatus();
//     expect(result).toBe(true);
//   });

//   it("returns false when both conditions are false", () => {
//     // Mock getBudgetStatus to return false
//     jest.spyOn(global, "getBudgetStatus").mockReturnValue(false);

//     // Mock catalogueStatus to return a value other than RESTRICTED
//     catalogueStatus.mockReturnValue("OTHER_STATUS");

//     // Call the function and expect the result
//     const result = getApprovalStatus();
//     expect(result).toBe(false);
//   });
// });
