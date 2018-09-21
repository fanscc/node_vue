
<template>
  <div class="good">
    <div class="goodheader" style="margin-bottom: 20px">
       <el-input
        placeholder="商品名字"
        prefix-icon="el-icon-search"
        v-model="searchText" style="width:250px">
      </el-input>
      <el-button type="primary" icon="el-icon-search" @click="search" style="margin-left: 10px;">搜索</el-button>
      <el-button type="primary" @click="add">新增</el-button>
    </div>
    <div class="tables">
       <el-table
          :data="tableData"
          height="600"
          border
          style="width: 100%">
            <el-table-column label="序号" width="50" center>
              <template slot-scope="scope">{{ scope.$index+1+(currentPage-1)*pageSize }}</template>
            </el-table-column>
          <el-table-column
            prop="category_id"
            label="商品id"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="商品名字"
            width="180">
          </el-table-column>
          <el-table-column
            prop="goods_brief"
            label="商品用途">
          </el-table-column>
          <el-table-column
            label="商品图片">
            <template slot-scope="scope"><div class="div_img"><img :src="scope.row.list_pic_url"></div></template>
          </el-table-column>
          <el-table-column
            prop="retail_price"
            label="商品价格">
          </el-table-column>
          <el-table-column label="操作" width="76" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="success"  @click="Updata(scope.$index, scope.row)">更新</el-button>
                    <el-button size="mini" type="danger"   @click="Delete(scope.$index, scope.row)">删除</el-button>
                </template>
          </el-table-column>
        </el-table>
    </div>
     <div class="alertcontentdiv_page">
          <div>
            总共<font style="color:#409EFF">{{tatal}}</font>条记录
          </div>
          <el-pagination background layout="prev, pager, next" :total="tatal" :current-page="currentPage" :page-size="pageSize" @current-change="currentChangeType">
          </el-pagination>
    </div>
  </div>
</template>

<script>
import { goodsAPi, deleteGood } from '@/assets/api'
export default {
  name: 'good',
  data () {
    return {
      searchText: '',
      tableData: [],
      tatal: 0,
      currentPage: 1,
      pageSize: 20
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      let params = {
        page: this.currentPage,
        pageSize: 20,
        searchQuery: this.searchText
      }
      goodsAPi(params).then(res => {
        let {code, data, message} = res
        if (code === 0) {
          this.tableData = data.result
          this.tatal = data.tatal
        } else {
          this.$message.error(message)
        }
      })
    },
    currentChangeType (currentPage) {
      this.currentPage = currentPage
      this.init()
    },
    search () {
      this.currentPage = 1
      this.init()
    },
    add () {
      this.$router.push({name: 'upgood'})
    },
    Updata (index, row) {
      this.$router.push({name: 'upgood', query: {id: row.id}})
    },
    Delete (index, row) {
      let params = {
        id: row.id
      }
      deleteGood(params).then(res => {
        this.$message('删除成功')
        this.init()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.goodheader {
  display: flex;
}
.div_img {
  height: 100px;
}
.div_img img {
  width: 100%;
}
</style>
