<template>
  <div>
    <label :for="innerId">{{ innerLabel }}</label>
    <component
      :is="innerAs"
      :type="type"
      :id="innerId"
      :name="name"
      :placeholder="name"
      :value="value"
      @input="handleInput"
    >
      <slot/>
    </component>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    name: String,
    value: String,
    component: String,
    as: {
      type: String,
      default: 'input'
    },
    type: {
      type: String,
      default: 'text'
    },
    id: String,
    label: String,
    multiple: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  inject: ['setFormValue'],
  computed: {
    innerAs: function () {
      return this.component ? this.component : this.as;
    },
    innerId: function () {
      return this.id
        ? this.id
        : `formikax-${this.name}-${new Date().valueOf()}`;
    },
    innerLabel: function () {
      return this.label ? this.label : this.name;
    }
  },
  methods: {
    handleInput: function (event) {
      const value = event.target.value;
      this.setFormValue(this.name, value);
      this.$emit('input', value);
    }
  }
};
</script>

<style scoped>
</style>
