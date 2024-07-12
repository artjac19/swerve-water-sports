<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = "https://embed.acuityscheduling.com/embed/button/11402006.js";
  script.async = true;
  document.body.appendChild(script);
});

</script>

<template>
  <div class="vert-container" style="margin-top: 12.5vh;">
    <img id="1" src="../assets/banner.jpg" style="width: 100%; margin-top: 0; padding-top: 0;">
    <p style="text-align: center !important; margin-top: 4vh;">Call or email now to let our pros teach you how to ski or wakeboard!<br>
      We offer a variety of economical packages perfect for individuals and large groups.<br>
      Our proshop sells a variety of waterski equipment be sure to check it out!<br>
      Hang out at the lake on a hot day!<br>
      Play a round of disc golf!<br><br></p>
    <div class="photos">
      <img class="photo" src="../assets/david1ball.png" style="width: 60vh; height: 45vh;">
      <img class="photo" src="../assets/collegevolleyball.jpg" style="width: 60vh; height: 45vh;">
      <img class="photo" src="../assets/swerveshirts.jpg" style="width: 60vh; height: 45vh;">
    </div>
    <div class="photos">
      <iframe width="560" height="315" style="margin-right: 5vh; border-radius: 1vh;"
        src="https://www.youtube.com/embed/WbCv3Hfaquk" frameborder="0" allowfullscreen></iframe>
      <iframe width="560" height="315" style="border-radius: 1vh;" src="https://www.youtube.com/embed/4HUNnQ2dQes"
        frameborder="0" allowfullscreen></iframe>
    </div>

    <h2 style="margin-top: 10vh; margin-bottom: 2vh;" id="2">Schedule a Visit</h2>
    <p style="text-align: center;">
      You can schedule a visit by text, phone, email, or right here on the line. <br>
      Contact info is at the bottom of the page or the scheduling tool is just below.<br>
      You can see more information on some of our packages, events and a calander below.<br>
      You can pay here through paypal or in person with cash check or cc.<br>
      If it's your first time out this season, make sure to sign the <a href='https://form.jotform.com/220764194303048' target="_blank">Swerve Watersports Waiver</a>.
    </p>
  <a href="https://app.acuityscheduling.com/schedule.php?owner=11402006" target="_blank" class="acuity-embed-button" style="margin-bottom: 3vh; font-family: 'Montserrat', serif; color: #fff; padding: 8px 12px; border: 0px; border-radius: 4px; text-decoration: none; display: inline-block;">Schedule Appointment</a><link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/11402006.css" id="acuity-button-styles" />
  <table class="table">
   <tr><th><p>Type</p></th><th><p>Price</p></th><th><p>Description</p></th></tr>
   <tr><td><p>Ski Lesson</p></td><td><p>$50</p></td><td><p>Learn how to get up or master a new trick with our expert coaches in a one on one 30 minute session guaranteed you walk away with some additional knowledge.</p></td></tr>
   <tr><td><p>1 Day Lessons</p></td><td><p>$140</p></td><td><p>Three (3) coached sets in one day</p></td></tr>
   <tr><td><p>Multi-Ride Pass (10)</p></td><td><p>$400</p></td><td><p>Ten ski rides that can be used at any time.</p></td></tr>
   <tr><td><p>Reserve the Lake for an hour</p></td><td><p>$140/hr</p></td><td><p>You reserve an hour slot with a driver and coach. In general you can get 4 long sets in during the hour, more people equals shorter sets.</p></td></tr>
   <tr><td><p>Reserve the Lake for a Day</p></td><td><p>$720</p></td><td><p>10:00am - 4:00pm with driver and coach provided. Lunch can be provided for $10/meal.</p></td></tr>
   <tr><td><p>Collegiate Pass</p></td><td><p>$140/day</p></td><td><p>Includes three (3) coached sets. Lodging, food and discounts for large groups and teams.</p></td></tr>
   <tr><td><p>Event Practice</p></td><td><p>$15</p></td><td><p>Fridays before tournaments for event participants, practice is discounted!</p></td></tr>
   <tr><td><p>Season Pass</p></td><td><p>$2,450</p></td><td><p>Unlimited Season Pass for one person. Free skiing for an entire season!</p></td></tr>
  </table>
  <h2>Large Groups</h2>
  <p style="text-align: center;">Do you have a large group and want to reserve the lake for a certain number of rides or hours?  We can make that happen from birthday parties to corporate events we can show your group a good time, build comradery, and teach a fun sport!  We have food and lodging available if needed and can provide fun activities off the water as well!  Call with any questions and we can tell you more about our packages. Reserving the lake for an hour is $140 and includes a 2 person crew to help with all your needs.  With this option you can try and fit as many people into the hour as possible or take just a few long sets.  We recommend no more than 5 skiers try to ski in an hour.If you have a big group of skiers, we can offer quantity discounts.</p>
  <iframe src="https://calendar.google.com/calendar/embed?src=slalombum%40gmail.com&ctz=America%2FChicago" style="border: 0; margin-top: 3vh; margin-bottom: 5vh;" width="1000vw" height="600vh" align-self="center" frameborder="0" scrolling="no"></iframe>
  <h2 id="3">Lake and Area</h2>
  <p>&#8195; &#8195;Swerve Watersports Center is on Lake Grace in Hillsboro Tennessee. It is a custom built water ski lake dug in 2004 by Nicky Lowe. Surrounded on one side by woods, grass trail and marsh, the other by some nice houses, the sight is beautiful. The lake was designed specifically for 3-event water skiing with a shallow depth, slopes to eliminate rollers, and the perfect shape. Located in Hillsboro TN, it is close to civilization but far out enough to feel like the country. Only 2 minutes from I-24 which runs directly between Nashville and Chattanooga, there is never a shortage of entertainment or sightseeing within an hour's drive. With restaurants and big name stores less than 5 minutes away, anything you might need is also close at hand.
    At our site you should expect to find a relaxed and friendly environment with great skiers and coaches. Come ski with us!</p>
  <div class="photos">
    <div class="vert-container">
      <h2>Ammenities</h2>
      <ul>
        <li>Club House with bunkbeds, kitchen, and showers</li>
        <li>Pool and Ping Pong Tables</li>
        <li>Volleyball Court</li>
        <li>Hot Tub</li>
        <li>Camping Area</li>
        <li>Fire Pits</li>
        <li>Plenty of Parking</li>
        <li>Free WiFi</li>
        <li>Camper parking available</li>
        <li>Fishing</li>
        <li>Tent Camping</li>
      </ul>
    </div>
    <div class="vert-container">
      <img class="photo" alt="Swerve Watersports Center Boat View" style="margin-top: 5vh" width="480" height="300" src="../assets/jacuzzi.jpg" />
      <img class="photo" alt="Swerve Watersports Center Hillsboro" width="480" height="300" src="../assets/sunset.jpg" />
    </div>
  </div>
  
  <h3>Things to Do</h3>
