<template>
  <div id="app">
       <!-- navigation -->
      <div class="navbar">
        <router-link to="/" class="main">
            <img src="./assets/Usiere.png" alt="" width="100px" class="logo">
        </router-link>
        <div class="nav-items main">
            <!-- <div class="nav-item">
              <font-awesome-icon
                    :icon="['fas', 'envelope']"
                    class="modal-icon-mob"
                />
            </div>

            <div class="nav-item">
              <font-awesome-icon
                    :icon="['fas', 'envelope']"
                    class="modal-icon-mob"
                />
            </div>

            <div class="nav-item">
              <font-awesome-icon
                    :icon="['fas', 'envelope']"
                    class="modal-icon-mob"
                />
            </div> -->
        
                        
          <a href="https://www.linkedin.com/in/usiereakpabio/" class="nav-item" target=”_blank” v-b-tooltip.hover title="Linkedin">        
            <b-icon icon="linkedin" aria-hidden="true"></b-icon>
          </a>
          <a href="https://github.com/usiere/" class="nav-item" target=”_blank” v-b-tooltip.hover title="Github">      
            <b-icon icon="github" aria-hidden="true"></b-icon>
          </a>
                <a href="https://gitlab.com/moses_akpabio" class="nav-item" target=”_blank” v-b-tooltip.hover title="Gitlab">        
                  <img src="./assets/gitlab.png" width="20px" />
                </a>

                <a href="mailto:akpabio98@gmail.com" class="nav-item" target=”_blank” v-b-tooltip.hover title="Email">        
                  <font-awesome-icon
                    :icon="['fas', 'envelope']"
                    class="modal-icon-mob"
                />
                </a>
          
        </div>
      </div>

      <!-- mobile nav bar -->
      <div class="mobile-nav">
           <router-link to="/">
            <img src="./assets/Usiere.png" alt="" width="100px" class="logo">
        </router-link>

        <font-awesome-icon
                    :icon="['fas', 'bars']"
                    v-b-toggle.sidebar-1
                    class="bars-icon"
                />
      </div>
    <router-view />

<div>
  <b-modal id="modal-contact" title="Contact me" hide-footer hide-header centered>
    <h1 class="modal-heading">Contact me:</h1>
      <div class="grid1">
        <a class="grid1-flex" href="mailto:akpabio98@gmail.com">
          
           <font-awesome-icon
                    :icon="['fas', 'envelope']"
                    class="modal-icon"
                />
        </a>
        <a class="grid1-flex" href="tel:+2349026212016">
             <font-awesome-icon
                    :icon="['fas', 'phone']"
                    class="modal-icon"
                />
        </a>
      </div>
  </b-modal>
</div>

<!-- sidebar for mobile -->
         <b-sidebar id="sidebar-1" title="" right shadow class="sidebar">
      <div class="px-3 py-2 nav-flex">
        <a href="https://www.linkedin.com/in/usiereakpabio/" class="nav-item-mob" target=”_blank” v-b-tooltip.hover title="Linkedin">        
            <b-icon icon="linkedin" aria-hidden="true"></b-icon>
          </a>
          <a href="https://github.com/usiere/" class="nav-item-mob" target=”_blank” v-b-tooltip.hover title="Github">      
            <b-icon icon="github" aria-hidden="true"></b-icon>
          </a>
                <a href="https://gitlab.com/moses_akpabio" class="nav-item-mob" target=”_blank” v-b-tooltip.hover title="Gitlab">        
                  <img src="./assets/gitlab.png" width="40px" />
                </a>

                <a href="mailto:akpabio98@gmail.com" class="nav-item-mob" target=”_blank” v-b-tooltip.hover title="Email">        
                  <font-awesome-icon
                    :icon="['fas', 'envelope']"
                    class="modal-icon-mob"
                />
                </a>


            <br><br><br>
          <div>
              
              <span class="rights-text-mob"> Usiere. © 2024.</span>
          </div>
          
      </div>
    </b-sidebar>

      
    <span class=""> Usiere. © 2024.</span>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.mobile-nav{
  display: none;
}

.logo{
  margin: 20px;
}

.nav-items{
  margin: 20px;
}

.nav-item{
  position: relative;
  right: 70px;
  left: 20px;
  margin-left: 30px;
  margin-right: 130px;
  text-decoration: none;
  color: black;
}

.nav-item:hover{
  font-weight: 500;
  cursor: pointer;
  color: blue;
}

.nav-flex{
  display: flex;
  flex-direction: column;
}

.grid1{
  display: grid;
  grid-template-columns: 50% 50%;
}

.grid1-flex{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid black;
  padding: 10px;
  width: 150px;
  height: 100px;
  margin-bottom: 30px;
  border-radius: 10px;
}

.modal-icon{
  font-size: 80px;
  margin-bottom: 20px;
  margin-left: 20px;
  color: black;
}

.modal-icon:hover{
  color: blue;
  cursor: pointer;
}

.modal-heading{
  margin: 0 auto;
  font-size: 20px;
  margin-left: 180px;
  margin-bottom: 50px;
}



@media screen and (max-width: 800px) {

.mobile-nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* to crosscheck why the query is not working */
.navbar{
  display: none;
  visibility: hidden;
}

.main{
  display: none;
}

.logo{
  position: relative;
  bottom: 10px;
}

.bars-icon{
  margin: 10px;
}

.nav-item-mob{
  color: black;
  text-decoration: none;
  margin: 10px;
  font-size: 40px;
}

.nav-item-mob:hover{
  color: blue;
}

.grid1-flex-mob{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: none;
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 10px;
}

.modal-icon-mob{
  font-size: 50px;
  margin-bottom: 20px;
  margin-left: 20px;
  color: black;
}
    
}
</style>
