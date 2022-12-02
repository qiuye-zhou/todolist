<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useLocalStorage, useMedia } from 'use-aid';
import { sample } from 'lodash'

import { transData } from '../../utils/transData';
import { transDate } from '../../utils/transDate';
import { Notice } from '../../utils/Notice';
import { MessageType } from '../../constant';

const local = useLocalStorage();

const ispc = useMedia(820, 'min')

const emit = defineEmits(['addTaskUpdata'])

const form = reactive({
    title: '',
    description: '',
    every: false
})

const addtaskarr = [
    '记得要完成它哦!',
    '不要忘记了!',
    '要劳逸结合哦'
]

const dialogVisible = ref(false);
const handleClose = () => {
    form.title = ''
    form.description = ''
    dialogVisible.value = false
}

const addTask = () => {
    const data = transData(form)
    
    if(data.title === '') {
        Notice('任务标题你忘写了!', MessageType['error'])
        return
    }

    if(data.description === '') {
        Notice('任务简介没写!', MessageType['error'])
        return
    }

    let NowDate = new Date().getTime()
    const DataDate = new Date(NowDate)
    data.date = transDate(DataDate)
    local.set(NowDate.toString(), data)
    Notice(sample(addtaskarr) as string, MessageType['success'])
    emit('addTaskUpdata')
    dialogVisible.value = false
}
</script>
<template>
    <div class="p-3 flex justify-around bg-slate-50 rounded-lg mb-5">
        <el-button @click="(dialogVisible = true, form.every = true)">
            添加每日任务
        </el-button>
        <el-button @click="(dialogVisible = true, form.every = false)">
            添加任务
        </el-button>
        <el-dialog
            v-model="dialogVisible"
            :title="form.every ? '添加每日任务' : '添加任务'"
            :width="ispc ? '50%' : '95%'"
            :before-close="handleClose"
        >
            <el-form :model="form" label-width="120px">
                <el-form-item label="Title">
                    <el-input v-model="form.title" />
                </el-form-item>
                <el-form-item label="description">
                    <el-input v-model="form.description" type="textarea" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer flex justify-around items-center">
                    <el-button @click="handleClose">取消</el-button>
                    <el-button
                        type="primary"
                        @click="addTask"
                    >
                        添加
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
