<template>
  <div>Table</div>
  <hr />
  <Table :colum="colum" :checkBox="checkBox" :checkIndex="checkIndex">
    <template v-slot:operation>
      <el-button>编辑</el-button>
    </template>
  </Table>
</template>

<script setup lang="ts">
import Table from "@/components/Table/index.vue";

type Colum = {
  prop?: string;
  label?: string;
  width?: string;
  type?: string;
  callBack?: Function;
  slot_name?: string;
};

const checkBox: boolean = false; // true: 每一行前加选项框 默认：false
const checkIndex: boolean = true; // true: 每一行加序列 默认：true

const colum: Array<Colum> = [
  { label: "Date", prop: "date", width: "180" },
  { label: "Name", prop: "name", width: "180" },
  { label: "Address", prop: "address", width: "Infinity" },
  { label: "Sex", prop: "sex", width: "80" },
  {
    label: "Link",
    prop: "name",
    width: "200",
    type: "function",
    callBack: (data: any, index: number) => {
      console.log();
      return `<a href="https://www.zhuba.cloud/">${index + ":" + data}</a>`;
    },
  },
  {
    label: "Operation",
    prop: "operation",
    width: "200",
    type: "slot",
    slot_name: "operation",
  },
];
</script>

<style scoped></style>
