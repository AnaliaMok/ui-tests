<template>
  <button v-html="text" class="appearance-none text-gray-800"></button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop(String) private text!: string;
}
</script>

<style></style>
