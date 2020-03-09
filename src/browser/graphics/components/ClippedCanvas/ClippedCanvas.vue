<template>
  <canvas
    width="1920"
    height="1080"
  ></canvas>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import backgroundImage from '../../_statics/background.jpg';
import { ClipPath } from './types';

@Component
export default class ClippedCanvas extends Vue {
  @Prop(Array)
  readonly clipPaths!: ClipPath[];

  ctx?: CanvasRenderingContext2D;
  mounted(): void {
    const element = this.$el as HTMLCanvasElement;
    const ctx = element.getContext('2d');
    if (ctx) {
      this.ctx = ctx;
    }
    const background = new Image();
    background.src = backgroundImage;
    background.addEventListener('load', () => {
      this.draw(background);
    })
  }

  draw(bg: HTMLImageElement): void {
    if (!this.ctx) {
      return;
    }
    this.ctx.drawImage(bg, 0, 0);
    this.ctx.globalCompositeOperation = 'xor';
    this.clipPaths?.forEach((clipPath) => {
      this.ctx?.fillRect(
        clipPath.x,
        clipPath.y,
        clipPath.width,
        clipPath.height
      );
    });
  }
}
</script>