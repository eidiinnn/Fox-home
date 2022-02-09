# Home Page :fox_face:
A homepage for browsers made in ReactJS.  

<img src="https://i.imgur.com/Flqtnjw.png" style="max-width: 100%;" >

[Link to see the project on GitHub pages](https://eidiinnn.github.io/Home-page/)

## Commands :computer:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

#### `npm run deploy`
Publish the homepage on github pages

## How to customize and use
#### Change the bookmark :bookmark:
In `src/settings.js` has an array called `bookmarkLinks`, put the link of the website and the icons from react-icons.
You can see the icons from react-icons [here](https://react-icons.github.io/react-icons/icons?name=fa).

#### Change the image 	:city_sunset:
In `src/images` put the image and name for `image.jpg`.

#### Change to AM and PM time format :clock130:
in `src/settings.js` have a const named `AmPmFormat`, change from false to true.

#### Change the background color :purple_circle:
In `src/settings.js` have a const named `backgroundColor`. just change the hex code.
#### How to use it in my browser  	:earth_americas:
Use the command `npm run build`. this will create a file named `build` in the root. after the complete the build, makes your browser use the index file inside the build folder with a homepage.

If you make a fork, the other option is to run `npm run deploy` and use the GitHub Page URL with the homepage.
