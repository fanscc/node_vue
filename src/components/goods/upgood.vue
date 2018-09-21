
<template>
  <div class="upgood">
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="category_id">
        <el-input  v-model="goodsData.category_id" placeholder="只能输入正整数"></el-input>
      </el-form-item>
      <el-form-item label="商品名字" >
        <el-input  v-model="goodsData.name"></el-input>
      </el-form-item>
      <el-form-item label="商品用途" >
        <el-input  v-model="goodsData.goods_brief" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" >
        <el-input v-model="goodsData.list_pic_url"></el-input>
      </el-form-item>
       <el-form-item label="商品价格" >
        <el-input v-model.number="goodsData.retail_price" placeholder="只能输入正整数"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { detailGood, updatedGood, addGood } from '@/assets/api'
export default {
  name: 'upgood',
  data () {
    return {
      goodsData: {
        goodId: '',
        category_id: '',
        name: '',
        goods_brief: '',
        list_pic_url: '',
        retail_price: ''
      }
    }
  },
  created () {
    this.goodsData.goodId = this.$route.query.id
    if (this.goodsData.goodId) {
      this.init()
    }
  },
  methods: {
    init () {
      let params = {
        id: this.goodsData.goodId
      }
      detailGood(params).then(res => {
        let {data} = res
        this.goodsData.category_id = data.result[0].category_id
        this.goodsData.name = data.result[0].name
        this.goodsData.goods_brief = data.result[0].goods_brief
        this.goodsData.list_pic_url = data.result[0].list_pic_url
        this.goodsData.retail_price = data.result[0].retail_price
      })
    },
    submitForm () {
      if (this.goodsData.goodId) {
        updatedGood(this.goodsData).then(res => {
          this.$router.push({name: 'good'})
        })
      } else {
        addGood(this.goodsData).then(res => {
          this.$router.push({name: 'good'})
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
