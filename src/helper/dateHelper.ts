import moment from "moment";
export const ConvertFromUnix = (unixNumber: number): Date => {
  let d = new Date(unixNumber);
  return d;
};
export const FormatDate = (date: Date, outputFormatted: string): string => {
  return moment(date).format(outputFormatted);
};

export const FormattedFromUnix = (
  unixNumber: number,
  outputFormat: string
): string => {
  let d = new Date(unixNumber);
  return FormatDate(d, outputFormat);
};
