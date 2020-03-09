<template>
  <div
    :style="{
      margin: '9px 10px 6px 14px'
    }"
  >
    <div
      :style="{
        marginBottom: '5px',
        borderBottom: '3px solid #ffffff'
      }"
    >
      <div
        :style="{
          display: 'inline-block',
          font: '40px/51px futura-pt',
          color: '#ffffff',
          letterSpacing: 0
        }"
      >
        {{ isRunner ? 'Runner' : 'Commentator' }}
      </div>
      <div
        :style="{
          display: 'inline-block',
          textAlign: 'right',
          width: isRunner ? '435px' : '335px',
          marginLeft: '20px',
          font: isRunner ? '45px/65px source-han-sans-japanese' : '35px/51px source-han-sans-japanese',
          color: '#ffffff'
        }"
      >
        {{ name }}
      </div>
    </div>
    <div
      :style="{
        textAlign: 'right',
        font: '25px/36px source-han-sans-japanese',
        color: '#ffffff',
        lotterSpacing: 0,
        height: '36px'
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
  </div>
</template>

<style scoped>
  .social-enter-active {
    transition: all 1s 1s;
  }

  .social-leave-active {
    transition: all 1s;
  }

  .social-enter, .social-leave-to {
    transform: translateX(-20px);
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
}
</script>