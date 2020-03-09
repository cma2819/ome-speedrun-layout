/* eslint-disable vue/html-self-closing */
<template>
  <div
    :style="{
      paddingTop: '16px',
      paddingBottom: '16px',
      whiteSpace: 'nowrap',
      textOverflow: 'elipsis'
    }"
  >
    <div
      :style="{
      }"
    >
      <div
        :style="{
          display: 'inline-block',
          width: '27px',
          height: '26px',
          marginLeft: '20px',
          marginRight: '8px',
          background: `transparent url('${trackIcon}') 0% 0% no-repeat padding-box`,
          backgroundSize: 'cover'
        }"
      ></div>
      <span
        :style="{
          display: 'inline-block',
          font: 'Bold 19px/28px source-han-sans-japanese',
          width: '420px',
          overflowX: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }"
      >
        {{ trackName }}
      </span>
    </div>
    <div>
      <div
        :style="{
          display: 'inline-block',
          width: '27px',
          height: '26px',
          marginLeft: '20px',
          marginRight: '8px',
          background: `transparent url('${artistIcon}') 0% 0% no-repeat padding-box`,
          backgroundSize: 'cover'
        }"
      ></div>
      <span
        :style="{
          display: 'inline-block',
          font: 'Bold 19px/28px source-han-sans-japanese',
          width: '420px',
          overflowX: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }"
      >
        {{ artists }}
      </span>
    </div>
  </div>
</template>

<style scoped>
div {
  color: rgba(70, 86, 117, 1);
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SpotifyPlayingTrack } from '../../../nodecg/replicants';
import trackBg from '../_statics/icon_track.png';
import artistBg from '../_statics/icon_artist.png';

@Component
export default class SpotifyTrack extends Vue {
  @Prop(Object)
  readonly track!: SpotifyPlayingTrack;

  get trackName(): string {
    if (!this.track) {
      return '';
    }
    return this.track?.name || '';
  }

  get artists(): string {
    return this.track?.artists.join(', ') || '';
  }

  get trackIcon(): string {
    return trackBg;
  }

  get artistIcon(): string {
    return artistBg;
  }
}
</script>