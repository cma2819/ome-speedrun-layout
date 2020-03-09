<template>
  <div
    :style="{
      position: 'fixed',
      top: '67px',
      right: '34px',
      width: '100%',
      textAlign: 'right'
    }"
  >
    <div
      :style="{      
        height: '75px',
        font: '600 60px/60px vdl-v7marugothic',
        textAlign: 'right',
        color: '#ffffff',
        letterSpacing: 0
      }"
    >
      {{ game }}
    </div>
    <div
      :style="{
        height: '49px',
        marginTop: '2px',
        font: '40px/40px vdl-v7marugothic',
        textAlign: 'right',
        color: '#ffffff',
        letterSpacing: 0
      }"
    >
      {{ category }} - {{ platform }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class EventLogo extends Vue {
  @Prop(String)
  readonly game!: string;
  @Prop(String)
  readonly category!: string;
  @Prop(String)
  readonly platform!: string;
}
</script>