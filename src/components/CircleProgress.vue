<template>
  <div class="cirlce-progress-box">
    <h3>{{ pval }}<i v-if="persents">%</i> <i v-if="plus">+</i></h3>
    <p>{{ msg }}</p>
    <div></div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'circleProgress',
  props: ['pval', 'msg', 'plus', 'persents'],
  data () {
    return {
      cChart: null
    };
  },
  methods: {
    draw () {
      this.cChart = echarts.init(document.querySelector('#wrap'));
      var txtLabel = this.pval + (this.plus ? '+' : '') + (this.persents ? '%' : '');
      this.cChart.setOption({
        legend: {
          orient: 'vertical',
          x: 'center',
          y: 'bottom',
          data: [this.msg]
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['75%', '80%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'center',
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: this.pval, name: txtLabel },
              { value: 100 - this.pval, name: '' }
            ]
          }
        ]
      });
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.draw('wrap');
    });
  }
};
</script>

<style scoped>
#wrap {
  height: 200px;
  widows: 200px;
}
</style>
