<template>
  <div id="root">
    <clipped-canvas></clipped-canvas>
    <event-logo></event-logo>
    <div
      :style="{
        position: 'fixed',
        top: '298px',
        left: '1278px'
      }"
    >
      <twitter-notification
        :is-race="false"
        :tweet="activeTweet"
      ></twitter-notification>
    </div>
    <div
      :style="{
        position: 'absolute',
        top: '298px',
        left: '186px',
        width: '1076px',
        height: '693px',
        background: 'rgba(255, 255, 255, 0.7) 0% 0% no-repeat padding-box',
        border: '3px solid rgba(70, 86, 117, 1)'
      }"
    >
      <span
        :style="{
          marginTop: '5.5px',
          marginLeft: '46px',
          font: 'Bold 60px/77px futura-pt',
          letterSpacing: 0,
          color: 'rgba(70, 86, 117, 1)',
          opacity: 0.6
        }"
      >NEXT</span>
      <div
        class="upcoming"
        :style="{
          marginTop: '5px',
          marginLeft: '16px',
          marginRight: '23.5px'
        }"
      >
        <div
          v-if="upcomingRuns[0]"
          class="upnext"
        >
          <upcoming-run
            :run="upcomingRuns[0]"
            :commentators="upcomingRunCommentators[0]"
            :is-up-next="true"
            :start-in="upcomingStartIn[0]"
          ></upcoming-run>      
        </div>
        <div class="scheduled">
          <upcoming-run
            v-if="upcomingRuns[1]"
            :run="upcomingRuns[1]"
            :commentators="upcomingRunCommentators[1]"
            :is-up-next="false"
            :start-in="upcomingStartIn[1]"
          ></upcoming-run>
          <upcoming-run
            v-if="upcomingRuns[2]"
            :run="upcomingRuns[2]"
            :commentators="upcomingRunCommentators[2]"
            :is-up-next="false"
            :start-in="upcomingStartIn[2]"
          ></upcoming-run>  
        </div>
      </div>
    </div>
    <div
      :style="{
        position: 'fixed',
        bottom: '89px',
        left: '1434px',
        width: '486px',
        height: '100px',
        background: '#ffffff',
        borderRadius: '15px 0px 0px 15px',
      }"
    >
      <spotify-track
        :track="spotifyPlayingTrack"
      ></spotify-track>
    </div>
  </div>
</template>

<style>
div.upnext {
  border-bottom: 4px dashed rgba(70, 86, 117, 1);
}
</style>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import OverlayBase from '../components/OverlayBase.vue';
import ClippedCanvas from '../components/ClippedCanvas/ClippedCanvas.vue';
import { secondsToFormatted } from '../_lib/util';
import { replicantModule as replicant } from '../../plugin/replicant';
import { speedcontrolModule as speedcontrol } from '../../plugin/speedcontrol';
import { RunData } from '../../../types/RunData';
import { Commentator } from '../../../nodecg/generated/commentator';
import EventLogo from '../components/EventLogo.vue';
import UpcomingRun from '../components/UpcomingRun.vue';
import SpotifyTrack from '../components/SpotifyTrack.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue'
import { SpotifyPlayingTrack } from '../../../nodecg/replicants';

@Component({
  components: {
    ClippedCanvas,
    EventLogo,
    UpcomingRun,
    SpotifyTrack,
    TwitterNotification
  }
})
export default class App extends OverlayBase {
  test = false;
  mounted(): void {
    setTimeout(() => {
      this.test = true
    }, 2000);
  }

  get upcomingRuns(): RunData[] {
    const currentRunIndex = replicant.speedcontrolCurrentRunIndex || 0;
    return speedcontrol.runDataArray.slice(currentRunIndex, currentRunIndex + 3);
  }

  get upcomingRunCommentators(): Commentator[][] {
    return this.upcomingRuns.map((run) => {
      return replicant.commentatorArray.filter((commentator) => {
        return commentator.assignedRunIdArray.find(runId => runId === run.id);
      })
    });
  }

  get upcomingStartIn(): string[] {
    if (!this.upcomingRuns) {
      return [];
    }
    const startInArray = [];
    startInArray.push(''); // First Element is never used
    if (!this.upcomingRuns[1]) {
      return startInArray;
    }
    const secondRunStartIn = (this.upcomingRuns[0].estimateS || 0) + (this.upcomingRuns[1].setupTimeS || 0);
    startInArray.push(secondsToFormatted(secondRunStartIn));
    if (!this.upcomingRuns[2]) {
      return startInArray;
    }
    const thirdRunStartIn = secondRunStartIn + (this.upcomingRuns[1].estimateS || 0) + (this.upcomingRuns[2].setupTimeS || 0);
    startInArray.push(secondsToFormatted(thirdRunStartIn));
    return startInArray;
  }

  get spotifyPlayingTrack(): SpotifyPlayingTrack {
    return replicant.spotifyPlayingTrack;
  }
}
</script>
