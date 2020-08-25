<template>
  <div>
    <h1>table</h1>
    <!-- <el-table
      :data="tableData"
      style="width: 100%"
      :span-method="arraySpanMethod"
    >
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>-->

    <el-table :data="tableData" :span-method="cellSpan">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        tableData: [
          {
            id: '1',
            name: '1小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            id: '1',
            name: '1小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            id: '1',
            name: '1王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            id: '1',
            name: '1王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            id: '1',
            name: '1王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            id: '3',
            name: '3王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            id: '3',
            name: '3王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            id: '3',
            name: '3王虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            id: '5',
            name: '5王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            id: '5',
            name: '5王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            id: '5',
            name: '5王虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            id: '5',
            name: '5王虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            id: '5',
            name: '5王虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
        // proTable: [],
        // showLoading: true,
      };
    },
    mounted() {
      // this.$message('aaaaa');
      // for (var i = 1; i <= 5; i++) {
      //   setTimeout(function () {
      //     console.log(i);
      //   }, 1000);
      //   // console.log(i);
      // }

      new Promise(function (resolve) {
        console.log('promise1');
        resolve();
      }).then(function () {
        console.log('then1');
      });

      setTimeout(function () {
        console.log('timeout2');
        new Promise(function (resolve) {
          console.log('timeout2_promise');
          resolve();
        }).then(function () {
          console.log('timeout2_then');
        });
      }, 1000);
      // axios.get('/portal/education/schoolbase/queryPtSchoolbase').then((res) => {
      //   this.proTable = res.data.data.row;
      // });
      // axios({
      //   url: '/portal/education/schoolbase/queryPtSchoolbase',
      //   method: 'get',
      // }).then((res) => {
      //   this.tableData = res.data.data;
      // });
      // console.log(this.proTable);
      // this.getSpanArr(this.tableData, 'id');
    },
    methods: {
      // getSpanArr(data, param) {
      //   let spanArr = [];
      //   let pos = '';
      //   for (var i = 0; i < data.length; i++) {
      //     if (i == 0) {
      //       spanArr.push(1);
      //       pos = i;
      //     } else {
      //       if (data[i][param] == data[i - 1][param]) {
      //         spanArr[pos] += 1;
      //         spanArr.push(0);
      //       } else {
      //         pos = i;
      //         spanArr.push(1);
      //       }
      //     }
      //   }
      //   return spanArr;
      // },
      // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      //   var spanArr = this.getSpanArr(this.tableData, 'id');
      //   // console.log(spanArr);
      //   if (columnIndex == 0) {
      //     const _row = spanArr[rowIndex];
      //     const _col = _row > 0 ? 1 : 0;
      //     return [_row, _col];
      //   }
      //   var spanArr = this.getSpanArr(this.tableData, 'name');
      //   if (columnIndex == 1) {
      //     const _row = spanArr[rowIndex];
      //     const _col = _row > 0 ? 1 : 0;
      //     return [_row, _col];
      //   }
      // },
      getCellArr(data, prop) {
        var arr = []; //返回的数组
        var pos;
        var len = data.length;
        for (let index = 0; index < len; index++) {
          if (index == 0) {
            arr.push(1);
            pos = 0;
          } else {
            if (data[index][prop] == data[index - 1][prop]) {
              arr[pos]++;
              arr.push(0);
            } else {
              pos = index;
              arr.push(1);
            }
          }
        }
        return arr;
      },
      cellSpan({ row, col, rowIndex, columnIndex }) {
        var arr = this.getCellArr(this.tableData, 'id');
        // console.log(arr);
        if (columnIndex == 0) {
          var _row, _col;
          _row = arr[rowIndex];
          _col = _row > 0 ? 1 : 0;
          return [_row, _col];
        }
      },
    },
  };
</script>