import { defineComponent,onMounted,ref,watch, onBeforeUnmount} from "vue";
import * as echarts from 'echarts'
import theme from '../../common/style/theme' // 引入默认主题
//定义类型

const PropsType = {
    //图表唯一id
    id:String,

    //图表类名
    className:{
        type:String,
        default:'chart'
    },

    //图标宽度

    width:{
        type:String,
        require:true
    },
    //高度

    height:{
        type:String,
        require:true
    },

    //图标数据项
    options:{
        type:Object,
        default:()=>({})
    }
} as const


export default defineComponent({
    name:'Echarts',
    props:PropsType,
    setup(props,{expose}){    
       const chartRef = ref<HTMLElement>()
       const charts = {
        chart:null
       }

       /**
        * 初始化echart
        *  @param  data 数据项
        *  @param  clearCaching 是否清除缓存 
        */ 

       const initChart = (data?:any,clearCaching = false)=>{
        if(data || props.options){
            charts.chart.setOption(data || props.options,clearCaching)
        }
       }


        //生命周期
        onMounted(()=>{
            echarts.registerTheme('myTheme',theme)

            charts.chart = echarts.init(chartRef.value,'myTheme')
            initChart()
        })

        onBeforeUnmount(()=>{
            charts.chart.dispose()
            charts.chart = null
        })


        //监听改变
        watch(()=>props.options,val=>{
            val && initChart(val)
        },{
            deep:true
        })

        //对外暴露

        expose({
            chartRef,
            initChart
        })

        return () => {
            const { id, className, height, width } = props
            return <div ref={chartRef } id={id as string} class={className as string} style={{'height': height as string, 'width': width as string}}></div>
        }

       
    }
})