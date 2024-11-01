import {parseISO, format, parse, FormatOptions, DateArg} from 'date-fns';

export const ISO_DATE_FORMAT = 'yyyy-MM-dd';
export const DISPLAY_DATE_FORMAT = 'dd.MM.yyyy';
export const DISPLAY_TIME_FORMAT = 'HH:mm';
export const DISPLAY_DATETIME_FORMAT = `${DISPLAY_DATE_FORMAT} ${DISPLAY_TIME_FORMAT}`;

export function formatIsoString(dateString: string, dateFormat: string = ISO_DATE_FORMAT, options?: FormatOptions) {
  try {
    const date = parseISO(dateString);
    return format(date, dateFormat, options);
  } catch (e) {
    return null;
  }
}

export function formatIsoStringAsDate(dateString?: string | null, options?: FormatOptions) {
  if (!dateString) return null;
  return formatIsoString(dateString, DISPLAY_DATE_FORMAT, options);
}

export function formatIsoStringAsDateTime(dateString?: string | null, options?: FormatOptions) {
  if (!dateString) return null;
  return formatIsoString(dateString, DISPLAY_DATETIME_FORMAT, options);
}

export function formatAsDate(date?: DateArg<Date> | null) {
  if (!date) return null;
  return format(date, DISPLAY_DATE_FORMAT);
}

export function formatAsIsoDate(date: DateArg<Date>) {
  return format(date, ISO_DATE_FORMAT);
}

export function parseDate(dateString?: string, dateFormat: string = DISPLAY_DATE_FORMAT) {
  if (!dateString) return null;
  try {
    const date = parse(dateString, dateFormat, new Date());
    return date;
  } catch (e) {
    return null;
  }
}
