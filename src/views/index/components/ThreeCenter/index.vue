<template>
    <div class="three-center">
        <div class="center">
            <chart/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import chart from './chart/index';
</script>
<style lang="scss" scoped>
.three-center{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .center{
        width: 96%;
        height: 93%;
        background-color:#0f1325;
    }
}

</style>

