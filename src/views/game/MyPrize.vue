<template>
    <el-collapse accordion>
        <el-collapse-item v-for="(item,key) in listData" :key="key" :name="key">
            <template slot="title">
                <i class="header-icon el-icon-present prizeRed"></i>
                {{key}}、
                一致性 Consistency
                <el-tag size="mini" class="prizeState" effect="dark">已使用</el-tag>
            </template>
            <div class="prizeContent">
                <div>兑奖码: 12354687963124567897813</div>
                <div>抽奖日期: 2018-01-01 12:00:00</div>
                <div>兑奖日期: 2018-01-01 12:00:00</div>
                <div>奖品介绍：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                <div class="prizeBtn">
                    <el-button size="mini" type="primary">使用</el-button>
                </div>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
  export default {
    data() {
      return {
        listData:[1,2,3,4,5,6,7,8],
      };
    },
    methods: {
    }
  }
</script>
<style scoped>
    .prizeRed{
        color: red;
        margin: 0 10px;
    }
    .prizeContent{
        margin: 0 10px;
    }
    .prizeBtn{
        margin-top: 5px;
        text-align: right;
    }
</style>

