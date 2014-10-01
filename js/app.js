var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource('education');
  this.resource('projects');
});

App.NavView = Ember.View.extend({
    tagName: 'li',
    classNameBindings: ['active'],

    active: function() {
      return this.get('childViews').anyBy('active');
    }.property('childViews.@each.active')
});
