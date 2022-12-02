<script lang="ts" setup>
import { MessageType } from '../../constant'
import { Notice } from '../../utils/Notice'
import { sample } from 'lodash'

defineProps<{
    title: string;
    description: string;
    date: string;
    datares: boolean;
}>()

const completearr = [
    '继续加油!',
    '看看还要什么要做的嘛',
    '累了就休息一下吧',
    '明天继续加油哦'
]

const emit = defineEmits(['evercomplete', 'removeevery'])

/**
 * 完成任务
 */
const confirm = () => {
    emit('evercomplete')
    Notice(sample(completearr) as string, MessageType['success'])
}

/**
 * 删除每日任务
 */
const removeevery = () => {
    emit('removeevery')
    Notice(sample(completearr) as string, MessageType['success'])
}
</script>
<template>
    <div class="bg-gray-100 m-5 mt-0 p-1 rounded-md 
                hover:shadow-md  hover:-translate-y-0.5 transition-all"
                v-if="!datares"
    >
        <span class="text-xs text-blue-500">每日任务</span>
        <h3 class="text-center">
            {{ title }}
        </h3>
        <p class="p-5 text-center">
            {{ description }}
        </p>
        <div class="w-full flex justify-between">
            <div class="text-xs flex justify-center items-center">
                <img class="w-4 mr-1" src="../../../public/icons/时间.svg">
                <span>{{ date }}</span>
            </div>
            <div>
                <el-popconfirm title="你确认要删除这个每日任务嘛?" @confirm="removeevery">
                    <template #reference>
                        <el-button size="small">删除每日任务</el-button>
                    </template>
                </el-popconfirm>
                <el-popconfirm title="今天的任务确认完成了嘛?" @confirm="confirm">
                    <template #reference>
                        <el-button size="small">完成</el-button>
                    </template>
                </el-popconfirm>
            </div>
        </div>
    </div>
</template>
