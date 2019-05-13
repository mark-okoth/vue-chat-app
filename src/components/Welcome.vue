<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="#4a148c purple darken-4-text">Welcome</h2>
        <form @submit.prevent="enterChart">
          <label for="name">Enter Your Name</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn #4a148c purple darken-4">Chart Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback:null
    };
  },
  methods:{
    enterChart(){
      if(this.name){
        this.$router.push({ name: 'Chat', params:{name: this.name}})

      }else{
       this.feedback= "you must enter a name to join"
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 
.welcome{
  max-width: 400px;
  margin-top: 100px;
}


.welcome h2{

  font-size: 3em;
}
.welcome button{
  margin: 30px auto;
}

</style>
