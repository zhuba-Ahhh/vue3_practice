<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column
      v-if="checkBox"
      type="selection"
      width="55"
    ></el-table-column>
    <el-table-column v-if="checkIndex" type="index"></el-table-column>
    <template v-for="(item, index) in colum">
      <el-table-column
        v-if="item.type === 'function'"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        :key="index"
      >
        <div
          slot-scope="scope"
          v-html="
            item.callBack && item.callBack(tableData[index - 1].name, index)
          "
        ></div>
        <!-- <template slot-scope="scope">
          <div v-html="item.callBack && item.callBack()"></div>
        </template> -->
      </el-table-column>
      <el-table-column
        v-else-if="item.type === 'solt'"
        :label="item.label"
        :width="item.width"
      >
        <z_button>按钮</z_button>
        <template slot-scope="scope">
          <slot :name="item.slot_name" />
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column>
    </template>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
// import type { PropType } from "vue";
// import "element-plus/dist/index.css";
// import { Timer } from "@element-plus/icons-vue";
import "./table.scss";
import z_button from "@/components/Button/index.vue";

const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

interface User {
  date?: string;
  name: string;
  address?: string;
  sex?: string;
  link?: string;
}

type Colum = {
  prop?: string;
  label?: string;
  width?: string;
  link?: string;
  type?: string;
  callBack?: Function;
  slot_name?: string;
};

defineProps({
  colum: {
    type: Array<Colum>,
    default: [],
  },
  checkBox: {
    type: Boolean,
    default: true,
  },
  checkIndex: {
    type: Boolean,
    default: true,
  },
});

// let a = `<a href='https://www.zhuba.cloud/'>zhuba.cloud</a>`;

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (rowIndex === 1) {
    return "warning-row";
  } else if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};

const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    sex: "male",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    sex: "male",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    sex: "male",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    sex: "male",
  },
];
</script>

<style scoped lang="scss"></style>
