export const styles: {
    solo: RunLabelStyle;
    race: RunLabelStyle;
} = {
    solo: {
        panel: {
            position: 'fixed',
            top: '67px',
            right: '34px',
            width: '100%',
            textAlign: 'right'
        },
        game: {
            height: '75px',
            font: '600 60px/60px vdl-v7marugothic',
        },
        sub: {
            height: '49px',
            marginTop: '2px',
            font: '40px/40px vdl-v7marugothic',
        }
    },
    race: {
        panel: {},
        game: {},
        sub: {}
    }
}

export interface RunLabelStyle {
    panel: object;
    game: object;
    sub: object;
}