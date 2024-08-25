<template>
    <div class="threeRight">
        <div class="scrool">
            <dv-decoration-7 class="dv-d-7">组件覆盖情况</dv-decoration-7>
            <dv-scroll-board class="dv-scr-board" :config="config" v-if="config.data.length"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const getData = async()=>{
    let result = await axios.get('/components/scroll')
    config.data = result.data.data  
    
}


onMounted(()=>{
    getData()
})

const config = reactive({
    header: ['组件', '分支', '覆盖率'],
    data: [],
    rowNum: 7, //表格行数
    headerHeight: 35,
    headerBGC: '#0f1325', //表头
    oddRowBGC: '#0f1325', //奇数行
    evenRowBGC: '#171c33', //偶数行
    index: true,
    columnWidth: [50],
    align: ['center']
})
</script>

<style lang="scss" scoped>
.threeRight {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .scrool {
        width: 92%;
        height: 92%;
        background-color: #0f1325;
        border-radius: 20px;
        display: flex;
        flex-direction: column;

        .dv-d-7{
            height: 30px;
            color: #fff;
        }
        .dv-scr-board{
            height: calc(100% - 30px);
        }


        :deep(.colorGrass) {
            color: #33cea0;

            &:hover {
                color: #33cea0 !important;
            }
        }

        :deep(.colorRed) {
            color: #ff5722;

            &:hover {
                color: #ff5722 !important;
            }
        }
    }
}
</style>