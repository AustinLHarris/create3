<template>
  <div class="wrapper">
    <div class="products">
        <img src="../assets/Blackout.jpg" alt="Fierce">
    </div>
  </div>
  
</template>



<script>

  export default {
    name: 'HomeComponent',
      props: {
        
      },
    computed: {
      
    }
  }

  
</script>




<style scoped>
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