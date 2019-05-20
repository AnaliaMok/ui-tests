<template>
  <button
    class="appearance-none outline-none text-gray-100 px-4 py-2 bg-blue-800 rounded-lg hover:bg-blue-600 focus:bg-blue-600"
    v-html="text"
    :type="buttonType"
  ></button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop(String) private text!: string;
  @Prop({ type: String, default: 'button' }) private buttonType!: string;
}
</script>

<style scoped>
button {
  transition: all 0.2s;
}
</style>
