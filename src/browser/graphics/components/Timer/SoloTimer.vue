<template>
  <div
    :style="{
      margin: '0px 10px 0px 14px'
    }"
  >
    <div
      :style="{
        borderBottom: '3px solid #ffffff',
        boxSizing: 'border-box',
        height: '122px'
      }"
    >
      <div
        :style="{
          display: 'inline-block',
          font: '75px/78px futura-pt',
          color: '#ffffff',
          letterSpacing: 0
        }"
      >
        Time
      </div>
      <div
        :style="{
          display: 'inline-block',
          textAlign: 'right',
          width: '438px',
          font: '100px/128px base-mono-narrow, monospace',
          color: timerColor
        }"
      >
        {{ time }}
      </div>
    </div>
    <div>
      <div
        :style="{
          display: 'inline-block',
          font: '45px/58px  futura-pt',
          color: '#ffffff',
          letterSpacing: 0
        }"
      >
        Estimate
      </div>
      <div
        :style="{
          display: 'inline-block',
          textAlign: 'right',
          width: '420px',
          font: '60px/77px base-mono-narrow, monospace',
          color: '#ffffff'
        }"
      >
        {{ estimate }}
      </div>
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