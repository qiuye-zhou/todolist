<script lang="ts" setup>
import { MessageType } from '../../constant'
import { Notice } from '../../utils/Notice'
import { sample } from 'lodash-es'

defineProps<{
    title: string;
    description: string;
    date: string;
}>()

const completearr = [
    '继续加油!',
    '看看还要什么要做的嘛',
    '累了就休息一下吧'
]

const emit = defineEmits(['complete'])

const confirm = () => {
    emit('complete')
    Notice(sample(completearr) as string, MessageType['success'])
}
</script>
<template>
    <div class="bg-gray-100 m-5 mt-0 p-1 rounded-md 
                hover:shadow-md  hover:-translate-y-0.5 transition-all"
    >
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
            <el-popconfirm title="确认完成了嘛?" @confirm="confirm">
                <template #reference>
                    <el-button size="small">完成</el-button>
                </template>
            </el-popconfirm>
        </div>
    </div>
</template>
