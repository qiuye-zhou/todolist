/**
 * 转换是否过去一天所需的时间数据
 * @param date
 * @returns
 */
export const lasttime = (date: Date) => {
    const Y = date.getFullYear();
    const M = date.getMonth() + 1;
    const D = date.getDate();
    return `${Y}-${M}-${D}`;
};
