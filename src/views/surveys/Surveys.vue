<template>
  <div>
    <el-row>
      <el-table
        empty-text="No data"
        :data="surveys.records">
        <el-table-column
          :formatter="dateFormatter"
          prop="startDate"
          label="Start Date">
        </el-table-column>
        <el-table-column
          :formatter="dateFormatter"
          prop="endDate"
          label="End Date">
        </el-table-column>
        <el-table-column
          prop="title"
          label="Title">
        </el-table-column>
        <el-table-column
          prop="desc"
          label="Description">
        </el-table-column>
        <el-table-column
          label="Actions">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="() => handleView(scope.$index, scope.row)">View</el-button>
            <el-button
              size="mini"
              @click="() => handleEdit(scope.$index, scope.row)">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-col><el-button @click="handleNew" type="primary">New</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dayjs from 'dayjs';

export default {
  name: 'Surveys',
  computed: mapState({
    surveys: state => state.surveys.surveys
  }),
  methods: {
    ...mapActions('surveys', [
      'fetchSurveys'
    ]),
    handleEdit (index, row) {
      this.$router.push({ name: 'surveys.edit', params: { id: row.id } });
    },
    handleView (index, row) {
      this.$router.push({ name: 'surveys.show', params: { id: row.id } });
    },
    handleNew () {
      this.$router.push({ name: 'surveys.new' });
    },
    dateFormatter (row, column) {
      return dayjs(row[column.property]).format('DD/MM/YYYY');
    }
  },
  created () {
    this.fetchSurveys();
  }
};
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
