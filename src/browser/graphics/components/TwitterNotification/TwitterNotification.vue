<template>
  <transition
    name="twitter"
    mode="out-in"
  >
    <twitter-notification-tweet
      v-if="tweet"
      :is-race="isRace"
      :tweet="tweet"
    ></twitter-notification-tweet>
    <twitter-notification-hashtag
      v-else
      :is-race="isRace"
    ></twitter-notification-hashtag>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TwitterNotificationHashtag from './TwitterNotificationHashtag.vue';
import TwitterNotificationTweet from './TwitterNotificationTweet.vue';
import { ActiveTweet } from '../../../../nodecg/generated/activeTweet';

@Component({
  components: {
    TwitterNotificationHashtag,
    TwitterNotificationTweet
  }
})
export default class TwitterNotification extends Vue {
  @Prop(Boolean)
  readonly isRace!: boolean;
  @Prop(Object)
  readonly tweet!: ActiveTweet | null;
}
</script>

<style scoped>
  .twitter-enter-active {
    transition: all 1.5s ease-in-out;
  }

  .twitter-leave-active {
    transition: all 1.5s ease-in-out;
  }

  .twitter-enter {
    transform: translateX(642px);
  }

  .twitter-leave-to {
    transform: translateX(642px);
  }
</style>