<template>
    <div class="three-left">
        <div class="left-center">
            <div class="rank">河南省人数排名情况</div>
            <dv-scroll-ranking-board :config="config" v-if="config.data.length" />
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, reactive } from 'vue';


const config = reactive({
    data:[  ],
   unit: '人'
})


const getData = async()=>{
    let result = await axios.get('/components/ranking')

    config.data = result.data.data
    
}


onMounted(()=>{
    getData()
})
</script>

<style lang="scss" scoped>
.three-left{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .rank{
        color: #fff;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .left-center{
        width: 100%;
        height: 92%;
        background-color: #0f1325;
        display: flex;
        flex-direction: column;
        margin-right:10px;
    }
}

</style>