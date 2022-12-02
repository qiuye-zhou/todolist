import { ElMessage } from 'element-plus';

/**
 * 消息提醒
 * @param message
 * @param type
 */
export const Notice = (message: string, type: any) => {
    ElMessage({
        message: message,
        type: type
    });
};
