import Babble from '../lib/babble'

export default Ember.Controller.extend({
  fullpage: true,
  application: Ember.inject.controller(),

  typeClass: function() {
    if (this.get('fullpage')) {
      return 'fullpage'
    }
  }.property()

})
