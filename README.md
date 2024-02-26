# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs
The PhotoLabs website shows the photos provided by the back end (postgres db) for users to review.  Users can filter the photos by topic from the top navigation bar.  Selecting the PhotoLabs badge in the top left will again show all photos.

Users can like each photo individually by clicking on the heart icon in the top left of the photo.  They may do this in any view of a picture and it will be reflected where ever the photo is shown.  Additionally, if any photo has been liked, the like badge in the top right will show a notofication on it.

Users may click on any image to get the full picture and a list of similar photos.  This is closed with the X in the top left of the modal window.

BOTH the frontend and the backend must be running.

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Dependencies
- @testing-library/jest-dom: ^5.16.5
- @testing-library/react: ^13.4.0
- @testing-library/user-event: ^13.5.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-scripts: 5.0.1
- web-vitals: ^2.1
- sass: ^1.59

## Screenshots

[PhotoLabs Start Page] (https://github.com/MikeDragert/photolabs/blob/main/documentation/PhotoLabs%20-%20Start.png?raw=true)
[PhotoLabs Nature Selected] (https://github.com/MikeDragert/photolabs/blob/main/documentation/PhotoLabs%20-%20nature.png)
[PhotoLabs Liked] (https://github.com/MikeDragert/photolabs/blob/main/documentation/PhotoLabs%20-%20some%20liked.png)
[PhotoLabs Photo Details] (https://github.com/MikeDragert/photolabs/blob/main/documentation/PhotoLabs%20-%20Photo%20detail.png)
[PhotoLabs Photo Details Similar photos] (https://github.com/MikeDragert/photolabs/blob/main/documentation/PhotoLabs%20-%20Photo%20detail%20Similar.png)
