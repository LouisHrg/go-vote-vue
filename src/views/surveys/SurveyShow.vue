<template>
  <div v-loading:pending>
    <el-row class="clearfix" type="flex" justify="center">
      <el-col :span="14">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <el-row justify="align">
              <el-col :span="8">
                <h4>Start Date</h4>
                <h3>{{ survey.startDate | dateFormatter }}</h3>
              </el-col>
              <el-col :span="8">
                <h1>{{ survey.title }}</h1>
              </el-col>
              <el-col :span="8">
                <h4>End Date</h4>
                <h3>{{ survey.endDate | dateFormatter }}</h3>
              </el-col>
            </el-row>
            <hr />
            <span>{{ survey.desc }}</span>
          </div>
        </el-card>
        <div>
          <Formikax @onSubmit="handleVote" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit">
              <Field label="Message" name="vote" />
              <el-button native-type="submit" type="primary">Vote</el-button>
            </form>
          </Formikax>
        </div>
      </el-col>
    </el-row>

    <el-row class="clearfix" type="flex" justify="center">
      <el-col :span="14">
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
              v-for="response in survey.Responses"
              v-bind:key="response.uuid"
            >
              <el-col :span="14">
                <el-card :body-style="{ height: '40px' }">{{ response.message }}</el-card>
              </el-col>
            </el-row>
          </div>
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
    survey: state => state.surveys.survey,
    user: state => state.auth.user
  }),
  methods: {
    ...mapActions('surveys', ['fetchSurvey', 'vote']),
    handleVote ({ values }) {
      this.vote({
        response: {
          uuid: this.user.uuid,
          message: values.vote
        },
        survey: this.survey
      });
    }
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
