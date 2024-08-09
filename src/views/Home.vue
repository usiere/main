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
        <h3>Frontend Fullstack web developer.</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="About me" name="first">
      <div>5 years experienced Frontend Fullstack web developer, with core interest in building innovative projects for corporations, startups and individuals.</div>
        <br>
        <div>As a job and a hobby, i make use of industry standard technologies in bringing interesting projects to life. These include
           <strong> VueJs, NuxtJs, Html, CSS, Javascript, React, NodeJs and ExpressJs and MongoDB.</strong>
            In addition, I always imbibe industry methodologies such as Responsive design, UI wireframing(Figma), System Architecture, Agile development and proficent use of npm libraries in projects.
            I am also a new technical writer with recent publishes to Javascript.plainenglish.io.
            </div>
            <br>
        <!-- <router-link to="/projects" class="btn1">View projects</router-link> -->
    </el-tab-pane>
    <el-tab-pane label="Key Projects/ Contributions" name="second">
      <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="MSDAT" name="1">
    <div>A multisource and triangulation platform built for the ministry of health in Nigeria. It provides a single transparent view of key health indicators against multiple data sources. It offers a view against key metrics using sources that range from routine data, surveys to global estimates recognizing that data quality, trends and interpretation depend on the type of source and methodology behind the data.</div>
    <a href="https://msdat.fmohconnect.gov.ng/" target=”_blank”>website link</a>
  </el-collapse-item>
  <el-collapse-item title="Innovation Scaling" name="2">
    <div>BOTSWANA HEALTH INNOVATION MANAGEMENT SYSTEM; Managing end-to-end process of demand-driven innovations for sustainable impact in Botswana</div>
    <a href="https://mohinnovations.gov.bw/" target=”_blank”>website link</a>
  </el-collapse-item>
  <el-collapse-item title="APHRC" name="3">
    <div>African Population and Health Research Center (APHRC) MEL Portal!
The portal serves as a comprehensive Measurement and Evaluation (M&E) solution, aligned to APHRC's Strategic and its Measurement, Evaluation, and Learning (MEL) plan. </div>
<span>Portal link is currently private </span>
  <div></div>
  </el-collapse-item>
  <el-collapse-item title="Dopawell" name="4">
    <div>Dopawell: A tele therapy platform for Africans</div>
    <a href="https://dopawell.com/" target=”_blank”>website link</a>
  </el-collapse-item>
  <el-collapse-item title="IFEPS" name="5">
    <a href="https://ifeps.org.ng/" target=”_blank”>website link</a>
    <div></div>
  </el-collapse-item>
  <el-collapse-item title="Arberta" name="6">
    <a href="https://usiere.github.io/arberta/" target=”_blank”>website link</a>
  </el-collapse-item>
  <el-collapse-item title="LifeOnline" name="7">
    <a href="https://usiere.github.io/lifeonline/" target=”_blank”>website link</a>
  </el-collapse-item>
</el-collapse>
    </el-tab-pane>
    <el-tab-pane label="Articles" name="third">
      <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="Simplifying Middleware in Express for Newbies and Pros Alike" name="1">
    <div></div>
    <a href="https://javascript.plainenglish.io/simplifying-middleware-in-expressjs-baad2d6595f3" target=”_blank”>article link</a>
  </el-collapse-item>
  <el-collapse-item title="Basic Form Validation using Vue.js: A Simple Guide" name="2">
    <a href="https://javascript.plainenglish.io/basic-form-validation-using-vuejs-ad9489628617" target=”_blank”>article link</a>
  </el-collapse-item>

</el-collapse>
    </el-tab-pane>
  </el-tabs>
     
        <br><br><br>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");

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
