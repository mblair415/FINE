## A dumpster fire of an angular app
It's ugly (my fault not the design team's fault), it doesn't work well and it's a fraction of what I hoped to complete, but at least it took a lot of time.  It was an impactful learning experience for certain.

A link to this almost entirely non functional application on heroku:
https://dashboard.heroku.com/apps/busted-angular

### Design Team
###Iva Kim
-linkedin link will go here when it's provided by UX-
![alt tag](http://i.imgur.com/nEuadWq.png)
* The page wouldn't navigate from soup kitchen to food services at this phase of the project because so few organizations will be regularly both requesting and providing foods.  Largely an organization would be one or the other, though, it may be the case where kitchens would be able to provide food to one another instead of keeping the food for future meals.  Not sure what the impact of this feature would net in usability.
* The community page is a profile pages area (I think) that there wasn't time to implement with the project duration.
* The our mission page isn't anything we had mocked up or considered as a group, but I do like the idea.
* Overlapping the title over the image looks great, but that's the kind of CSS tinkering I couldn't begin with until after all functionality was complete.
* No art assets were transferred so I was unable to match the images.
* It looks like default fonts were used in the images and we're supposed to be exploring fonts when we can.
* The pick up and drop off area with the interface for the three food types looks good.  But, I think the pick up radio button should show an area for pick up times once clicked.  Drop off should do something similar, but it should also allow the organization to determine a distance radius that they're willing to travel to drop something off.
![alt tag](http://i.imgur.com/OsKF652.png)
![alt tag](http://i.imgur.com/jWcuZbI.png)


###Martín Vercellino
-linkedin link will go here when it's provided by UX-
![alt tag](http://i.imgur.com/hCVgXpd.png)
* I like the idea of the
Martin also suggested using a pie chart to visually represent the data from the kitchens and the donators.  To do this I need to use a pie chart to display 6 states of information for a kitchen wasn't something I had time for with the brief project duration.  My plan was to break the pie into 3rds for each food type (protein, starch, veggie), then break each of those 33.33% of a circle portions into sections to show how much of the requested material has been provided (a requested state and a percentage of request met state).  In this manor all that was requested would be 100% of 33.33% (the third of the chart that represents that requested item), so if someone requested 30 lbs of protein and had received 15 lbs the protein portion of their pie chart would be 50% full or 15.165% of the full pie chart.  The pie chart I was going to try to work with:http://canvasjs.com/editor/?id=http://canvasjs.com/example/gallery/pie/new-year-resolution/


### Next steps
* Create a fully crudable back end with profile pages for each organization.  Any organization viewing their own will be able to edit it (that will require login)
- each restaurant should be able to save specific types as frequent donation items. For example a bakery may often have dinner rolls to donate and may very rarely have croissants.  The bakery would be able to place dinner rolls on a list of frequently donated items that will auto populate when they login.
- the data card that populates on the map will link to the profile page for that organization.  
* Login to replace the landing page
* Something to make it less hideous.  Maybe a voodoo sacrifice.
* The map page should organize hits in order of distance and it should be possible to also see which organizations need or have the most of what someone has to offer.
* With a whole lot more time I may be able to get images to appear on the informational cards on the map.  Early testing produced full sized images (which didn't fit within the limits of the card) and the nature of having to insert the HTML into the JavaScript makes this a cumbersome process that is very time consuming to iterate on.
* An about page with information on major organizations in the area that collect for those who are less fortunate and a variety of ways for people to give back to the community in the most effective ways possible including places that accept donations and can stretch each dollar with bulk purchases and organizations that are looking for volunteers.  This area can also spotlight one active organization at random, or if the user has interacted with the map and their location is known we can display an active organization specifically in their region.
* A faq with real information about the food insecure and a number of common myths presented and corrected.
