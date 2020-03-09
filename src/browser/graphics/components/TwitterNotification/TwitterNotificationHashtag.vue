<template>
  <div
    :style="{
      position: 'relative'
    }"
  >
    <div
      :style="styles.panel"
    >
      <span
        :style="styles.tweetOn"
      >Tweet on</span>
      <br>
      <span
        :style="styles.hashtag"
      >#R1KOnline</span>
    </div>
    <div
      class="twitter"
      :style="styles.icon"
    ></div>
  </div>
</template>

<style lang="stylus" scoped>
.twitter {
  position: absolute;
  top: 0px;
  left: 0px;
  background: transparent url("../../_statics/twitter_social_icon.svg") 0% 0% no-repeat padding-box;
  background-size: cover;
  z-index: 10;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { hashtagStyles, TwitterNotificationHashtagStyle } from './styles';

@Component
export default class TwitterHashtag extends Vue {
  @Prop(Boolean)
  readonly isRace!: boolean;

  get styles(): TwitterNotificationHashtagStyle {
    return this.isRace ? hashtagStyles.race : hashtagStyles.solo;
  }
}
</script>