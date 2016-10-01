import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		onSave(model) {

			model.save().then(()=>{
				this.transitionToRoute('about');
			});
		},
		rollback(model) {
         
			model.rollback();
			
		}
	}
});
