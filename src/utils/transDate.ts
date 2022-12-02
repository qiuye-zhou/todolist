import { useDateFormat } from 'use-aid';
/**
 * 转换时间数据
 * @param date
 * @returns
 */
export const transDate = (date: Date) => {
    return useDateFormat(date, 'YYYY-MM-DD—HH:mm').value;
};
