import { format, isValid, parseISO } from "date-fns";

export const formatDate = (date) => {
  return date && isValid(parseISO(date))
    ? format(parseISO(date), "dd/MM/yyyy")
    : null;
};
