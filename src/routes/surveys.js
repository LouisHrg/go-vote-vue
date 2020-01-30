import Surveys from '@/views/surveys/Surveys.vue';
import SurveyShow from '@/views/surveys/SurveyShow.vue';
import SurveyNew from '@/views/surveys/SurveyNew.vue';
import SurveyEdit from '@/views/surveys/SurveyEdit.vue';

const routes = [
  {
    path: '/surveys/new',
    name: 'surveys.new',
    component: SurveyNew,
    meta: {
      auth: true
    }
  },
  {
    path: '/surveys/:uuid',
    name: 'surveys.show',
    component: SurveyShow,
    meta: {
      auth: true
    }
  },
  {
    path: '/surveys/:uuid',
    name: 'surveys.edit',
    component: SurveyEdit,
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
