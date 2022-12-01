export const transDate = (date: Date) => {
    // ${DataDate.getFullYear()}-${DataDate.getMonth}-${DataDate.getDay}
    const Y = date.getFullYear();
    const M = date.getMonth();
    const D = date.getDay();
    const H = date.getHours();
    const S = date.getMinutes();
    return `${Y}-${M}-${D} — ${H} : ${S}`;
};