<p>
    <b>In Manchester</b><br>
   
<a href="http://www.jackdaniels.com/">Jack Daniels Distillery</a><br>
<a href="http://tnstateparks.com/parks/about/rock-island">Rock Island State Park</a><br>
<a href="http://www.bonnaroo.com/">Bonaroo Music Festival</a><br>
<a href="http://www.cumberlandcaverns.com/">Cumberland Caverns</a><br>
<a href="http://www.beanscreekwinery.com/">Beans Creek Winery</a><br>


<a href="https://skyaboveus.com/water-sports/10-Great-Kayaking-Launch-Areas-in-Middle-Tennessee">Middle TN river floats</a><br>
<br>
<b>Golf Courses</b><br> 
<a href="https://www.golfwillowbrook.net/">Willowbrook golf course</a><br>
The nicest course in the area<br>

<a href="http://scenicview.x10.mx/">Scenic View golf course</a><br>
A cheaper more laid back course closer to swerve<br>
<br>
<b>Climbing</b><br>
<a href="https://www.mountainproject.com/area/105883248/foster-falls">Foster Falls</a>- also the location of an awesome waterfall listed below<br>
<a href="https://www.mountainproject.com/area/112533882/denny-cove">Denny Cove</a>
<a href="https://www.mountainproject.com/area/108613875/castle-rock">Castle Rock</a>
<a href="https://www.mountainproject.com/area/106031921/stone-fort-aka-little-rock-city">Stone Fort/ Little Rock City</a>
<a href="https://www.mountainproject.com/area/105851828/the-tennessee-wall">The Tennessee Wall</a>
<br>

