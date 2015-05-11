# SpellBook

Web Applet that contains spells and abilities for the popular tabletop role-playing game Dungeons & Dragons.

### Functional Reqs:
#### UI
  * User can search by name of ability/spell
  OR user can search by class and level of character.
  * User can expand details of abilities once found through searching.
  * Desktop and Mobile-friendly application.

#### Web Server
  * Depends on Stack we want to use. See [suggested stacks below](#possible-stacks)
  * Linux/Unix host _(since they are free)_
---

### Datatypes and Structures:

  ###### Spell Datatype
  1. Casting Time (String)
  2. Range "(Int) feet"
  3. Components ([VSM]{1,3})
  4. Duration (Int) + (Unit)
  5. Description (String)
  6. Spell Level (Int)
  7. Spell Name (String)
  8. Spell Class (String[])
  9. Ritual (Bool)
  10. Spell School (String)


### Milestones:
  1. Mockups of Search Page
    * Moblie Mockup
    * Desktop Mockup
  2. Correct output from database
    * Tests
      * any output
      * validity or error in text formats
      * sorting (asd and dec)
      * filtering (by Datatype field)
  3. Rendering Page in Browser
    * local webserver
    * Accessibilty
      * Browser compatibility
      * Readability
      * Searchability? :P
      * Printable?
  4. Working Search Pages
    * Tests
      * User input (i.e. text boxes, checkbox)
      * Loading efficiency
---

### Possible Stacks:

#### Fullstacks
  * Meteor.js
  * MEAN.io

##### Frontend (HTML,JS,CSS)
  * Bootstrap, Foundation, Angular, typeface.js, LiveValidation
##### Database
  * MongoDB, mySQL, postGres, sqlLite
##### Web Server(HTTP/HTTPS)
  * Node.js, Apache, Nginx
##### Host
  * CentOS, Ubuntu, RedHat, AmazonDistro
  * AWS (Amazon cloud service), self hosted
