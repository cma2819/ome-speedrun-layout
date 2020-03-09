<template>
  <div
    :style="{
      width: '100%',
      height: '100%'
    }"
  >
    <div
      :style="{
        font: '20px/26px futura-pt',
        color: '#ffffff'
      }"
    >
      Estimate
    </div>
    <div
      :style="{
        marginLeft: '4px',
        font: '40px/51px base-mono-narrow, monospace',
        color: '#ffffff'
      }"
    >
      {{ estimate }}
    </div>
    <div
      :style="{
        font: '30px/38px futura-pt',
        color: '#ffffff'
      }"
    >
      Time
    </div>
    <div
      :style="{
        marginLeft: '4px',
        font: '60px/62px base-mono-narrow, monospace',
        color: timerColor
      }"
    >
      {{ time }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TimerStatus } from './types';

@Component
export default class Nameplate extends Vue {

  timerColorStatus: {[k in TimerStatus]: string} = {
    stopped: 'rgba(255, 255, 255, 0.4)',
    running: '#ffffff',
    warning: '#B56151',
    finished: '#91B548'
  };

  @Prop(String)
  readonly status!: TimerStatus;
  @Prop(String)
  readonly time!: string;
  @Prop(String)
  readonly estimate!: string;

  get timerColor(): string {
    return this.timerColorStatus[this.status];
  }

}
</script>