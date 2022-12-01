/* eslint-disable no-param-reassign */
export const transData = (form: any) => {
    const object = {
        title: '',
        description: '',
        date: '',
        every: false
    };
    object.title = form.title;
    object.description = form.description;
    object.every = form.every;

    form.title = '';
    form.description = '';
    form.every = false;

    return object;
};