<br>
<b>Fred Deadman Park</b><br>
166 Wilson St, Manchester, TN 37355<br>
Tennis Courts, paved walking path, Baseball fields, Skatepark, in downtown Manchester right next to the rec center.<br>
<br>
<b>Manchester Rec Center</b><br>
557 N Woodland St, Manchester, TN 37355<br>
Has a pool, racquetball, indoor track, basketball, weights and exercise equipment, exercise classes.<br>
<br>
<b>Tubing the River</b><br>

Put-in:<br>
A three hour or so tube down the river.  Depending on rain it takes longer or shorter and you need to walk some parts if there isn't much flow.<br>
<!--------------MAP----------------------->
<br>

<a href="http://www.floattn.com/floatin_trips.pdf">Other Float Options on the 3 Forks</a><br>
<br>
<b>Local Waterfalls</b>
<br>
Foster Falls-<br>
498 Foster Falls Rd, Sequatchie, TN 37374<br>
40 minutes away, Excellent climbing, hiking and a great waterfall and pool with a climbing route under the falls!<br>
<br>
<b>Fall Creek Falls</b><br>
2009 Village Camp Road
Spencer, TN 38585<br>
The tallest falls in Tennessee at 256 feet, about an hour away, there are multiple falls and pools.<br>

<a href="http://www.scenicusa.net/092512.html">Greeter Falls</a><br>
Greeter Trail Altamont, TN<br>
<br>
<a href="http://www.rubyfalls.com/">Ruby Falls</a><br>
<br>
<b>Hiking</b>
<br>
Foster Falls Fiery Gizzary trail 12.5mi<br>
Follow the Fiery Gizzard trail from Foster Falls, 498 Foster Falls rd to 131 Fiery Gizzard Rd, Tracy City, TN 37387.<br>
Walk above foster falls along an incredible ridgeline and across lots of bridges.
<br>
<a href="https://www.alltrails.com/trail/us/tennessee/buggytop-trail-to-lost-cove-cave">Buggy Top Trail to Lost Cove Cave 3.7mi</a><br>
Trail takes you through 3.7 miles of great woods to a Cave and creek<br>
A little tricky to follow the path at times, bring flashlights for the cave!<br>
<br>
<b>Longboard Hills (Not reccomending you try to do this!)</b><br>
Hwy 56 Beersheba springs TN<br>
Clouse Hill rd. and Payne Cove rd. Pelham TN<br>
<br>

<b>In Nashville</b> <br>
<a href="http://www.visitmusiccity.com/">City of Nashville</a><br>
Edleys BBQ <br>
Praters BBQ in Manchester<br>
12th st, lots of small shops and food<br>
Broadway, live music and drinks <br>
Nashville Predators, best hockey in the south, on broadway downtown nashville. <br>
Tennessee Titans <br>
Nashville Zoo <br>
Top Golf <br>
<br>

<b>In Chattanooga</b><br>
<a href="http://www.chattanoogafun.com/">City of Chattanooga</a><br>
<a href="http://www.tnaqua.org/Home.aspx">TN Aquarium</a><br>
<br>
</p>
  <div class="photos" style="margin-top: 5vh;">
    <img class="photo" alt="Waterski Jucuzzi SWC" width="420" height="280" src="../assets/boatview.jpg" />
    <img class="photo" alt="Swerve Watersports Center Boat View" width="390" height="auto" style="margin-top: 5vh;" src="../assets/laurenmoneyshot.png" />
  </div>
  <div class="photos">
    <img class="photo" alt="SWC" width="420" height="280" src="../assets/lake.jpg" />
    <img class="photo" alt="Swerve" width="420" height="280" src="../assets/lake3.jpg" />
    <img class="photo" alt="Waterski Jucuzzi SWC" width="420" height="280" src="../assets/lake2.jpg" />
  </div>
  </div>

</template>