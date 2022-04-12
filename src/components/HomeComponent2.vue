<template>
  <div class="wrapper">
    <div class="products" id="changePic">
        <img src="../assets/Blackout.jpg" alt="Fierce" >
    </div>
    <div>
      <button @click="changeFace">A Secret Button</button>
      <br>
      <br>
      <div class="space"></div>
      <button @click="changeFace2" id="hidden">A Second Secret Button</button>
    </div>
  </div>
  
</template>



<script>

  export default {
    name: 'HomeComponent2',
      props: {
        
      },
    computed: {
      
    },
    methods: {
    async changeFace() {
      document.getElementById("changePic").innerHTML = '<img src="../../public/rubber.jpg" alt="Fierce"><h1 class="bold">Nice Job! But you better move quick!</h1>';
      document.getElementById("hidden").style.display = "block";
      document.getElementById("hidden").style.display = "block";
    },
    setTimeout(){
      document.getElementById("changePic").innerHTML = '<h1 class="bold">Did you get it?</h1>';
    },
    doAdelay(){
      setTimeout(function(){return true;},3000);
    },
    performFunctionXAfterDelay() {
        // 1000 ms delay
        window.setTimeout(this.setTimeout,1000)

    },
    async changeFace2() {
      document.getElementById("changePic").innerHTML = '<h3> Heres your code for half off on register fees! </h3> <h2> HappyDuck! </h2>';
     
    },

    functionX() {
      // YOUR TIME DELAYED CODE
    }
    
  }
  }

  
</script>




<style scoped>

.space {
  margin-top: 60px;
}
#hidden {
  display: hidden;
}
#changePic{
  text-align: center;
}
.bold{
  font-size: 40px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 300px;
}

/* img {
  /* border: 2px solid #333; 
  object-fit: cover;
} */

template { 
  background: url(../assets/Blackout.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
form {
  border: 2px solid #333;
  height: 250px;
  width: 300px;
  object-fit: cover;
}

.info {
  background: #0a8373;
  color: #000;
  padding: 10px 30px;
  height: 125px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 14px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>