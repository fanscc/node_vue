
<template>
  <div class="home">
    <div class="swiper-conten" v-if="swiperdatalist.length>0">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiperdatalist" :key="index" >
            <div class="swiper-contain-div">
                <div class="img-conten">
                    <img :src="item.image_url">
                </div>
                <div class="text-mess">
                    <span>{{item.name}}</span>
                    <span>{{item.content}}</span>
                </div>
            </div>
        </swiper-slide>
      </swiper>
    </div>

    <el-upload
      class="avatar-uploader"
      action="api/upload"
      :headers= headers
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <p>上传图像</p>

    <div>
       <el-button type="primary" @click="goRouter">去商品页面</el-button>
    </div>
  </div>
</template>

<script>
import { homesAPi } from '@/assets/api'

export default {
  name: 'home',
  data () {
    return {
      swiperdatalist: [],
      swiperOption: {
        loop: true,
        autoplay: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      headers: {
        token: localStorage.getItem('token'),
        user: localStorage.getItem('user')
      },
      imageUrl: ''
    }
  },
  created () {
    if (localStorage.getItem('headImg')) {
      this.imageUrl = localStorage.getItem('headImg')
    }
    homesAPi().then(res => {
      let {data} = res
      this.swiperdatalist = data.result
    })
  },
  methods: {
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = res.data.headerImg
    },
    goRouter () {
      this.$router.push({name: 'good'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    background: #ddd;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
