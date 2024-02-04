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
      <div>4+ years experienced Frontend Fullstack web developer, with core interest in building innovative projects for corporations, startups and individuals.</div>
        <br>
        <div>As a job and a hobby, i make use of industry standard technologies in bringing interesting projects to life. These include
           <strong> VueJs, NuxtJs, Html, CSS, Javascript, React, NodeJs and ExpressJs and MongoDB.</strong>
            In addition, I always imbibe industry methodologies such as Responsive design, UI wireframing(Figma), System Architecture, Agile development and proficent use of npm libraries in projects.
            I am also a new technical writer with recent publishes to Javascript.plainenglish.io.
            </div>
            <br>
        <router-link to="/projects" class="btn1">View projects</router-link>
    </el-tab-pane>
    <el-tab-pane label="Projects" name="second">
      <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="Consistency" name="1">
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficiency" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllability" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
    </el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
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
