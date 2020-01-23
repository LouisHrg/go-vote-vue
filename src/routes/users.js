import Profile from '@/views/users/Profile.vue';
import UserEdit from '@/views/users/UserEdit.vue';

const routes = [
  {
    path: '/profile',
    name: 'users.profile',
    component: Profile,
    meta: {
      auth: true
    }
  },
  {
    path: '/edit',
    name: 'users.edit',
    component: UserEdit,
    meta: {
      auth: true
    }
  }
];

export default routes;
