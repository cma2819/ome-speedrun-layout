import { Assets } from "./asset";
import { ActiveTweet } from './generated/activeTweet';
import { GoogleApiDefined } from './generated/googleApiDefined';
import { SpeedcontrolUserAdditionArray } from './generated/speedcontrolUserAdditionArray';
import { SpeedcontrolPlayer } from './generated/speedcontrolPlayer';
import { SpeedcontrolPlayerArray } from "./generated/speedcontrolPlayerArray";
import { CommentatorArray } from "./generated/commentatorArray";
import { SpotifyPlayingTrack } from './generated/spotifyPlayingTrack';
import { SpotifyTokens } from "./generated/spotifyTokens";
import { SpotifyStatus } from "./generated/spotifyStatus";
import { SpotifyUserData } from './generated/spotifyUserData';
import { SpeedcontrolCurrentRunIndex } from "./generated/speedcontrolCurrentRunIndex";
import { TweetDataArray } from './generated/tweetDataArray';

type ReplicantMap = {
    assets: Assets,
    activeTweet: ActiveTweet,
    commentatorArray: CommentatorArray,
    googleApiDefined: GoogleApiDefined,
    speedcontrolCurrentRunIndex: SpeedcontrolCurrentRunIndex,
    speedcontrolUserAdditionArray: SpeedcontrolUserAdditionArray,
    speedcontrolPlayerArray: SpeedcontrolPlayerArray,
    spotifyPlayingTrack: SpotifyPlayingTrack,
    spotifyStatus: SpotifyStatus,
    spotifyTokens: SpotifyTokens,
    spotifyUserData: SpotifyUserData,
    tweetDataArray: TweetDataArray
};

type ReplicantName = (
    'activeTweet' |
    'commentatorArray' |
    'googleApiDefined' |
    'speedcontrolCurrentRunIndex' |
    'speedcontrolUserAdditionArray' |
    'speedcontrolPlayerArray' |
    'spotifyPlayingTrack' |
    'spotifyStatus' |
    'spotifyTokens' |
    'spotifyUserData' |
    'tweetDataArray'
);

export {
    Assets,
    CommentatorArray,
    GoogleApiDefined,
    SpeedcontrolCurrentRunIndex,
    SpeedcontrolUserAdditionArray,
    SpeedcontrolPlayerArray,
    SpotifyPlayingTrack,
    SpotifyStatus,
    SpotifyTokens,
    SpotifyUserData,
    ReplicantMap,
    ReplicantName
};
