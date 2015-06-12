Spells = new Mongo.Collection("spells");

if (Meteor.isClient) {
  // This code only runs on the client
  //Spells.insert(JSON.parse(Assets.getText('default.json')));


  Template.body.helpers({
    spells: function () {
      return Spells.find({}, {sort: {createdAt: -1}});
    },
    search_by_name: function() {
      return Spells.find({name: { $regex: '^'+Session.get('search_text')+".*", $options: "i"}}, {sort: {name: 1}});
    }
  });

  //Form for adding items (spells)
  // Inside the if (Meteor.isClient) block, right after Template.body.helpers:
  Template.body.events({
    /*
    $('#submitb').click(function(){
      $('new-spells').each(function(){
        $(this).submit();
      });
    });
    */
    "submit .new-spells": function (event) {
      // This function is called when the new spell form is submitted
      var spell = {
        name: event.target.name.value,
        level: event.target.level.value,
        school: event.target.school.value
      };
      Spells.insert({
          name: spell.name, 
          level: spell.level, 
          school: spell.school
      });
      console.log(spell);

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    },
    "submit .search_by_name":function(event) {


      Session.set('search_text', event.target.text.value);

      // Clear form
      // event.target.text.value = "";

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
