<template>
  <div v-loading:pending>
    <el-row class="clearfix" type="flex" justify="center">
      <el-col :span="14">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <el-row justify="align">
              <el-col :span="8">
                <h4>Start Date</h4>
                <h3>{{ survey.data.startDate | dateFormatter }}</h3>
              </el-col>
              <el-col :span="8">
                <h1>{{ survey.data.title }}</h1>
              </el-col>
              <el-col :span="8">
                <h4>End Date</h4>
                <h3>{{ survey.data.endDate | dateFormatter }}</h3>
              </el-col>
            </el-row>
            <hr />
            <span>{{ survey.data.desc }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="clearfix" type="flex" justify="center">
      <el-col :span="14">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <el-row justify="align">
              <el-col>
                <h1>Commentaires</h1>
              </el-col>
            </el-row>
            <hr />
            <el-row
              class="clearfix"
              type="flex"
              justify="center"
              v-for="response in survey.data.Responses"
              v-bind:key="response.uuid"
            >
              <el-col :span="14">
                <el-card :body-style="{ height: '40px' }">{{ response.message }}</el-card>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dayjs from 'dayjs';

export default {
  name: 'SurveyShow',
  computed: mapState({
    survey: state => state.surveys.survey
  }),
  methods: {
    ...mapActions('surveys', ['fetchSurvey'])
  },
  created () {
    this.fetchSurvey(this.$route.params.uuid);
  },
  filters: {
    dateFormatter: date => {
      return dayjs(date).format('DD/MM/YYYY');
    }
  }
};
</script>

<style scoped>
.clearfix {
  margin-bottom: 20px;
}
</style>
