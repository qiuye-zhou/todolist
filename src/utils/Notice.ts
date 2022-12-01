import { ElMessage } from 'element-plus';

export const Notice = (message: string, type: any) => {
    ElMessage({
        message: message,
        type: type
    });
};
