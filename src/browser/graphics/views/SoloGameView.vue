<template>
  <div id="root">
    <clipped-canvas
      :clip-paths="clipPaths"
    ></clipped-canvas>
    <event-logo></event-logo>
    <run-label
      :game="gameView.runData.game"
      :category="gameView.runData.category"
      :platform="gameView.runData.platform"
    ></run-label>
    <div
      :style="{
        position: 'fixed',
        top: '243px',
        left: '1278px'
      }"
    >
      <twitter-notification
        :is-race="false"
        :tweet="activeTweet"
      ></twitter-notification>
    </div>

    <div
      v-if="gameView.commentator.name"
      class="commentator"
      :style="{
        position: 'absolute',
        bottom: '408px',
        left: '1278px',
        width: '608px',
        background: '#465675BF 0% 0% no-repeat padding-box'
      }"
    >
      <nameplate
        :is-runner="false"
        :display-social="gameView.currentSocial"
        :name="gameView.commentator.name"
        :social="gameView.commentator.social"
      ></nameplate>
    </div>
    <div
      :style="{
        position: 'absolute',
        top: '695px',
        left: '1278px',
        width: '608px',
        background: '#465675BF 0% 0% no-repeat padding-box'
      }"
    >
      <nameplate
        v-if="gameView.runners[0]"
        :is-runner="true"
        :display-social="gameView.currentSocial"
        :name="gameView.runners[0].name"
        :social="gameView.runners[0].social"
      ></nameplate>
    </div>
    <div
      :style="{
        position: 'absolute',
        top: '849px',
        left: '1278px',
        width: '608px',
        background: '#465675BF 0% 0% no-repeat padding-box'
      }"
    >
      <solo-timer
        :status="timerStatus"
        :time="gameView.currentTime.time"
        :estimate="gameView.runData.estimate"
      ></solo-timer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import OverlayBase from '../components/OverlayBase.vue';
import ClippedCanvas from '../components/ClippedCanvas/ClippedCanvas.vue';
import EventLogo from '../components/EventLogo.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue';
import RunLabel from '../components/RunLabel/RunLabel.vue';
import Nameplate from '../components/Nameplate/Nameplate.vue';
import SoloTimer from '../components/Timer/SoloTimer.vue';
import { ClipPath } from '../components/ClippedCanvas/types';
import { gameViewModule as gameView } from '../_lib/gameViewModule';
import { TimerStatus } from '../components/Timer/types';

@Component({
  components: {
    ClippedCanvas,
    EventLogo,
    TwitterNotification,
    RunLabel,
    Nameplate,
    SoloTimer
  }
})
export default class SoloGameView extends OverlayBase {
  @Prop(Array)
  readonly clipPaths!: ClipPath[]

  test = false;
  displaySocialIndex = 0;
  gameView = gameView;
  
  created(): void {
    setTimeout(() => {
      this.test = true
    }, 2000);
    setInterval(() => {
      gameView.nextSocial();
    }, 20000)
  }

  get timerStatus(): TimerStatus {
    const currentTime = this.gameView.currentTime;
    switch (this.gameView.runStatus) {
      case 'running':
        if (currentTime.ms > 60 * 60 * 1000) {
          return 'warning';
        }
        return 'running';
      case 'finished':
        return 'finished';
      default:
        return 'stopped';
    }
  }
}
</script>