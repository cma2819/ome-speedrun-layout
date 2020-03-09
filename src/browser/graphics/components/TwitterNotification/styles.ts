
export const tweetStyles: {
    solo: TwitterNotificationTweetStyle;
    race: TwitterNotificationTweetStyle;
} = {
    solo: {
        panel: {
            position: 'absolute',
            paddingLeft: '148px',
            top: '0px',
            left: '0px',
            width: '647px',
            height: '233px',
            background: 'rgba(171, 232, 255, 0.7) 0% 0% no-repeat padding-box',
            border: '5px solid rgba(29, 161, 242, 1)',
            borderRadius: '60px 0px 0px 60px',
            overflowY: 'hidden'
        },
        username: {
            position: 'absolute',
            top: '8px',
            font: '20px/26px futura-pt',
            color: 'rgba(29, 161, 242, 1)'
        },
        nickname: {
            position: 'absolute',
            top: '35px',
            width: '486px',
            font: 'Bold 30px/45px source-han-sans-japanese',
            letterSpacing: 0,
            color: '#ffffff',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        content: {
            position: 'absolute',
            top: '82px',
            paddingRight: '2px',
            paddingBottom: '2px',
            font: '20px/29px source-han-sans-japanese',
            letterSpacing: 0,
            color: '#ffffff'
        },
        icon: {
            borderRadius: '50%',
            width: '125px',
            height: '125px'
        }
    },
    race: {
        panel: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '305px',
            height: '201px',
            background: '#ABE8FFB3 0% 0% no-repeat padding-box',
            border: '5px solid #1DA1F2',
            borderRadius: '44px 0px 0px 44px'
        },
        username: {
            position: 'absolute',
            top: '13px',
            left: '102px',
            font: '20px/26px futura-pt',
            color: '#ffffff'
        },
        nickname: {
            position: 'absolute',
            top: '39px',
            left: '102px',
            width: '180px',
            font: 'Bold 30px/45px source-han-sans-japanese',
            letterSpacing: 0,
            color: '#ffffff',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        content: {
            position: 'absolute',
            top: '98px',
            left: '12px',
            height: '80px',
            paddingRight: '5px',
            overflowY: 'hidden',
            font: '18px/26px source-han-sans-japanese',
            letterSpacing: 0,
            color: '#ffffff',
            textOverflow: 'ellipsis'
        },
        icon: {
            borderRadius: '50%',
            width: '88px',
            height: '88px'
        }
    }
};

export interface TwitterNotificationTweetStyle {
    panel: object;
    username: object;
    nickname: object;
    content: object;
    icon: object;
}

export const hashtagStyles: {
    solo: TwitterNotificationHashtagStyle;
    race: TwitterNotificationHashtagStyle;
} = {
    solo: {
        panel: {
            position: 'absolute',
            paddingLeft: '148px',
            top: '0px',
            left: '0px',
            width: '647px',
            height: '127px',
            background: 'rgba(171, 232, 255, 0.7) 0% 0% no-repeat padding-box',
            border: '5px solid rgba(29, 161, 242, 1)',
            borderRadius: '60px 0px 0px 60px'
        },
        tweetOn: {
            position: 'absolute',
            top: '8px',
            font: 'lighter 30px/38px futura-pt',
            color: '#ffffff'
        },
        hashtag: {
            position: 'absolute',
            top: '35px',
            font: '62px/80px futura-pt-bold',
            letterSpacing: 0,
            color: '#ffffff'
        },
        icon: {
            width: '125px',
            height: '125px'
        }
    },
    race: {
        panel: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '305px',
            height: '201px',
            background: '#ABE8FFB3 0% 0% no-repeat padding-box',
            border: '5px solid #1DA1F2',
            borderRadius: '44px 0px 0px 44px'
        },
        tweetOn: {
            position: 'absolute',
            top: '30px',
            left: '117px',
            font: 'Bold 40px/51px futura-pt-bold',
            color: '#ffffff'
        },
        hashtag: {
            position: 'absolute',
            left: '19px',
            bottom: '30px',
            font: 'Bold 48px/61px futura-pt-bold',
            letterSpacing: 0,
            color: '#ffffff'
        },
        icon: {
            width: '88px',
            height: '88px'
        }
    }
}

export interface TwitterNotificationHashtagStyle {
    panel: object;
    tweetOn: object;
    hashtag: object;
    icon: object;
}