<template>
      <div v-loading:pending>
        This survey is typed as <b>{{ survey.startDate }}</b>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SurveyShow',
  computed: mapState({
    survey: state => state.surveys.survey
  }),
  methods: {
    ...mapActions('surveys', [
      'fetchSurvey'
    ])
  },
  created () {
    this.fetchSurvey(this.$route.params.id);
  }
};
</script>
