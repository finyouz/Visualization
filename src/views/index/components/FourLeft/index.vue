<template>
    <div class="four-left">
        <div class="left-center">
            <chat/>
        </div>
    </div>
</template>
<script setup lang="ts">
import chat from './chart/index'
</script>

<style lang="scss" scoped>
.four-left{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .left-center{
        width: 96%;
        height: 93%;
        background-color:#0f1325;
    }
}

</style>