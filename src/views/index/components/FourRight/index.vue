<template>
<div class="four-right">
    <div class="right-center">
        <chart/>
    </div>
</div>

</template>

<script lang="ts" setup>
import chart from './chart/index';
</script>

<style lang="scss" scoped>
.four-right{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .right-center{
        width: 96%;
        height: 93%;
        background-color:#0f1325;
    }
}
</style>