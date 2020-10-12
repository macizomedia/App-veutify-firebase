import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
    iconfont: 'mdi',
    theme: {
      primary: '#9652ff',
      success: '#3cd1c2',
      info: '#ffaa2c',
      error: '#f83e70',
      completes: '#3cd1c2',
      ongoings: '#ffaa2c',
      overdues: '#f83e70',
  
    },
  })
export default new Vuetify({
});
