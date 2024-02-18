---
layout: default
title: Progressive Web Apps for All of Us
---
<script src="/bob-site/scripts/favicon.js"></script>
<style>
      body {
        background-color: lightblue;
      }
</style>

# Update: WebGL and then Progressive Web Applications 

*Last post said:*
"To make games more accessible I recently started using Unity WebGL to build in-browser games. For those of you that push your Roombas around that's games you can play in your browser and maybe even on your phone's internet browser. Have working prototypes that can be found here: [Game Lab](https://bobkoto.github.io/bob-site/gamelab). More to come."

## The "more to come" involves extending our Game WebGL apps into Progressive Web Apps  

PWAs (progressive web apps) framework makes apps that are playable on most web browsers : In our case on this site , 
- PWAs are WebGL games you can play in your web browser
- You can download PWA apps/games to your device - then you can play even when your device is offline - not connected to the internet
- Updates, though seldom in our case, can be done automatically usually without re-downdloading or reinstalling anything
- Google, Apple, etc. playstores are not required to distribute PWAs - and PWAs can run just as well as playstore apps

## Here's a sample Arcade "Sphere Interception" Game:

It's the first proof of concept and plays well on and offline. You can play on the web and/or follow a simple prompt to download it.

[Sphere Intercept Game](https://bobkoto.github.io/bob-site/az). 

<div style="display:flex; justify-content:center; align-items:center; width: 100%;">
    <a href="https://bobkoto.github.io/bob-site/az" style="display:flex; height:100; width:100%; justify-content:center; align-items:center" 
    title="Intercept the Spheres. Click to play..."> 
        <img src="{{ site.baseurl }}/assets/CubeTestStartPage.png" 
             style="height:50; width:50%; justify-content:center; align-items:center" 
             alt="A sphere intercept arcade game"> 
    </a>
</div>
<br><br>
**Android users:** When installing a progressive web app to your mobile device Google may "offer" to scan or examine the PWA app. Is this Google really just being nice and helpful - or is Google snooping or otherwise trying to collect our info, data, whatever? This site, content and the games have nothing to do with Google. The browser in use when Google "offered" to scan the PWA being downloaded was not Google's (Chrome) browser. Accept or decline Google's "offer" at your own discretion.  All that said, unless specifically stated up front this site will never include apps that require any unnecessary permissions, collect your data/info, contain ads, etc. And open source code for all games, and for this site, are public on GitHub.

**IOS/Apple users:** This site's PWAs are not yet tested on **IOS** web browser(s). You're certainly free to try.

More PWAs are on their way...

*Please enjoy, and limit your play time. Take more walks.*