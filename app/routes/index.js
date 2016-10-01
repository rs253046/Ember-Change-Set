import Ember from 'ember';
import ChangeSet from 'ember-changeset';

export default Ember.Route.extend({
	model () {
		return this.store.findRecord('test', 1);
	},
	setupController(controller, model) {
       controller.set('changeset', new ChangeSet(model));
	},
	actions:{ 
		willTransition(transition) {
			if(this.get('controller.changeset.isDirty')) {
				if(!confirm('are you sure')){
					transition.abort();
				}
			}
		}
	}
});
