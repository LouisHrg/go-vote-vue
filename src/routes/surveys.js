import Surveys from '@/views/surveys/Surveys.vue';
import SurveyShow from '@/views/surveys/SurveyShow.vue';

const routes = [
  {
    path: '/surveys/:id',
    name: 'surveys.show',
    component: SurveyShow,
    meta: {
      auth: true
    }
  },
  {
    path: '/surveys',
    name: 'surveys',
    component: Surveys,
    meta: {
      auth: true
    }
  }
];

export default routes;
