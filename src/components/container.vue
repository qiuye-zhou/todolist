<script lang="ts" setup>
import list from './components/list.vue';
import ConsoleDom from './components/ConsoleDom.vue';
import { useLocalStorage } from 'use-aid';
import { reactive, onMounted } from 'vue';

const local = useLocalStorage();

const listdata = reactive({
    list: [] as any[]
})

/**
 * 更新数据
 */
const updataList = () => {
    listdata.list = local.getAll()
}

/**
 * 完成任务
 * @param key 
 */
const complete = (key: string) => {
    local.remove(key)
    updataList()
}

const addTaskUpdata = () => {
    updataList()
    console.log(listdata.list);
    
}

onMounted(() => {
    updataList()
})
</script>
<template>
    <div class="flex flex-col justify-center p-5">
        <ConsoleDom @addTaskUpdata="addTaskUpdata" />
        <div class="listcon">
            <list
                v-for="item in listdata.list"
                :key="item.key"
                :title="item.val.title"
                :description="item.val.description"
                :date="item.val.date"
                @complete="complete(item.key)"
            />
            <h3 class="text-center" v-show="(listdata.list.length === 0)">暂时没有任务了哦</h3>
        </div>
    </div>
</template>
