# Generic Empty ReadMe File
---

Web Applet that contains spells and abilities for the popular tabletop role-playing game Dungeons & Dragons.

**Functional Reqs:**

  User can search by name of ability/spell
  OR user can search by class and level of character.

  User can expand details of abilities once found through searching.

  Desktop and Mobile-friendly application.

**Variable Fields:**

  Spell Datatype

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

**Milstones**
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
