<template>
  <div>
    <slot :handleSubmit="handleSubmit"/>
  </div>
</template>

<script>
export default {
  name: 'Formikax',
  props: {
    initialValues: {
      type: Object,
      default: () => ({})
    }
  },
  data: function () {
    return {
      values: this.initialValues
    };
  },
  provide: function () {
    return {
      setFormValue: this.setFormValue
    };
  },
  methods: {
    handleSubmit: function () {
      console.log('handleSubmit');
      this.$emit('onSubmit', {
        values: this.values
      });
    },
    setFormValue: function (name, value) {
      this.$set(this.values, name, value);
    }
  }
};
</script>

<style scoped>
</style>
