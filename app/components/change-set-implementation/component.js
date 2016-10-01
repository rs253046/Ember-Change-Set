import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
    	save() {
    		this.attrs.save(this.get('model'));
    	},
    	 rollback(){
      this.attrs.rollback(this.get('model'));
    },
    restore(key) {
    	this.set(`model.${key}`, this.get(`model._content.${key}`));
    }
    	
    }
});
