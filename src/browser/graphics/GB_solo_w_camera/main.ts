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
                  y: 363,
                  width: 764,
                  height: 688
                },
                {
                  x: 810,
                  y: 711,
                  width: 452,
                  height: 339
                }
            ]
        }
    })
});
