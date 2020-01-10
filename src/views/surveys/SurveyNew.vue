<template>
    <el-row justify="center" align="middle" type="flex" class="loginContainer">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>New Survey</h2>
          </div>
          <Formikax @onSubmit="submitSurvey" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit">
              <Field label="Start Date" name="startDate" type="date"/>
              <Field label="End Date" name="endDate" type="date" />
              <Field label="Title" name="title" />
              <Field label="Description" name="desc" as="textarea" />
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
import { mapActions } from 'vuex';
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
  methods: {
    ...mapActions('surveys', [
      'postSurvey'
    ]),
    async submitSurvey ({ values }) {
      var { startDate, endDate, title, desc } = values;
      if (!startDate) {
        this.$message({
          showClose: true,
          message: 'Please enter a Start Date.',
          type: 'error'
        });
        return;
      }

      if (!endDate) {
        this.$message({
          showClose: true,
          message: 'Please enter a End Date.',
          type: 'error'
        });
        return;
      }

      if (!title) {
        this.$message({
          showClose: true,
          message: 'Please enter a Title.',
          type: 'error'
        });
        return;
      }

      if (!desc) {
        this.$message({
          showClose: true,
          message: 'Please enter a Description.',
          type: 'error'
        });
        return;
      }

      startDate = new Date(startDate);
      endDate = new Date(endDate);

      try {
        await this.postSurvey({ startDate, endDate, title, desc });
        this.$message({
          showClose: true,
          message: 'Survey created ! 😂',
          type: 'success'
        });
        await this.$router.push({ path: '/surveys' });
      } catch (error) {
        this.$message({
          showClose: true,
          message: 'Oupsie ! Something went wrong ^^"' + error,
          type: 'error'
        });
      }
    }
  }
};
</script>
