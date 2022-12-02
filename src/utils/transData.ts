/* eslint-disable no-param-reassign */
/**
 * 转换任务数据
 * @param form
 * @returns
 */
export const transData = (form: any) => {
    const object = {
        title: '',
        description: '',
        date: '',
        every: false,
        datares: false
    };
    object.title = form.title;
    object.description = form.description;
    object.every = form.every;

    form.title = '';
    form.description = '';
    form.every = false;

    return object;
};
