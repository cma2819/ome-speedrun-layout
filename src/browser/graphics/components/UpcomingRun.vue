<template>
  <div
    :style="{
      marginTop: '16px',
      marginBottom: '16px'
    }"
  >
    <div
      :style="{
        font: 'Bold 45px/66px source-han-sans-japanese',
        letterSpacing: 0
      }"
    >
      <i class="fas fa-caret-right"></i>
      <span
        :style="{
          font: 'Bold 45px/66px source-han-sans-japanese'
        }"
      >{{ game }}</span>
    </div>
    <div
      :style="{
        position: 'relative',
        marginLeft: '30.5px'
      }"
    >
      <div
        :style="{
          font: 'Bold 30px/45px source-han-sans-japanese'
        }"
      >
        <span
          ref="categoryName"
          :style="{
            display: 'inline-block',
            transformOrigin: 'left',
            transform: `scaleX(${scaleCategoryName})`
          }"
        >{{ category }} - {{ platform }}</span>
      </div>
      <div
        :style="{
          position: 'absolute',
          left: '659px',
          bottom: 0
        }"
      >
        <span
          :style="{
            font: 'Bold 20px/29px source-han-sans-japanese'
          }"
        >予定タイム</span>
        <span
          :style="{
            display: 'inline-block',
            textAlign: 'right',
            font: '30px/38px futura-pt',
            width: '162px'
          }"
        >{{ estimate }}</span>
      </div>
    </div>
    <div
      :style="{
        position: 'relative',
        marginTop: '6.5px',
        marginLeft: '30.5px'
      }"
    >
      <div :style="{position: 'relative'}">
        <span
          :style="{
            font: 'Bold 20px/26px futura-pt-bold',
            letterSpacing: 0
          }"
        >Runner</span>
        <span
          :style="{
            position: 'absolute',
            left: '365.5px',
            font: 'Bold 20px/29px source-han-sans-japanese'
          }"
        >{{ runner }}</span>
      </div>
      <div :style="{position: 'relative'}">
        <span
          :style="{
            font: 'Bold 20px/26px futura-pt-bold',
            letterSpacing: 0
          }"
        >Commentator</span>
        <span
          :style="{
            position: 'absolute',
            left: '365.5px',
            font: 'Bold 20px/29px source-han-sans-japanese'
          }"
        >{{ commentator }}</span>
      </div>
      <div
        v-if="!isUpNext"
        :style="{
          position: 'absolute',
          left: '659px',
          bottom: 0
        }"
      >
        <span
          :style="{
            marginBottom: '9px',
            font: 'Bold 20px/29px source-han-sans-japanese',
            letterSpacing: 0
          }"
        >開始まで</span>
        <span
          :style="{
            display: 'inline-block',
            width: '182px',
            textAlign: 'right',
            font: 'Bold 45px/58px futura-pt-bold',
            letterSpacing: 0
          }"
        >{{ startIn }}</span>
      </div>
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
import { RunData } from '../../../types/RunData';
import { Commentator } from '../../../nodecg/generated/commentator';

@Component
export default class UpcomingRun extends Vue {
  @Prop(Object)
  readonly run!: RunData;
  @Prop(Array)
  readonly commentators!: Commentator[];
  @Prop(Boolean)
  readonly isUpNext!: boolean;
  @Prop(String)
  readonly startIn!: string;

  scaleCategoryName = 1;

  updated(): void {
    const categoryNameElement = this.$refs.categoryName as Element;
    const categoryEleWidth = categoryNameElement.clientWidth;
    if (categoryEleWidth > 650) {
      this.scaleCategoryName = 650 / categoryEleWidth;
    } else {
      this.scaleCategoryName = 1;
    }
  }

  get game(): string {
    return this.run.game || '';
  }

  get category(): string {
    return this.run.category || '';
  }

  get platform(): string {
    return this.run.system || '';
  }

  get estimate(): string {
    return this.run.estimate || '';
  }

  get runner(): string {
    return this.run.teams.map((team) => {
      return team.players.map((player) => {
        return player.name;
      }).join(' / ');
    }).join(' vs. ');
  }

  get commentator(): string {
    return this.commentators.map((commentator) => {
      return commentator.name;
    }).join(' / ');
  }
}

</script>
