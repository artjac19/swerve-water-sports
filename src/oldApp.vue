<script setup>
import { ref } from 'vue'

const reload = () => {
  window.location.reload()
}

const checkAspect = () => {
  return window.innerWidth/window.innerHeight >= 1
}

const isVisible = ref(false);

function toggleVisibility() {
  isVisible.value = !isVisible.value;
}

let tab = ref('Access')
const switchTabs = (id) => {
  tab.value = id;
  const element = document.getElementById(tab.value);
  const offsetVH = 15;
  const offsetPixels = window.innerHeight * (offsetVH / 100);
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offsetPixels;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

const switchTabsMobile = (id) => {
  tab.value = id;
  const element = document.getElementById(tab.value);
  const offsetVH = 15;
  const offsetPixels = window.innerHeight * (offsetVH / 100);
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offsetPixels;
  toggleVisibility()
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

</script>



<template>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet"> 
  <div v-if="checkAspect()" class="menu-container">
    <button class="logo" @click="reload"><img src="./assets/musicLogo-01.png" object-fit="cover" flood="#ff0000" width="70vh" height="70vh"/></button>
    <button class="tab-item" @click="switchTabs('Access')">Equality</button>
    <button class="tab-item" @click="switchTabs('Large')">Large Ensemble Format</button>
    <button class="tab-item" @click="switchTabs('Flaws')">Flaws</button>
    <button class="tab-item" @click="switchTabs('Importance')">Importance of Music</button>
    <button class="tab-item" @click="switchTabs('Next')">What's Next</button>
    <button class="tab-item" @click="switchTabs('Interview')">Interviews</button>
  </div>
  <div v-else class="menu-container" style="vertical-align: center;">
    <button class="logo" style="display: flex; flex-direction: column; margin-left: auto; margin-right: auto; margin-top: 1vh; margin-bottom: 1vh;" @click="toggleVisibility()"><img src="./assets/menu-01.png" object-fit="cover" flood="#ff0000" width="50vh" height="50vh"/></button>
  </div>
  <div v-if="isVisible" class="hamburger-menu">
    <button class="tab-item" @click="switchTabsMobile('Access')">Equality</button>
    <button class="tab-item" @click="switchTabsMobile('Large')">Large Ensemble Format</button>
    <button class="tab-item" @click="switchTabsMobile('Flaws')">Flaws</button>
    <button class="tab-item" @click="switchTabsMobile('Importance')">Importance of Music</button>
    <button class="tab-item" @click="switchTabsMobile('Next')">What's Next</button>
    <button class="tab-item" @click="switchTabsMobile('Interview')">Interviews</button>
  </div>
  <img v-if="checkAspect()" src="./assets/cover.png" class="first-image"></img>
  <img v-else src="./assets/verticalCover.png" class="first-image"></img>
  <br></br>
  
  <div id="vert" class="vert-container">
  <p class="header">Rethinking Music Education in America</p>
  <p class="subheader">Jake Artang</p>
  <Paragraph>
    <p class="text">The way students in school K-12 learn music is fundamentally flawed. It stifles the fluidity and creativity that music inherently provides and is set up to turn students away from music after their credit requirements are fulfilled. With a rethinking of how music is taught it can be cheaper, more beneficial, and most importantly more enjoyable for the students than the current system. <br><br>Currently, most schools that do have a music program offer one in the form of a large ensemble, typically band, choir, orchestra, or a combination. While these ensembles do play a variety of music, they are heavily restricted because of how they are orchestrated. For example in band and orchestra, music is often selected from Western classical music as that is one of the few genres that fit the large ensemble. After the initial learning phase, students are almost exclusively given sheet music parts of ensemble pieces. At first glance, this method appears to be effective. The large ensembles play full classical scores at concerts within a few years of teaching. The school can show off their band and or choir through performances at football games or other school events. Students that do take to music typically end up with a decent level of proficiency in their playing.</p>
  </Paragraph>
  <img v-if="checkAspect()" src="./assets/highschoolband.jpg" width="60%">
  <img v-else src="./assets/highschoolband.jpg" style="display: flex; width: 90%; margin: auto; flex-direction: column;">
  <Paragraph id="Access">
    <p class="title">Equitable Access and Treatment</p>
    <p class="text">The current curriculum overlooks a number of factors that contribute to developing well-rounded musical knowledge to all students. First of all, these programs tend to require substantial funding. A fully funded program must include numerous rehearsal spaces, sound-proofed practice rooms, percussion equipment, and qualified teachers. As a result, access to music education is not equitable or universal across the US. A 2010 study by professors Karen Salvador and Kristen Allegood looked at access in schools K-12 in Detroit and Washington D.C. They found particularly significant differences in the Detroit area, where “100 percent of the low NW (non-white) sample offered music instruction but only 60 percent of high NW elementary schools, 39 percent of high NW middle schools, and 40 percent of high NW high schools offered any kind of music instruction at all.” It’s also important to note that SES is highly correlated with racial demographics at each school, so students with a low SES are more likely to be NW and not have access to a music education.<br><br>Another important factor to consider is the problem with teaching from a Western classical music standpoint. Most schools teach Western classical music, and even if they play songs from different cultures or genres, it is consistently done through a Western classical lens. This means that students are given sheet music notated in a way they are used to, and expected to play it as they would any piece of Western classical music. While students are in fact playing other genres of music, they aren’t able to appreciate the unique aspects that are brought in from different cultures and styles of music. I asked jazz trumpet professor Chad McCullough about his thoughts on teaching music from a Western classical view. He says “No, I don’t think there’s as much difference as people think there is. Bach could improvise. Bach wrote all kinds of shifting harmonies, I think that is a valuable teaching tool, Bach chorales are a valuable teaching tool. Studying the music of Louis Armstrong is just as valuable a teaching tool for every student.” The large majority of popular music deals with the same functional harmony that Western classical music does, including jazz, so why only teach from a Western classical standpoint? Chad says that “we see jazz as this completely separate track, and I think it justifies the classical musicians notion of like 
      <blockquote v-if="checkAspect()" style="float: right; width: 45%;"> 
        <p class="quote" style="float: right; text-align: right;">Why don't we use popular songs to teach core aspects of music to students?</p>
      </blockquote> 
      <blockquote v-else style="width: 100%; border-top: 0;"> 
        <p class="quote" style="float: right; text-align: center; margin-bottom: 5vh;">Why don't we use popular songs to teach core aspects of music to students?</p>
      </blockquote> 
      ‘Well I don’t need to worry about that, that’s for jazz people.’ This belief comes out of systemic racism. If you have the belief that black people aren’t as good of musicians, or not well trained, then you can easily justify not having to deal with learning their music.” Not only is this relevant for jazz, but the same ideas apply to the popular genres of today. Genres created by African-Americans such as blues, rap, and funk are greatly underrepresented in music education despite their monumental influence on music in america. The separation of genres also makes it easy to justify not touching popular music. Many educators hold the viewpoint that classical music is a genre of high class, with more complexity and purity than the other styles. In reality, music of today is just as complex and valuable a teaching tool for education. The fact that we still orient music education from a Western classical perspective despite the mountains of new music to draw from is a sure sign that change is long overdue.</p>
  </Paragraph>
  <img v-if="checkAspect()" src="./assets/highschoolchoir.jpg" width="60%">
  <img v-else src="./assets/highschoolchoir.jpg" style="display: flex; width: 90%; margin: auto; flex-direction: column;">
  <Paragraph id="Large">
    <p v-if="checkAspect()" class="title">The Large Ensemble Format</p>
    <p v-else class="mobiletitle">The Large Ensemble Format</p>
    <p class="text">A big reason for the lack of genre coverage and of other musical perspectives is the large ensemble format that most bands and choirs follow. It can be unwieldy to play genres of music that aren’t traditionally played with a large group and this steers band and choir directors away from teaching those styles.  Part of what makes the large ensemble format good is that students must learn how to play together with others, blending together to create one coherent sound. While these large ensemble skills are valuable, when they become the large majority of class time it deprives students of a chance to find their own sound. This is actually by design. Professor Shirley R. Steinberg has done a lot of research into how and why we treat the youth the way we do in the field of education. When she asked a teen what they think the purpose of school is, he replied, “To keep us out of trouble, off the streets until we learn how not to get into trouble. They just want to keep us in.” From this, it’s clear that adult perception of youth largely dictates how they are treated. Steinberg goes on to say that “A fear of youth is a part of our fabric. Woven between the threads, young men and women are unloved, often not understood, and often feared.” This viewpoint stems from the belief that youth is a stage of life, and this comes with many preconceived ideas. In reality, “adolescence can be seen as the effects of certain sets of social practices across numerous domains of contemporary legal, educational, family, and medical domains” (Walkerdine, 1990). Professor Nancy Lesko uses this to argue against the harmful ways we treat youth as a result of the misconceptions we have about how they will act in her paper Denaturalizing Adolescence. Music education is no exception to the effects of this problematic viewpoint. The large ensemble format is driven by a fear of youth. A need to keep youth in line and a distrust of student ideas leads teachers to put students in large groups where they are all expected to play exactly what’s on the page, exactly how the teacher wants it to be played.
      <blockquote  v-if="checkAspect()" style="float: left;"> 
        <p class="quote" style="float: left">"You can't have creativity when you have to play what's on the page." <i style="font-size: .4em !important;">-Tyler Andring</i></p>
      </blockquote>  
      <blockquote  v-else style="width: 100%; border-top: 0;"> 
        <p class="quote" style="float: right; text-align: center; margin-bottom: 5vh;">"You can't have creativity when you have to play what's on the page." <i style="font-size: .4em !important;">-Tyler Andring</i></p>
      </blockquote> 
      I interviewed Tyler Andring about his experiences with large ensembles. Tyler Andring is a junior at Prior Lake High School very passionate about music and involved in just about all the band and choir groups you’re allowed to be in. When asked if the large ensembles he’s involved in reward creativity he responded “You can’t have creativity when you have to play what’s on the page” and that oftentimes “music teachers have a one sided way of viewing things. They explain things in black and white as if there is no in between.” It’s clear from his experiences that the perception of youth shared by many adults is reflected strongly in music education. If teachers had more trust in their students, they could spend less time on large ensembles and more time in smaller groups giving students the tools to create something unique.</p>
    </Paragraph>
  <Paragraph id="Flaws">
    <p v-if="checkAspect()" class="title">Fundamental Flaws</p>
    <p v-else class="mobiletitle">Fundamental Flaws</p>
    <p class="text">Because of the way the current system is structured it overlooks a few core aspects of music. Learning music is much like learning a language. For any language you need to be able to read, write, comprehend, and speak it. Music should be no different. Most of what students learn today is how to read and then repeat back what is read. Schools almost never teach students how to write, comprehend, or speak without sheet music present. A 2016 study by José Luis Aróstegui on the decline of music education surveyed a number of music directors at a variety of schools. It pinpoints four key reasons for the decline, one of which being a wrong approach on music advocacy. One director said that “We perpetuate the same required lists of repertoire and never wonder where the kids are coming from. But we have our festivals and people get recognition from their peers who value the same things. They don't compose or improvise with their kids—or do anything that makes space for students' musical ideas, ideas about music, interpretations, etc. “ (J.W., USA).<br><br>
      <blockquote v-if="checkAspect()"  style="float: right;"> 
        <p class="quote" style="float: right; text-align: right; margin-right: 4vh;">It’s like meditation, the very act of doing it is what’s most important.</p>
      </blockquote>
      <blockquote v-else  style="width: 100%; border-top: 0;"> 
        <p class="quote" style="float: right; text-align: center; margin-bottom: 5vh;">It’s like meditation, the very act of doing it is what’s most important.</p>
      </blockquote>
      Many schools look at music education from a very product-oriented perspective. By performing well at music festivals or being able to send students to all-state programs they can prove that their music program gets results. Combine this with the so-called “mozart effect” that music provides and you have a convincing argument for music department funding. While this product-oriented mindset works well for the school board, it is detrimental to the process of learning music. Schools looking to get immediate results tend to speed through the fundamentals. They don’t care about teaching composition or individuality when the whole goal is to sound professional all the time. It frames music only as an art form and a way to enhance student performance in core subjects. While music is both these things, at its core it is a practice. It’s about the process and if you can get students to enjoy that, then they will have no problem engaging in class and continuing to play music after high school. </p>
  </Paragraph>
  <Paragraph id="Importance">
    <p v-if="checkAspect()" class="title">The Importance of Music Education</p>
    <p v-else class="mobiletitle">The Importance of Music Education</p>
    <p class="text">Music is a part of being human. It has been and always will be a fundamental piece of society. It is not only important in and of itself, but its effects reach most other facets of human life. A study by Jennifer Krizman looked at neuroplasticity and music. She and her team took 150 freshmen high school students and had half of them enrolled in a drill team and the other half in music training. They found that “music training enhanced neural processing of speech sounds and accelerated auditory brain development after two years. Comparing music training to the drill team also showed it wasn't extracurricular enrichment in general that sped up brain development. It was music.”<br><br>Other studies from the same paper proved similar effects. One from Los Angeles found that “The instrumental group's brain responses and language and listening skills had advanced above those of their peers in a way completely consistent with our initial studies.” It’s interesting to note that it generally takes two years of music training before these changes to the brain become apparent. Music is an intensely social activity. A study in Finland by Professors Päivi-Sisko Eerola & Tuomas Eerola found that students enrolled in the EM (extended music) program had measurable social benefits over the students enrolled in the normal music program. This included students in the EM group being more satisfied with school life and students responding more positively to items representing classroom climate. If the goal of public education is to produce members of society, then music is essential to achieving that. It provides remarkable social and cognitive benefits, and it is simply a fundamental part of all humans.</p>
  </Paragraph>
  <img v-if="checkAspect()" src="./assets/newmusiced.png" width="60%">
  <img v-else src="./assets/newmusiced.png" style="display: flex; width: 90%; margin: auto; flex-direction: column;">
  <p class="text">Students from the New Orleans Center for Creative Arts (NOCCA)</p>
  <Paragraph id="Next">
    <p v-if="checkAspect()" class="title">What's next?</p>
    <p v-else class="mobiletitle">What's next?</p>
    <p class="text">Most importantly, the primary goals of the music programs across the nation need to change. By switching from a product-oriented to a process-oriented perspective the guidelines for new goals become clear. Instead of always scrambling to get ready for the next concert, we can take some time to clear up the fundamentals. Instead of worrying about sounding correct all the time, we can give students space to create their own music. Instead of playing the same western classical repertoire year after year, we can explore other ways of creating music.<br><br>While a large shift such as the one proposed needs change from all levels of government, a large portion of the change can come from music teachers themselves, as they have a lot of control over what they teach and how they teach it. A paper by music professor Patrick Schmidt looks at changing music education from a Freirian perspective. Paulo Freire’s book Pedagogy of the Oppressed is one of the most often cited books in education. In it, Freire writes that, “learning needs to be about reinventing and re-creating rather than retention and memorization”. Schmidt applies this by saying that, “Music education needs to connect the experiences that students and their teachers bring to the classroom.” and that “Problematizing what is presented to them and their own perceptions and self-concepts music can not only be transformed from noun to verb, but most importantly can become a verb of power”. The key concept here is to teach critical thinking skills in music education. As long as music educators understand this shift in perspective, they should be able to justify it to the schools as teaching critical thinking is already widely accepted in education.</p>
  </Paragraph>
  <Paragraph id="Interview">
    <p v-if="checkAspect()" class="title">Interviews</p>
    <p v-else class="mobiletitle">Interviews</p>
      <p class="text"></p>
  </Paragraph>
  <p  v-if="checkAspect()" class="text">
    <blockquote style="float: right; border-top: 0px solid rgb(7,8,12); margin-top: 0vh; margin-left: 3vh; margin-right: 0vh; padding: 0;"> 
        <img float="right" src="./assets/chad.jpg" width="100%">
    </blockquote>Chad McCullough is a world-renowned trumpeter/composer. In addition to being a bandleader, producer, and owner of his own record label, he also teaches at both DePaul University and UW-Madison. As a result of this, he works with a lot of students coming straight from high school music programs. I talked with him about what he thought high school music programs were teaching well and some things that he found himself having to work on with new freshmen.
  </p>
  <div v-else style="align-items: center;">
    <img src="./assets/chad.jpg" style="display: flex; width: 80%; margin: auto; flex-direction: column;">
    <p class="text">Chad McCullough is a world-renowned trumpeter/composer. In addition to being a bandleader, producer, and owner of his own record label, he also teaches at both DePaul University and UW-Madison. As a result of this, he works with a lot of students coming straight from high school music programs. I talked with him about what he thought high school music programs were teaching well and some things that he found himself having to work on with new freshmen.</p>
  </div>
  <p v-if="checkAspect()" class="text">
    <blockquote style="float: left; border-top: 0px solid rgb(7,8,12); margin-top: 0vh; margin-left: 0vh; margin-right: 3vh; padding: 0;"> 
        <img float="right" src="./assets/tyler.jpg" width="100%">
    </blockquote>Tyler Andring is currently a junior at Prior Lake High School. He is involved in just about all the music clubs and classes you are allowed to be in. This includes marching band, choir, wind ensemble, jazz band, rock band, percussion ensemble, anthem team, All-state choir, all-state jazz, Minnesota Youth Jazz Bands (MYJB), and his own side projects. I asked him a few questions about what he’s getting out of the music program and what he thinks could be different.</p>
  <div v-else style="align-items: center;">
    <img src="./assets/tyler.jpg" style="display: flex; width: 80%; margin:auto; flex-direction: column;">
    <p class="text">Tyler Andring is currently a junior at Prior Lake High School. He is involved in just about all the music clubs and classes you are allowed to be in. This includes marching band, choir, wind ensemble, jazz band, rock band, percussion ensemble, anthem team, All-state choir, all-state jazz, Minnesota Youth Jazz Bands (MYJB), and his own side projects. I asked him a few questions about what he’s getting out of the music program and what he thinks could be different.</p>
  </div>
  <Paragraph>
    <p class="question">Full interview transcription coming soon!</p>
  </Paragraph>
  <p v-if="checkAspect()" class="title">Sources</p>
  <p v-else class="mobiletitle">Sources</p>
  <p class="text"><br>Schmidt, P. (2005). Music Education as Transformative Practice: Creating New Frameworks for Learning Music through a Freirian Perspective. <i>Visions of Research in Music Education</i>, 6(1), Article 2. <a href="https://digitalcommons.lib.uconn.edu/vrme/vol6/iss1/2/" target="_blank">https://digitalcommons.lib</a></p>
  <p class="text"><br>Salvador, K., & Allegood, K. (2014). Access to Music Education with Regard to Race in Two Urban Areas. <i>Arts Education Policy Review</i>, 115(3), 82–92. <a href="https://doi.org/10.1080/10632913.2014.914389" target="_blank">https://doi.org/10.1080/</a></p>
  <p class="text"><br>Aróstegui, J. L. (2016). Exploring the global decline of music education. <i>Arts Education Policy Review</i>, 117(2), 96–103. <a href="https://doi.org/10.1080/10632913.2015.1007406" target="_blank">https://doi.org/10.1080/</a></p>
  <p class="text"><br>Eerola, P. S., & Eerola, T. (2014). Extended music education enhances the quality of school life. <i>Music Education Research</i>, 16(1), 88–104. <a href="https://doi.org/10.1080/14613808.2013.829428" target="_blank">https://doi.org/10.1080/</a></p>
  <p class="text"><br>Kraus, N., & White-Schwoch, T. (2020). The Argument for Music Education. <i>American Scientist</i>, 108(4), 210. <a href="https://go.gale.com/ps/i.do?id=GALE%7CA631096481&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=00030996&p=AONE&sw=w&userGroupName=greenbay&aty=ip" target="_blank">https://go.gale.com/ps/</a></p>
  <p class="text"><br>Steinberg, L. D. (2014). Redefining the Notions of Youth: Contextualizing the Possibe for Transformative Youth Leadership. Age of opportunity: lessons from the new science of adolescence. Boston, Houghton Mifflin Harcourt.</p>
  <p class="text"><br>Lesko, N. (1996). Denaturalizing Adolescence: The Politics of Contemporary Representations. <i>Youth & Society</i>, 28(2), 139-161. <a href="https://doi.org/10.1177/0044118X96028002001" target="_blank">https://doi.org/10.1177/1</a></p>
</div>
</template>

<style>

body {
  margin: 0;
  padding: 0;
}

blockquote {
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-top: 2vh;
  border-top: 1vh solid rgb(7, 8, 12); 
  width: 45%; 
}

hr.solid {
  border-top: 3px solid #bbb;
}

.first-image {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: auto;
}

.logo {
  border: none;
  position: relative;
  background-color: transparent;
}

.menu-container {
  position: fixed;
  z-index: 2;
  display: flex;
  width: 100%;
  margin-top: 0vh;
  margin-left: 0vh;
  margin-right: 0vh;
  padding-bottom: 1vh;
  /* Aligns items in a row */
  align-items: center;
  background-color:rgb(7, 8, 12);
  overflow: hidden;
}

.hamburger-menu {
  position: fixed;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1vh;
  /* Aligns items in a row */
  align-items: center;
  background-color:rgb(7, 8, 12);
  overflow: hidden;
}

.vert-container {
  background-color: white;
  flex-direction: column;
  display: flex;
  margin-top: 100vh;
  margin-left: 0vh;
  margin-right: 0vh;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.tab-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.35em;
  border: none;
  color: rgb(218, 218, 218);
  background-color: transparent;
  position: relative; 
  overflow: hidden;
  margin-left: 4vh;
  min-width:20vh;
  padding: 8px 16px;
}

.tab-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 2px;
  background-color: rgb(218, 218, 218);
  transition: all 0.15s ease-out;
  transform: translateX(-50%);
}

.tab-item:hover::after {
  width: 80%;
  transform: translateX(-50%);
}

.header {
  font-family: 'Merriweather', sans-serif;
  font-size: 5em;
  border: none;
  max-width: 160vh;
  font-weight: 900;
  color: rgb(7, 8, 12);
  background-color: transparent;
  position: relative;
  text-align: center;
  margin-bottom: 0;
}

.mobileheader {
  font-family: 'Merriweather', sans-serif;
  font-size: 3em;
  border: none;
  max-width: 160vh;
  font-weight: 900;
  color: rgb(7, 8, 12);
  background-color: transparent;
  position: relative;
  text-align: center;
  margin-bottom: 0;
}

.subheader {
  margin-top: 2vh;
  margin-bottom: 5vh;
  font-family: 'Merriweather', sans-serif;
  font-size: 1.7em;
  border: none;
  max-width: 160vh;
  font-weight: 900;
  color: rgb(55, 56, 60);
  background-color: transparent;
  position: relative;
  text-align: center;
}

.title {
  font-family: 'Merriweather', sans-serif;
  font-size: 2.7em;
  border: none;
  font-weight: 900;
  color: rgb(7, 8, 12);
  background-color: transparent;
  position: relative;
  text-align: left;
  margin-left: 4.6vh;
}

.mobiletitle {
  font-family: 'Merriweather', sans-serif;
  font-size: 2.4em;
  border: none;
  font-weight: 900;
  color: rgb(7, 8, 12);
  background-color: transparent;
  position: relative;
  text-align: left;
  margin-left: 4.6vh;
}

.text {
  font-family: 'Montserrat', serif;
  font-size: 1.2em;
  border: none;
  color: rgb(7, 8, 12);
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

.question {
  font-family: 'Montserrat', serif;
  font-size: 1.2em;
  border: none;
  border-top: 1vh solid rgb(7, 8, 12);
  padding-top: 2vh;
  color: rgb(7, 8, 12);
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

.quote {
  font-family: 'Montserrat', sans-serif;
  font-size: 2em;
  border: none;
  font-weight: 900;
  color: rgb(7, 8, 12);
  background-color: transparent;
  position: relative;
  text-align: left;
  margin-top: 0vh;
  margin-bottom: 0vh;
  margin-right: 0vh;
  margin-left: 0;
  padding-left: 0;
  line-height: 1.2;
  width: 100%;
  white-space: pre-wrap;
  overflow: visible;
}

.menu-container button:hover {
  cursor: pointer;
  /* Add any hover effects you like */
}

</style>

<style scoped>


.tab-item {
  margin-left: 4vh;
  position: relative;
}
.logo {
  padding: 2vh;
  padding-left: 4vh;
}

</style>
