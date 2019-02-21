#Amex Star Wars API Coding Challenge

Deployed on heroku at https://amexswapi.herokuapp.com/
GitHub repot at https://github.com/sglord/amexSWAPI

## Overview

The app is a single page application built using primarily React, Redux, Express, and Node.js. Style was done almost entirely with the Semantic UI React framework.

The main page displays four characters with names and images that can be clicked. When one is clicked, the page re-renders that specific character's page listing each of the movies they were featured in.

The original JSON file intentionally has an error for Obi Wan,which I did not change. This causes an error when his card is clicked and an error message is shown.

#UI
Semantic UI really helped make the site come off with a clean look and adapt to screen sizes.

#react
I aimed to make components as reusable as I could, leveraging the Card component from Semantic UI React.

#redux
I felt there is a great use case for redux for this project due to multiple components needing to access character information and passing props down the entire way may get convoluted.

#server
This very much could have been completed without using the server, but it offered a little more flexbility for not overcrowding some of the front end components and redux store.

#others

There is a helper function file that offers a few needed functoins to help parse some information from the url and data returned. This helper function file allowed me to remove those from being nested within awkward places while allow for the future proofing if formats change a little, just the function can be modified and not the entire file (in theory, but this was a quick project)

#thoughts on completion
The premise of the project came of very simple, but there were a lot of little catches along the way in the data and structure. It was a great view and reminder of how many little tweaks we constantly are doing for every application. I think in repeating this project it could be done with a cleaner code base, but I belive this satisfies the general rubric.

#time constraints
Due to some unforseen cicumstances I cut my time pretty short. I originally planned to add a testing suite along side the application, but it got cut in favor of completion. Also, I found that there is a wookie translation option that can be requested from the SWAPI. Unfortunately, it turns both the key and value into wookie speak. I would've liked to give language toggle as a fun featuer, but a good amount of data manipulation was needed.
