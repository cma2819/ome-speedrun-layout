<template>
  <div
    :style="{
      position: 'relative'
    }"
  >
    <div
      :style="styles.panel"
    >
      <div
        :style="styles.username"
      >
        @{{ tweet.screenName }}
      </div>
      <div
        :style="styles.nickname"
      >
        {{ tweet.name }}
      </div>
      <div
        :style="styles.content"
      >
        {{ tweet.text }}
      </div>
    </div>
    <div
      class="twitter"
      :style="{
        backgroundImage: `url(${tweet.profileImageUrl})`,
        backgroundSize: 'cover',
        ...styles.icon
      }"
    >
    </div>
  </div>
</template>

<style scoped>
.twitter {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: transparent;
  background-size: cover;
  border-radius: 50%;
  z-index: 10;
}

</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { tweetStyles, TwitterNotificationTweetStyle } from './styles';
import { ActiveTweet } from '../../../../nodecg/generated/activeTweet';

@Component
export default class TwitterNotification extends Vue {
@Prop(Boolean)
readonly isRace!: boolean;
@Prop(Object)
readonly tweet!: ActiveTweet;

  get styles(): TwitterNotificationTweetStyle {
    return this.isRace ? tweetStyles.race : tweetStyles.solo;
  }
}
</script>