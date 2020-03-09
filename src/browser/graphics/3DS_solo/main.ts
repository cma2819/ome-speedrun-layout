/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import SoloGameView from '../views/SoloGameView.vue';

new Vue({
    store,
    vuetify,
    el: '#app',
    render: (h) => h(SoloGameView, {
        props: {
            clipPaths: [
                {
                  x: 30,
                  y: 244,
                  width: 780,
                  height: 468
                },
                {
                  x: 810,
                  y: 712,
                  width: 451,
                  height: 338
                }
            ]
        }
    })
});
