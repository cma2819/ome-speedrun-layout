<template>
  <div
    :style="{
      position: 'fixed',
      top: '30px',
      left: '30px'
    }"
  >
    <img
      src="../_statics/logo.png"
      alt="logo"
      width="396px"
      height="200px"
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class EventLogo extends Vue {}
</script>