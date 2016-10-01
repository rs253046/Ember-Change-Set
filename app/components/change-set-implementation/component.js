import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
    	save() {
    		this.attrs.save(this.get('model'));
    	},
    	 rollback(){
      this.attrs.rollback(this.get('model'));
    }
    	
    }
});
