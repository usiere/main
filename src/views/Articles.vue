<template>
  <div class="about">
    <h1 class="heading1">My Articles</h1>
    <span>Articles of a novel Technical writer.</span>
 
    <div class="main">
       <a href="https://javascript.plainenglish.io/simplifying-middleware-in-expressjs-baad2d6595f3" class="card1">
        <font-awesome-icon
                    :icon="['fas', 'sticky-note']"
                    v-b-toggle.sidebar-1
                    class="icon1"
                />
        <!-- <img src="../assets/article.png" alt="" width="50px" class="img"> -->
        <div class="card-info">
          <div>Simplifying Middleware in Express for Newbies and Pros Alike</div>
        </div>
      </a> 
      <a href="https://javascript.plainenglish.io/basic-form-validation-using-vuejs-ad9489628617?source=your_stories_page-------------------------------------" class="card1">
          <font-awesome-icon
                    :icon="['fas', 'sticky-note']"
                    v-b-toggle.sidebar-1
                    class="icon1"
                />
          <!-- <img src="../assets/article2.png" alt="" width="50px" class="img"> -->
        <div class="card-info">
          <div>Basic Form Validation using Vue.js: A Simple Guide</div>
        </div>
      </a>
    </div>
    <br><br><br><br><br>
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

.card1{
  border: 1px solid black;
  width: 307px;
  height: 250px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 20px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  text-decoration: none;
  color: black;
}

.card1:hover{
  color: blue;
  cursor: pointer;
}

.img{
  margin: 0 auto;
  border-radius: 10px;
}

.icon1{
  width: 500px;
}

.card-info{
  margin-top: 20px;
  width: 250px;
  height: 100px;
  font-size: 23px;
}

@media screen and (max-width: 800px) {

*{
  overflow: hidden;
}

.main{
  display: flex;
  flex-direction: column;
}

    
}


</style>
