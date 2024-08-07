---
layout: page
title: "Illusion Pinball"
---
<script src="./scripts/favicon.js"></script>
{% include custom-head.html %} 
This Android based 3D pinball game is easy to play and relaxing. Maybe I should have called it Chillusion. &#128512; 


 Auditory (best with earphones) and optical illusions add some fun, and a trance-like relaxation.

[Back to screen shots](https://bobkoto.github.io/bob-site/image02)

On ball in play 2, the game surface looks like this:

![Ball2 image](assets/IllusionPinball2.jpg){: width="75%" height="75%"} <br>
"Ball 2 playing surface and yes there is an illusion..."

On ball in play 3, the game surface looks like this:

![Ball3 image](assets/IllusionPinball3.jpg){: width="75%" height="75%"} <br>
"Ball 3 playing surface and yes there is more obviously an illusion..." And did that guy just turn into a basket of fruit?

# Video of ball 1 being shot into play:
<video width="640" height="360" controls>
  <source src="{{ site.baseurl }}/assets/Pinball1.mp4"  type="video/mp4">
  
  Your browser does not support the video.
</video>
Ok, give me more! And we will... 


[Back to screen shots](https://bobkoto.github.io/bob-site/image02)


# Tech Notes: 
3D pinball game for Android created in Unity and C#.

Uses physics and is scaled to the size and slope real pinball machine playing surface, including pinball size and mass, as best as my non-physics mind could do.

I play tested this on a mid-range Android phones- Galaxy J7 - and phones as old as Galaxy S4,
often playing for an hour or more with little drain on the battery. Sometimes, after an hour or so the mobiles 
got "flaky" and sent the ball out of play. (Physics system? device? not sure)

Probably easy to fix - but I moved on as I wouldn't expect nor encourage anyone to play that long. 

As code goes (early in my Unity/C# journey) it could be way better and neater. 

Find this project at [Pinball project](https://github.com/bobkoto/touchinput1/) aka touchinput1