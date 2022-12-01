export const transDate = (date: Date) => {
    // ${DataDate.getFullYear()}-${DataDate.getMonth}-${DataDate.getDay}
    const Y = date.getFullYear();
    const M = date.getMonth();
    const D = date.getDay();
    const H = date.getHours();
    const S = date.getMinutes();
    let Sres = '';
    Sres = S < 10 ? `0${S}` : S.toString();
    return `${Y}-${M}-${D} — ${H} : ${Sres}`;
};
