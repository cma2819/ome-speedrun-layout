<style>

html {
  overflow: hidden;
}
#root {
    width: 1920px;
    height: 1080px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ActiveTweet } from '../../../nodecg/generated/activeTweet';
import { replicantModule as replicant } from '../../plugin/replicant';
@Component
export default class OverlayBase extends Vue {
  get activeTweet(): ActiveTweet {
    return replicant.activeTweet;
  }
}
</script>