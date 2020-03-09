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
                  x: 162,
                  y: 226,
                  width: 786,
                  height: 590
                },
                {
                  x: 968,
                  y: 226,
                  width: 786,
                  height: 590
                }
            ]
        }
    })
});
