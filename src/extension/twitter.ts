import { NodeCG } from './nodecg';
import Twitter from 'twitter'
import { Tweet } from '../nodecg/generated/tweet';

const MAX_TWEETS = 50;

export const twitter = (nodecg: NodeCG): void => {
    const logger = new nodecg.Logger('ome-speedrun-layout:twitter');
    const config = nodecg.bundleConfig.twitter;
    if (!config || !config.targetWords || !config.consumerKey || !config.consumerSecret || !config.accessTokenKey || !config.accessTokenSecret) {
        logger.warn('Twitter config is not defined.');
        return;
    }

    const activeTweetRep = nodecg.Replicant('activeTweet', {
        defaultValue: null
    });
    const tweetDataArrayRep = nodecg.Replicant('tweetDataArray', {
        defaultValue: []
    });

    const addTweet = (tweet: Tweet): void => {
        if (!tweetDataArrayRep.value || tweetDataArrayRep.value.find(t => t.id === tweet.id)) {
            return;
        }
        tweetDataArrayRep.value = [tweet].concat(tweetDataArrayRep.value).slice(0, MAX_TWEETS);
    }

    const activateTweet = (id: number): void => {
        if (!tweetDataArrayRep.value || activeTweetRep.value === undefined) {
            return;
        }
        if (activeTweetRep.value !== null) {
            logger.warn('Tweet is already activated.');
        }
        const tweetIndex = tweetDataArrayRep.value.findIndex(t => t.id === id);
        const tweet = tweetDataArrayRep.value[tweetIndex];
        if (!tweet) {
            logger.warn('Target tweet is not found.');
            return;
        }
        activeTweetRep.value = {...tweet};
        tweetDataArrayRep.value.splice(tweetIndex, 1);
        setTimeout(() => {
            activeTweetRep.value = null;
        }, 30 * 1000)
    }

    const client = new Twitter({
        'consumer_key': config.consumerKey,
        'consumer_secret': config.consumerSecret,
        'access_token_key': config.accessTokenKey,
        'access_token_secret': config.accessTokenSecret
    });

    const filterTrack = config.targetWords.join(',');

    const startStream = (): void => {
        logger.info('Try to connect stream.');
        client.stream('statuses/filter', {track: filterTrack}, (stream) => {
            stream.on('data', (tweet) => {
                addTweet({
                    id: tweet.id,
                    name: tweet.user.name,
                    screenName: tweet.user.screen_name,
                    profileImageUrl: tweet.user.profile_image_url_https || tweet.user.profile_image_url || null,
                    text: tweet.text
                });
            });
            stream.on('error', (error) => {
                logger.info('Error happened on stream.');
                logger.error(error);
                setTimeout(startStream, 5 * 60 * 1000);
            })
        });
    }

    if (activeTweetRep.value) {
        activeTweetRep.value = null;
    }

    startStream();
    nodecg.listenFor('twitter:activate', activateTweet);
}