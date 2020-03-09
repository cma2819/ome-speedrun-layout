/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import RaceGameView from '../views/RaceGameView.vue';

new Vue({
    store,
    vuetify,
    el: '#app',
    render: (h) => h(RaceGameView, {
        props: {
            clipPaths: [
                {
                  x: 30,
                  y: 230,
                  width: 920,
                  height: 518
                },
                {
                  x: 966,
                  y: 230,
                  width: 920,
                  height: 518
                }
            ]
        }
    })
});
