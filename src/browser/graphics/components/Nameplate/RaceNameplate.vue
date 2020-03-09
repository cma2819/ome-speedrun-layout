<template>
  <div>
    <div
      v-if="!isRunner"
      :style="{
        textAlign: 'center',
        font: '40px/51px futura-pt',
        color: '#ffffff'
      }"
    >
      Commentator
    </div>
    <div
      :style="{
        textAlign: 'center',
        font: isRunner ? 'Bold 60px/89px source-han-sans-japanese' : '40px/67px source-han-sans-japanese',
        color: '#ffffff'
      }"
    >
      {{ name }}
    </div>
    <div
      :style="{
        textAlign: 'center',
        font: '25px/36px source-han-sans-japanese',
        height: '36px',
        color: '#ffffff',
        lotterSpacing: 0
      }"
    >
      <transition
        name="social"
      >
        <div
          v-if="displaySocial === 0 && social.twitch"
          key="twitch"
        >
          <span class="icon">
            <i class="fab fa-twitch"></i>
          </span>
          <span>{{ social.twitch }}</span>
        </div>
        <div
          v-else-if="displaySocial === 1 && social.nico"
          key="nico"
        >
          <span>{{ social.nico }}</span>
        </div>
        <div
          v-else-if="displaySocial === 2 && social.youtube"
          key="youtube"
        >
          <span class="icon">
            <i class="fab fa-youtube"></i>
          </span>
          <span>{{ social.youtube }}</span>
        </div>
        <div
          v-else-if="displaySocial === 3 && social.twitter"
          key="twitter"
        >
          <span class="icon">
            <i class="fab fa-twitter"></i>
          </span>
          <span>{{ social.twitter }}</span>
        </div>
      </transition>
    </div>
    <div
      v-if="finishedTime"
      :style="{
        textAlign: 'center',
        marginTop: '27px',
        font: '50px/64px base-mono-narrow, monospace',
        color: '#91B548'
      }"
    >
      {{ finishedTime }}
    </div>
  </div>
</template>

<style scoped>
  .social-enter-active {
    transition: all 1s 1s;
  }

  .social-leave-active {
    transition: all 1s;
  }

  .social-enter {
    transform: translateX(-20px);
    opacity: 0;
  }
  .social-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Social } from './types';

@Component
export default class Nameplate extends Vue {
  @Prop(Number)
  readonly displaySocial!: number;
  @Prop(String)
  readonly name!: string;
  @Prop(Boolean)
  readonly isRunner!: boolean;
  @Prop(Object)
  readonly social!: Social
  @Prop(String)
  readonly finishedTime!: string;
}
</script>