import { defineComponent, ref, watch } from 'vue'

// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true
  }
} as const

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义 ref
    const chartRef = ref()
    // 配置项
    let options = {}

    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          title:{
            text: 'Referer of a Website',
            left:'center'
          },
          legend: {
            top: 'bottom'
          },
          toolbox: {
            show: true,
          },
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [20, 90],
              center: ['50%', '45%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: val.seriesData
              
            }
          ]
        }
        // 手动触发更新
        if (chartRef.value) {
          // 通过初始化参数打入数据
          chartRef.value.initChart(options)
        }
      },
      {
        immediate: true,
        deep: true
      }
    )

    return () => {
      const height = "280px"
      const width = "260px"

      return <div>
        <echart ref={chartRef} options={options} height={height} width={width} />
      </div>
    }
  }
})

