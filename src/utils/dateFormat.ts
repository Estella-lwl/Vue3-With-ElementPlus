import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const DEFAULT_DATE_TIME = "YYYY-MM-DD HH:mm:ss"; //默认格式

/**
 *
 * @param utcTime UTC格式的时间
 * @param format 目标格式
 * @returns 格式化后的时间
 */
export function utcDateFormat(
  utcTime: string,
  format: string = DEFAULT_DATE_TIME
) {
  return dayjs.utc(utcTime).format(format);
}
