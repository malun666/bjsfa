<template>
  <div class="cirlce-progress-box">
    <div class="wrap">
      <p class="val">
        {{ tagname }}
        <i class="plus" v-if="plus">+</i>
        <i class="persents" v-if="persents">%</i>
      </p>
      <div class="cav-box" :id="id">
      </div>
    </div>
    <p class="cir-msg">{{ title }}</p>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'circleProgress',
  props: {
    tagname: {
      type: String,
      default: '0'
    },
    pval: {
      type: Number,
      default: 16
    },
    title: {
      type: String,
      default: ''
    },
    plus: {
      type: Boolean,
      default: false
    },
    persents: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: function() {
        let temp = [];
        for (let i = 0; i < 7; i++) {
          let randomChar = String.fromCharCode(
            65 + Math.floor(Math.random() * 19) + i
          );
          temp.push(randomChar);
        }
        return temp.reduce((pre, next) => pre + next);
      }
    }
  },
  data() {
    return {
      cChart: null
    };
  },
  methods: {
    draw(tid) {
      this.cChart = echarts.init(document.querySelector('#' + tid));
      this.cChart.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['95%', '100%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'center',
                textStyle: {
                  fontSize: '48',
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
              { value: this.pval, name: '' },
              { value: 100 - this.pval % 100, name: '' }
            ]
          }
        ],
        color: ['RGB(102, 208, 113)', 'RGB(223, 223, 223)']
      });
    }
  },
  mounted() {
    let tid = this.id;
    this.$nextTick(function() {
      this.draw(tid);
    });
  }
};
</script>

<style lang="scss" scoped type="text/css">
@import '../../style/mixin';

.wrap {
  position: relative;
  .val {
    font-size: px2rem(48);
    color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    white-space: nowrap;
    i {
      position: relative;
      font-size: px2rem(22);
      top: px2rem(-22);
      left: px2rem(-10);
    }
  }
  .cav-box {
    height: px2rem(176);
    width: px2rem(176);
    // height: 40px;
    // width: 40px;
  }
}
.cir-msg {
  padding-top: px2rem(24);
  font-size: px2rem(24);
  line-height: px2rem(24);
  padding-bottom: px2rem(50-6);
}
</style>
