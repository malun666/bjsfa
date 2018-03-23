<template>
  <div class="p-wrap">
    <tophd title="公告信息"></tophd>
    <div class="msg-item">
      <p class="title">{{ MsgTitle}}</p>
      <p class="body">{{ MsgBody}}</p>
      <p class="date">{{ DateStr }}</p>
    </div>
  </div>
</template>

<script>
import TopHd from '../components/TopHd';
import { loadMsgByIdService } from '../service/loadData';

export default {
  name: 'compmsgdetial',
  data() {
    return {
      MsgTitle: '',
      DateStr: '2018/4/18',
      MsgBody: ''
    };
  },
  components: {
    tophd: TopHd
  },
  methods: {
    loadMsgById(id) {
      loadMsgByIdService(id).then(res => {
        this.MsgTitle = res.MsgTitle;
        this.DateStr = res.Date;
        this.MsgBody = res.MsgBody;
      });
    }
  },
  created: function() {
    console.dir(this.$route.params.id);
    this.loadMsgById(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';
p {
  line-height: 2;
}
p.title {
  font-size: px2rem(24);
}
p.body,
p.date {
  font-size: px2rem(18);
}
</style>
