# UberApp Clone
A Clone of Uber - Ride Hailing Service App

## Overview
This project was implemented as a code-along training ops I did with Sonny Sangha's video on YouTube. It was an awesome 3.75 hours video clip titled [Let's build Uber 2.0 with REACT NATIVE!] (https://www.youtube.com/watch?v=bvn_HYpix6s). The entire moment was wondeful and funfilled. Thank you Sonny. God bless you soul mhen. You are a great guy.

The project was built on the React-Native library and ofcourse targeted for use in Mobile devices. There is also some incorporation of Tailwind-CSS and HTML. The project provided firm graps on ***React-Native, React-Navigation, Redux, Hooks (UseState, UseEffect and UseContext modules of React)***. I also had my first intro to ***Google map API (places, distances, & markers)***.

## How it Works
1.	You download the repo as a zip file by using the Github clone utility or make a desktop clone via  git.
2.	Dependencies required to execute the app can be made available by either typing ***npm install*** or ***yarn add*** at your preferred code editor terminal. *Please ensure this is done at the route directory of the clone folder or extracted zip files. The correct version of the dependencies on which the app code is based will be downloaded.*
3.	To execute the app, just type **expo start** or ***npm start*** or ***yarn start*** at the code editor terminal.
4.	Follow the prompt on the screen to run the app on an emulator (for virtual android device) or simulator (for IOS device) or use physical device. The metro builder is quite explanatory on what to do.
5.	Once the app launch on your devices (physical or virtual), the screen below is the default screen that is presented.
6.	You type in your current location in the input box with *“Where from”* placeholder text – a town or city name anywhere in the world will do but *make sure you select one of the options of nearest public address presented or type in your street, road and town/city yourself.*
7.	Next, click Get Ride or order food – (note food button not connected yet. So just choose Get Ride). The app route to the destination screen with a marker on a map indicating the nearest location you selected. 

8.	Type in your destination, *make sure you select a location nearest to your intended destination.*
9.	The map will be updated with the travel route in black color from take-off point to your destination. The map will zoom out to accomodate both tae-off and destination markers within map screen. The estimated cost of the ride in Naira is provided below the map – obviously the estimated cost is in my dream (too cheap to be true in Nigeria).
10.	The next thing to do is choose a ride between three options (Uber X, Uber XL, and Uber LUX). Once you made your choice, the last button on the screen is activated for selection.
11.	From here the app should direct you to the payment screen (To be added).
