<script setup>
import PayPalForm from './PayPalForm.vue';

</script>

<template>
<div class="vert-container">
<h2 style="margin-top: calc(100px + 3vh); margin-bottom: 0vh;">Kids Camp </h2>
<p style="margin-top: 2.5vh; margin-bottom: 7vh;">&#8195; &#8195;We strive to get kids interested in and enjoying watersports at all ages.  Our kids camp provides a great environment for kids to be themselves and enjoy boating and skiing with other kids their ages. We strive to provide a fun setting for learning and developing social skills while becoming well rounded humans on and off the lake! </p>
<div class="photos">
  <img class="photo" alt="Swerve Watersports Center Kids Camp" width="420px" height="280px" src="../assets/ashleywithkid.jpg" /> <!--pic/index/26.jpg  pic/index/24.jpg pic/index/27.jpg-->
  <img class="photo" alt="Swerve Watersports Center Hillsboro Tennessee Kids Camp" width="420px" height="280px" src="../assets/twokids.jpg" />
  <img class="photo" alt="SWC Kids Camp" width="420px" height="280px" src="../assets/kidbackwrap.jpg" />
</div>  
  <div class="photos">
    <div style="display: flex; flex-direction: column;">
      <h2>2024 Dates</h2>
      <p class="dates" style="margin-right: 3vw; margin-left: 3vw;">&#8195; &#8195; Kids camp will be offered June 17th-21st, July 8th-12th, July 15th-19th, and July 22th-26th. Kids of all ages and skill levels are welcomed from never having been on the water to competitive athletes learning the next trick or skill. Kids will be able to learn the basics on how to get up on 2 skis, slalom skis, wakeboards, and kneeboards. If you already have a knowledgable athlete our coachs can help them develop advanced techniques or help them learn their next trick!  We will teach a variety of basic skills and boat knowledge to ensure kids learn safe practices and become more knowledgeable around lakes, boats, and water. Kids from 9-16 are welcome although the age range can be flexible.</p>
    </div>
    <img class="photo" alt="SWC Kids Camp" width="420" height="280" src="../assets/kidtwoski.jpg" style="margin-top: 10vh; margin-left: 0vh; margin-right: 4vw;" img/>
</div>
<h2>Pricing and Logistics</h2>
<p>
    &#8195; &#8195;Kids should bring sunscreen, swimsuits, towel, snacks, hat, sunshirt, watershoes, waterbottle, and a change of clothes. The cost is $120/day for day campers and $160/day for overnighters. Kids can attend for the full week or just a couple days. Deposit for one day or $120 to reserve a spot, maximum of 10 students per week to ensure enough water time and focus for everyone.  Payments can be made here through the website or venmo or paypal whatever is easiest. Kids can attend over night and stay with our chaperones at the "clubhouse" or can be dropped off and picked up every day. Check in is at 9am and check out is 4pm. All kids must sign the <a href='https://form.jotform.com/220764194303048' target="_blank">Swerve Watersports Waiver</a>.
</p>
<h2>Schedule</h2>
<div style="align-items: center; align-content: center;">
<table>
  <tr><td>8:30 AM</td><td>Breakfast</td></tr>
  <tr><td>9:30 AM</td><td>Morning warmups</td></tr>
  <tr><td>10 AM</td><td>First ski sets</td></tr>
  <tr><td>11:30 AM</td><td>Lunch</td></tr>
  <tr><td>12 PM</td><td> Second ski sets</td></tr>
  <tr><td>2 PM</td><td> Afternoon game</td></tr>
  <tr><td>2:30 PM</td><td>Third ski sets</td></tr>
  <tr><td>4 PM</td><td>Checkout and after skiing activities</td></tr>
  <tr><td>6 PM</td><td>Dinner</td></tr>
</table>
</div>
<h2>Reserve Kids Camp</h2>
<div class="photos" style="margin-top: 2vh;">  
    <PayPalForm class="photo"
      buttonId="2PLA39WVMXTAN"
      label="Kids Camp"
      description="Kids Camp"
      :options="[
        { value: 'Day Camp 10-4 per day', label: 'Day Camp 10-4 per day $120.00 USD' },
        { value: 'Overnight Camp per day', label: 'Overnight Camp per day $160.00 USD' }
      ]" 
    />
    <PayPalForm
      class="photo"
      :options="[
        { value: 'Lesson', label: 'Lesson $50.00 USD' },
        { value: 'Ten Pack', label: 'Ten Pack $400.00 USD' },
        { value: '1 Day Lessons', label: '1 Day Lessons $140.00 USD' },
        { value: 'Collegiate Day Stay', label: 'Collegiate Day Stay $140.00 USD' },
        { value: 'Event Practice 4 passes', label: 'Event Practice 4 passes $15.00 USD' },
        { value: 'Season Pass', label: 'Season Pass $2,450.00 USD' }
      ]" 
    />
</div>
</div>
</template>

<style scoped>

.vert-container {
  margin-top: 0;
}

</style>