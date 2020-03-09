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
        position: 'absolute',
        top: '849px',
        left: '0px',
        width: '1920px',
        height: '201px',
        background: '#465675BF 0% 0% no-repeat padding-box'
      }"
    >
    </div>

    <div
      v-if="gameView.commentator.name"
      class="commentator"
      :style="{
        position: 'absolute',
        top: '911px',
        left: '0px',
        width: '100%',
      }"
    >
      <race-nameplate
        :is-runner="false"
        :display-social="gameView.currentSocial"
        :name="gameView.commentator.name"
        :social="gameView.commentator.social"
      ></race-nameplate>
    </div>
    <div
      :style="{
        position: 'absolute',
        top: '822px',
        left: '296px',
        width: '558px',
      }"
    >
      <race-nameplate
        v-if="gameView.runners[0]"
        :is-runner="true"
        :display-social="gameView.currentSocial"
        :name="gameView.runners[0].name"
        :social="gameView.runners[0].social"
        :finished-time="gameView.runners[0].time"
      ></race-nameplate>
    </div>
    <div
      :style="{
        position: 'absolute',
        top: '822px',
        right: '296px',
        width: '558px',
      }"
    >
      <race-nameplate
        v-if="gameView.runners[1]"
        :is-runner="true"
        :display-social="gameView.currentSocial"
        :name="gameView.runners[1].name"
        :social="gameView.runners[1].social"
        :finished-time="gameView.runners[1].time"
      ></race-nameplate>
    </div>
    <div
      :style="{
        position: 'absolute',
        top: '849px',
        left: '-2px',
        width: '296px',
        height: '201px',
        background: '#707070 0% 0% no-repeat padding-box',
        borderRadius: '0px 50px 50px 0px',
        padding: '11px 0px 10px 47px'
      }"
    >
      <race-timer
        :status="timerStatus"
        :time="gameView.currentTime.time"
        :estimate="gameView.runData.estimate"
      ></race-timer>
    </div>
    <div
      :style="{
        position: 'fixed',
        top: '849px',
        left: '1620px'
      }"
    >
      <twitter-notification
        :is-race="true"
        :tweet="activeTweet"
      ></twitter-notification>
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
import RaceNameplate from '../components/Nameplate/RaceNameplate.vue';
import RaceTimer from '../components/Timer/RaceTimer.vue';
import { ClipPath } from '../components/ClippedCanvas/types';
import { gameViewModule as gameView } from '../_lib/gameViewModule';
import { TimerStatus } from '../components/Timer/types';

@Component({
  components: {
    ClippedCanvas,
    EventLogo,
    TwitterNotification,
    RunLabel,
    RaceNameplate,
    RaceTimer
  }
})
export default class RaceGameView extends OverlayBase {
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