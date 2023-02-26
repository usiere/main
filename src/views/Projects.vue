<template>
  <div class="about">
    <h1 class="heading1">My Projects</h1>
    <span class="sub-text">Some projects are not listed here (i.e projects involving the Nigerian ministry) for rights and privacy concerns.
      All projects listed are real projects built from the UI conceptualisation stage up to deployment.</span>
 
    <div class="main">
       <div class="card1" v-b-modal.modal-1>
         <img src="../assets/projects/ifeps.png" alt="" width="150px" class="img">
      </div>
      <div class="card1" v-b-modal.modal-2>
         <img src="../assets/projects/loocum.png" alt="" width="200px" class="img">
      </div>
      <div class="card1" v-b-modal.modal-3>
        <img src="../assets/projects/cuplime.png" alt="" width="200px" class="img">
      </div>
      <div class="card1" v-b-modal.modal-4>
        <img src="../assets/projects/lifeonline.png" alt="" width="200px" class="img">
      </div>
          <div class="card1" v-b-modal.modal-5>
        <img src="../assets/projects/arberta.png" alt="" width="150px" class="img">
      </div>
          <div class="card1" v-b-modal.modal-6>
        <img src="../assets/projects/9mob.png" alt="" width="70px" class="img">
      </div>
    </div>

    <!-- modal -->
     <b-modal id="modal-1" title="Project info" centered hide-footer>
         <img src="../assets/projects/ifeps.png" alt="" width="150px" class="img">
       <p class="modal-text">IFEPS is a Professional Development and Change Strategy Community located in Abuja, Nigeria.</p>
       <p class="modal-text">Involved in the full development of the Company website.</p>
       <a href="https://thinknigeria.org/"  class="btn1">View project</a>
  </b-modal>
      <b-modal id="modal-2" title="Project info" centered hide-footer>
         <img src="../assets/projects/loocum.png" alt="" width="200px" class="img">
       <p class="modal-text">Loocum is health tech startup that helps connect Health facilities in Nigeria to fill realtime emergency shifts.</p>
       <p class="modal-text">I was hired as the principal web developer in developing the MVP (Fullstack development to deployment).</p>
       <a href="https://www.loocum.com"  class="btn1">View project</a>
  </b-modal>

        <b-modal id="modal-3" title="Project info" centered hide-footer>
         <img src="../assets/projects/cuplime.png" alt="" width="200px" class="img">
         <br><br>
       <p class="modal-text">Cuplime is a community based platform for young innovators.</p>
       <p class="modal-text">Involved as the principal frontend developer</p>
       <a href="https://cuplime.com/"  class="btn1">View project</a>
  </b-modal>

        <b-modal id="modal-4" title="Project info" centered hide-footer>
         <img src="../assets/projects/lifeonline.png" alt="" width="200px" class="img">
       <p class="modal-text">LifeOnline is an ICT solutions company targeted to the built environment in Abuja, Nigeria</p>
       <p class="modal-text">Involved in the fullstack development of the site.</p>
       <a href="https://usiere.github.io/lifeonline/"  class="btn1">View project</a>
  </b-modal>

      <b-modal id="modal-5" title="Project info" centered hide-footer>
         <img src="../assets/projects/arberta.png" alt="" width="150px" class="img"><br><br>
       <p class="modal-text">Arberta helps individuals based in the diaspora to verify and purchase properties in Africa. </p>
       <p class="modal-text">Hired as the principal web developer, from UI wireframing to development.</p>
       <a href="https://usiere.github.io/arberta/"  class="btn1">View project</a>
  </b-modal>

    <b-modal id="modal-6" title="Project info" centered hide-footer>
         <img src="../assets/projects/9mob.png" alt="" width="70px" class="img"><br><br>
       <p class="modal-text">Work on a team project on building an API website for 9mobile </p>
       <a href="https://telcoapi.9mobile.com.ng/"  class="btn1">View project</a>
  </b-modal>
  </div>
</template>

<style scoped>
.heading1{
  margin-top: 20px;
}

.main{
  display: grid;
  grid-template-columns: 50% 50%;
}

.sub-text{
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 20px;
}

.card1{
  border: 1px solid black;
  width: 400px;
  height: 250px;
  padding: 100px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 50px;
  outline: none;
}

.card1:hover{
  opacity: 0.7;
  cursor: pointer;
}

.btn1{
  background-color: white;
  color: black;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  transition: all 2.0 ease-in;
  text-decoration: none;
}

.btn1:hover{
  color: white;
  background-color: blue;
}

.modal-text{
    font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

@media screen and (max-width: 800px) {

.main{
  display: flex;
  flex-direction: column;
}

.card1{
  width: 300px;
}

.img{
  position: relative;
  right: 50px;
}

    
}

</style>
