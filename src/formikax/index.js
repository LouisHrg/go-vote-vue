import Field from './src/Field';
import Formikax from './src/Formikax';

Formikax.install = function (Vue) {
  Vue.component(Formikax.name, Formikax);
  Vue.component(Field.name, Field);
};

export default Formikax;
