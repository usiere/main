<template>
  <div class="home">
    <div class="main">
      <div class="main-left">
           <div class="spin"><img src="../assets/usi-tech.png" alt="" width="500px" class="usi-tech" ></div>
            <img src="../assets/usi-face.jpg" alt="" class="usi-face" width="200px">
      </div>
      <div class="text">
        <h1 class="intro-text">Hi, I'm 
         <span class="usiere-text">Usiere,</span><br>
          </h1>
        <h3>Fullstack web developer.</h3>
        <div>3+ years experienced Fullstack web developer, with core interest in building innovative projects for corporations, startups and individuals.</div>
        <br>
        <div>As a job and a hobby, i make use of industry standard technologies in bringing interesting projects to life. These include
           <strong> VueJs, NuxtJs, Html, CSS, Javascript, React, NodeJs and ExpressJs and MongoDB.</strong>
            In addition, I always imbibe industry methodologies such as Responsive design, UI wireframing(Figma), System Architecture, Agile development and proficent use of npm libraries in projects.
            I am also a new technical writer with recent publishes to Javascript.plainenglish.io.
            </div>
            <br>
        <router-link to="/projects" class="btn1">View projects</router-link>
        <br><br><br>
      </div>
    </div>
  </div>
</template>

<script>


// @ is an alias to /src


export default {
  name: "Home",
  components: {
  },
};
</script>

<style scoped>
.main{
  display: grid;
  grid-template-columns: 50% 50%;
}

.usi-face{
  position: relative;
  top: -250px;
  left: 0px;
  border-radius: 70%;

}

.spin{
  animation: rotate 10s infinite ease-in-out;
  position: relative;
  top: 100px;
}

.intro-text{
  margin-top: 130px;
}

.text{
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
}


.usiere-text{
  color: blue;
}

.btn1{
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  margin: 0 auto;
  margin-top: 20px;
  transition: all 0.5s ease-in;
  text-decoration: none;
  color: black;
}

.btn1:hover{
  color: white;
  background-color: blue;
  cursor: pointer;
}


@media screen and (max-width: 800px) {

.main{
  display: flex;
  flex-direction: column;
}

.usi-tech{
  width: 360px;
}

.usi-face{
  width: 100px;
  top: -220px;
}

.spin{
  position: relative;
  top: 20px;
}

.text{
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
}

.intro-text{
  margin-top: -40px;
}


.btn1{
  margin-bottom: 20px;
}
    
}


@keyframes rotate {
  0% {
 transform: rotate(6deg);
  }

  100% {
 transform: rotate(-6deg);
  }
}
</style>


    git config --global user.name "Your Name"
    git config --global user.email you@example.com

    After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author