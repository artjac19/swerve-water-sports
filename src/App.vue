<script setup>
import { ref } from 'vue'
import HomePage from './components/HomePage.vue'
import KidsCamp from './components/KidsCamp.vue'
import Contact from './components/ContactUs.vue';


let tab = ref('Home')
let number = ref(1)
const switchTabs = (id, num) => {
  tab.value = id;
  number.value = num;
  const element = document.getElementById(number.value);
  const offsetVH = 15;
  const offsetPixels = window.innerHeight * (offsetVH / 100);
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offsetPixels;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

const checkTabs = (myId) => {
  return myId == tab.value;
}

</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet"> 
  <div class="menu-container">
    <button class="logo" @click="reload"><img src="./assets/swerve-01.png" object-fit="cover" flood="#ff0000" width="70vh" height="70vh"/></button>
    <button class="tab-item" @click="switchTabs('Home', 1)">Home</button>
    <button class="tab-item" @click="switchTabs('Home', 2)">Schedule a Visit</button>
    <button class="tab-item" @click="switchTabs('Home', 3)">Lake and Area</button>
    <button class="tab-item" @click="switchTabs('Home', 4)">Our Team</button>
    <button class="tab-item" style="border-left: .4vh solid rgb(72,255, 0); padding-left: 3.4vh;" @click="switchTabs('Proshop', 0)">Proshop</button>
    <button class="tab-item" @click="switchTabs('Kids', 0)">Kids Camp</button>
    <button class="tab-item" @click="switchTabs('Disc', 0)">Disc Golf</button>
  </div>
  <HomePage v-if="checkTabs('Home')"></HomePage>
  <KidsCamp v-if="checkTabs('Kids')"></KidsCamp>
  <Contact/>
</template>

<style>

body {
  margin: 0;
  padding: 0;
  background-color: rgb(20, 20, 20);
}

p {
  font-family: 'Montserrat', serif;
  font-size: 1.2em;
  border: none;
  color: white;
  background-color: transparent;
  position: relative;
  text-align: left;
  font-weight: 0;
  box-sizing: border-box;
  max-width: calc(100vw - 200px);
  line-height: 2;
  overflow-wrap: break-word;
  flex: 1;
  margin-top: 0vh;
  letter-spacing: .016em;
}

.logo {
  border: none;
  position: relative;
  background-color: transparent;
  margin-top: 1vh;
  margin-left: 1vh;
}

.menu-container {
  position: fixed;
  z-index: 2;
  display: flex;
  width: 100%;
  margin: 0vh;
  top: 0vh;
  left: 0vh;
  padding-bottom: 1vh;
  align-items: center;
  background-color:black;
  border-bottom: .4vh solid rgb(72, 255, 0);
  overflow: hidden;
}
.menu-container button:hover {
  cursor: pointer;
}

.tab-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  border: none;
  color: rgb(72, 255, 0);
  background-color: transparent;
  position: relative; 
  overflow: hidden;
  margin-left: 2vh;
  min-width:10vh;
  padding: 8px 16px;
}

.tab-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 2px;
  background-color: rgb(72, 255, 0);
  transition: all 0.15s ease-out;
  transform: translateX(-50%);
}

.tab-item:hover::after {
  width: 80%;
  transform: translateX(-50%);
}

.vert-container {
  flex-direction: column;
  display: flex;
  margin-top: 0vh;
  margin-left: 0vh;
  margin-right: 0vh;
  align-items: center;
  justify-content: center;
    width: 100%;
  }
  
.photos { 
  flex-direction: row;
  align-self: center;
  display: flex;
  margin-right: 5vh;
  margin-left: 5vh;
}

@media (max-aspect-ratio: 3/2) {
  .photos {
    flex-direction: column;
    align-self: center;
    display: flex;
    align-items: center;
  }
  
}

.photo {
  margin-left: 5vh;
  border-radius: 1vh;
  margin-bottom: 5vh;
}

.text {
  font-family: 'Montserrat', serif;
  font-size: 1.2em;
  border: none;
  color: white;
  background-color: transparent;
  position: relative;
  text-align: left;
  font-weight: 0;
  box-sizing: border-box;
  max-width: 125vh;
  overflow-wrap: break-word;
  margin-left: 5vh;
  margin-right: 5vh;
  line-height: 2;
  flex: 1;
}

.title {
  font-family: 'Merriweather', sans-serif;
  color: white;
}

ul {
 color: white;
}
li {
  font-family: 'Montserrat', serif;
  line-height: 2;
  margin-left: 10vh;
  margin-right: 10vh;
  overflow-wrap: break-word;
  font-size: 1.2em;
  color: white;
}

h2 {
  font-family: 'Merriweather', sans-serif;
  text-align: center;
  font-weight: 100;
  font-size: 2em;
  color: white;
  margin-bottom: 2vh;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  margin-top: 5vh;
  background-color: #333;
  padding: 2vh;
  border-radius: 8px;
}

select {
  font-family: 'Montserrat', serif;
  font-size: .9em;
  border: none;
  border-radius: 4px;
  background-color: #444;
  color: white;
  line-height: 2;
  padding: 1.3vh;
}

.submit-button {
  font-family: 'Montserrat', serif;
  font-size: .9em;
  color: white;
  background-color: #28a745;
  padding: 1.3vh;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}

.submit-button:hover {
  background-color: #218838;
}

table {
  background-color: #333;
  max-width: 90%;
  border-radius: 2vh;
  align-self: center;
  border-collapse: collapse;
  padding: 0vh;
  margin-bottom: 2vh;
  margin-left: 0vh;
}

th {
  font-size: 1.2em;
  font-weight: 200;
}

td, th {
  border: .8vh solid #444;
  border-radius: 2vh;
  padding: 1vh;
  padding-left: 3vh;
  margin: 0vh;
  padding-right: 5vh;
  font-family: 'Montserrat', serif;
  color: white;
}

</style>
