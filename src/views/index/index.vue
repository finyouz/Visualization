<template>
    <div class="bg">
        <dv-loading v-if="false">Loading...</dv-loading>

        <div class="content">
            <!--第一行-->
            <div class="one">
                <div class="one-left">
                    <dv-decoration-10 />
                </div>
                <div class="one-center">
                    <div class="one-center-left">
                        <dv-decoration-8 />
                    </div>

                    <div class="one-center-center">
                        <div class="center-title">{{ title }}</div>
                        <div class="center-bottom">
                            <dv-decoration-6 class="dv-6" />
                        </div>
                    </div>

                    <div class="one-center-right">
                        <dv-decoration-8 />
                    </div>
                </div>
                <div class="one-right">
                    <dv-decoration-10 />
                </div>
            </div>

            <!--第二行-->
            <div class="two">
                <div class="two-left">
                   <span>
                    {{ subtitle[0] }}
                   </span>
                </div>

                <div class="two-center">
                    {{ timeInfo.dateYear }} {{ timeInfo.dateWeek }}
                    {{ timeInfo.dateDay }}
                </div>

                <div class="two-right">
                    <span>
                        {{ subtitle[1] }}
                    </span>
                </div>
            </div>

            <!--第三行-->
            <div class="three">
                <div class="three-left">
                   <ThreeLeft/>
                </div>
                <div class="three-center">
                    <<dv-border-box-10><ThreeCenter/></dv-border-box-10>
                </div>
                <div class="three-right">
                    <dv-border-box-12><ThreeRight/></dv-border-box-12>
                </div>
            </div>

            <!--第四行-->
            <div class="four">
                <div class="four-left">
                    <dv-border-box-12><FourLeft/></dv-border-box-12>
                </div>

                <div class="four-right">
                    <dv-border-box-12><FourRight/></dv-border-box-12>
                </div>
            </div>



        </div>
    </div>
</template>
<script lang="ts" setup>
import { title,WEEK,subtitle } from '../../config/index.ts'
import {formatTime} from '../../utils/formTime.ts'

import { onMounted, reactive } from 'vue';
import ThreeLeft from './components/ThreeLeft/index.vue'
import ThreeRight from './components/ThreeRight/index.vue'

import ThreeCenter from './components/ThreeCenter/index.vue'
import FourLeft from './components/FourLeft/index.vue'

import FourRight from './components/FourRight/index.vue'
const timeInfo = reactive({
      setInterval: 0,
      dateDay: '',
      dateYear: '',
      dateWeek: ''
})

// todo 处理时间监听
const handleTime = () => {
      timeInfo.setInterval = setInterval(() => {
        const date = new Date()
        timeInfo.dateDay = formatTime(date, 'HH: mm: ss')
        timeInfo.dateYear = formatTime(date, 'yyyy-MM-dd')
        timeInfo.dateWeek = WEEK[date.getDay()]
      }, 1000)
}

onMounted(()=>{
    handleTime()
})
</script>
<style lang="scss" scoped>
.bg {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(../../assets/pageBg.png) no-repeat;

    .content {
        width: 1200px;
        height: 100%;

        .one {
            display: flex;
            height: 50px;

            &-left {
                flex: 1;
                height: 10px;
            }

            &-center {
                margin-top: 5px;
                flex: 3;
                display: flex;
                height: 50px;

                &-left {
                    flex: 1;
                }

                &-center {
                    flex: 1;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;

                    .center-title {
                        font-size: 20px;
                        color: white;
                    }

                    .dv-6 {
                        height: 20px;
                        flex: 1
                    }
                }

                &-right {
                    flex: 1;
                    transform: rotateY(180deg);
                }
            }

            &-right {
                height: 10px;
                flex: 1;
                transform: rotateY(180deg);
            }
        }

        .two {
            margin-top: 10px;
            height: 40px;
            display: flex;
            color: #fff;
            &-left{
                height: 40px;
                width: 240px;
                background-color: #0f1325;
                transform: skewX(40deg);
                display: flex;
                align-items: center;
                justify-content: center;
                span{
                    transform: skewX(-40deg);
                }
            }

            &-center{
            
                flex: 1;
                background-color: #0f1325;
                clip-path: polygon(0 0, 100% 0, calc(100% - 40px) 100%, 40px 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                
            }
            &-right{
                height: 40px;
                width: 240px;
                background-color: #0f1325;
                transform: skewX(-40deg);
                display: flex;
                align-items: center;
                justify-content: center;
                span{
                    transform: skewX(40deg);
                }
            }
        }

        .three{
            margin: 5px;
            height: 300px;
            display: flex;
            &-left{
                flex:2
            }
            &-center{
                flex:1;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &-right{
                flex:1
            }
        }

        .four{
            display: flex;
            height: calc(100vh - 300px - 110px);
            width: 100%;
            &-left{
                flex: 1;
            }
            &-right{
                flex: 1;
            }
        }
    }
}
</style>