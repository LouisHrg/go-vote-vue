<template>
    <el-row justify="center" align="middle" type="flex" class="loginContainer">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>Edit Survey</h2>
          </div>
          <Formikax @onSubmit="editSurvey" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit">
              <Field label="Start Date" name="startDate" :value="survey.startDate" type="date"/>
              <Field label="End Date" name="endDate" :value="survey.endDate" type="date" />
              <Field label="Title" name="title" :value="survey.title"/>
              <Field label="Description" name="desc" as="textarea">{{survey.desc}}</Field>
              <el-button native-type="submit" type="primary">Create</el-button>
            </form>
          </Formikax>
        </el-card>
      </el-col>
    </el-row>
</template>

<style scoped>
  .avatar-logo{
    border-radius: 50px;
    height: 150px;
  }
  .role{
    font-weight: 600;
  }
  .bio{
    text-align: justify;
  }
  .clearfix{
    margin-bottom: 20px;
  }
  .clearfix-top{
    margin-top: 50px;
  }
  .edit-button{
    float: right;
  }
</style>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'SurveyNew',
  data () {
    return {
      form: {
        startDate: '',
        endDate: '',
        title: '',
        desc: ''
      }
    };
  },
  computed: mapState({
    survey: state => state.surveys.survey,
    avatar: state => state.auth.user.avatar
  }),
  methods: {
    ...mapActions('surveys', [
      'postSurvey'
    ]),
    async editSurvey ({ values }) {
        this.$message({
          showClose: true,
          message: 'Survey created ! 😂',
          type: 'success'
        });
    }
  }
};
</script>
