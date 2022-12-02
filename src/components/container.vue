<script lang="ts" setup>
import { useLocalStorage } from 'use-aid';
import { reactive, onMounted } from 'vue';

import list from './components/list.vue';
import everylist from './components/everylist.vue';
import ConsoleDom from './components/ConsoleDom.vue';

import { lasttime } from '../utils/lasttime';

const local = useLocalStorage();

const listdata = reactive({
    list: [] as any[],
    everdaylist: [] as any[]
})

/**
 * 更新数据
 */
const updataList = () => {
    const locallist = local.getAll()
    const lastTime = lasttime(new Date(JSON.parse(locallist.filter(e => {return (e.key === 'LastTime')})[0].val)))
    const nowTime = new Date().getTime()
    const lastTimeArr = lastTime.split('-')
    const nowTimeArr = lasttime(new Date(nowTime)).split('-')
    
    if(lastTimeArr[0] <= nowTimeArr[0] && lastTimeArr[1] <= nowTimeArr[1] && lastTimeArr[2] < nowTimeArr[2]) {
        const everylist = locallist.filter(e => {return ((!(e.key === 'LastTime')) && (e.val.every))})
        
        for(let i = 0; i < everylist.length; i++) {
            const key = everylist[i].key
            const val = everylist[i].val
            val.datares = false
            local.set(key, val)
            console.log(local.getAll());
        }
    }
    
    listdata.list = locallist.filter(e => {return ((!(e.key === 'LastTime')) && (!e.val.every))})
    listdata.everdaylist = locallist.filter(e => {return ((!(e.key === 'LastTime')) && (e.val.every))})
}

/**
 * 完成任务
 * @param key 
 */
const complete = (key: string) => {
    local.remove(key)
    updataList()
}

/**
 * 完成每日任务
 * @param key 
 */
const evercomplete = (key: string) => {
    const data = local.get(key)
    data.datares = true
    local.set(key, data)
    updataList()
}

/**
 * 删除每日任务
 * @param key 
 */
const removeevery = (key: string) => {
    local.remove(key)
    updataList()
}

/**
 * 增加任务
 */
const addTaskUpdata = () => {
    updataList()
}

onMounted(() => {
    updataList()
})
</script>
<template>
    <div class="flex flex-col justify-center p-5">
        <ConsoleDom @addTaskUpdata="addTaskUpdata" />
        <div class="listcon">
            <everylist 
            v-for="item in listdata.everdaylist"
                :datares="item.val.datares"
                :key="item.key"
                :title="item.val.title"
                :description="item.val.description"
                :date="item.val.date"
                @evercomplete="evercomplete(item.key)"
                @removeevery="removeevery(item.key)"
            />
            <list
                v-for="item in listdata.list"
                :key="item.key"
                :title="item.val.title"
                :description="item.val.description"
                :date="item.val.date"
                @complete="complete(item.key)"
            />
            <h3 class="text-center" v-show="((listdata.list.length === 0) && listdata.everdaylist.length === 0)">暂时没有任务了哦</h3>
        </div>
    </div>
</template>
