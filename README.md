Overview
============
Fest-pack is designed to help make packing and getting ready for a music festival (or any trip) easier. 

Link to Heroku deployment: [Here!](https://fest-pack.herokuapp.com/)



Technologies
==============
- HTML5, CSS3, Javascript, jQuery
- MongoDB
- Express
- React.js
- Node.js
- Design: 
-- [Bulma](https://bulma.io/documentation/overview/start/)
-- Styled Components
-- React Pose
- [Trello](https://trello.com/b/Q3MEpUni/project-3) for planing and stories


Features
===========
* CRUD
    * Create - able to create a new user from homepage, create new lists from that user's show page and able to create new list items from the individual list show page.
    * Read - Index list of all users is the homepage. There is an individual show page for each user that shows all of that user's lists. The view of a single list shows all items on that list.
    * Update and Delete - From the single list component, the user is able to select three views. Planing has a form for adding new items, button for adding an item to a shopping list, and each item is clickable to edit the item name or quantity. The shopping view shows all items that still need to be purchased, allowing the user to mark off items as they are bought. The packing view is used when actually packing for the event, each item is clickable to mark through, showing that item is packed and ready. There is a delete button available on all views that will remove the item from the list and the database. 




Wireframe
=============
![Inital Whiteboard](/client/public/photos/IMG_1000.HEIC)

Inital landing page showing an index of all users.

![Inital Whiteboard](client/public/photos/IMG_9064.HEIC)

The following page is an index of all lists for that user

![Inital Whiteboard](client/public/photos/IMG_9822.HEIC)

The final page is a view for an individual list, which shows all items on the list along with different views for editing, shopping, and packing.

Future Devlopment
============
* User authenication 
* Pre-filled lists to serve as starting places for different types of events
* Collabrative/Group lists