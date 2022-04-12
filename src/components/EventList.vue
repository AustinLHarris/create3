<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="event in events" :key="event.id">
        <div class="info">
          <h1>{{event.title}}</h1>
          <!-- <p>{{event.date}}</p> -->
          <p>Venue: {{event.venue}} </p>
        </div>
        <div class="image">
          <img :src="event.image">
        </div>
        
        <div class="price">
          <h2>{{event.date}}</h2>
          <button class="auto" @click="Register(event)">Register</button>
        </div>
      </div>
      
    </div>
    <div id="form"></div>
  </div>
</template>



<script>
  export default {
    methods: {
      Register(arg) {
        this.$root.$data.calendar.push(arg);
        document.getElementById("form").innerHTML =  "<form v-if='creating' @submit.prevent='addTicket'><input v-model='firstname' placeholder='First Name'><input v-model='lastname' placeholder='Last Name'><input v-model='number' placeholder='Phone Number'><input v-model='email' placeholder='Email'><p></p><textarea v-model='problem' placeholder='Comments'></textarea><br /><button type='submit'>Submit</button></form>";
        this.$root.$data.total += arg.price;
      }
    },
    name: 'EventList',
      props: {
        events: Array
      },
    computed: {
      cart() {
        return this.$root.$data.calendar.length;
      }
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

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 300px;
  object-fit: cover;
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