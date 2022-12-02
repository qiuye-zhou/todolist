/**
 * 转换时间数据
 * @param date
 * @returns
 */
export const transDate = (date: Date) => {
    const Y = date.getFullYear();
    const M = date.getMonth() + 1;
    const D = date.getDate();
    const H = date.getHours();
    const S = date.getMinutes();
    let Sres = '';
    Sres = S < 10 ? `0${S}` : S.toString();
    return `${Y}-${M}-${D} — ${H} : ${Sres}`;
};
