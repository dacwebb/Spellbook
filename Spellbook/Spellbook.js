Spells = new Mongo.Collection("spells");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    spells: function () {
      return Spells.find({}, {sort: {createdAt: -1}});
    }
  });

  //Form for adding items (spells)
  // Inside the if (Meteor.isClient) block, right after Template.body.helpers:
  Template.body.events({
    "submit .new-spells": function (event) {
      // This function is called when the new spell form is submitted

      var text = event.target.text.value;

      Spells.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
  });

  Template.spell.events({
    "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
      Spells.update(this._id, {$set: {checked: ! this.checked}});
    },
    "click .delete": function () {
      Spells.remove(this._id);
    }
  });

  /*
  // counter starts at 0
  Session.setDefault('counter', 0);
  Template.body.helpers({
    spells: function () {
      return Spells.find({});
    }
  });
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  */
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
