const app = new Vue({
  el: "#app",
  data: {
    friends: [
      {
        first: "John",
        last: "Doe",
        age: 28,  
      },
      {
        first: "Jane",
        last: "Doe",
        age: 21,
      },
    ], 
  },
  filters: {
    fullName(obj){
      return `${obj.last }, ${obj.first}`
    },
    ageInOneYear(obj){
      return obj.age + 1;
    }
  },
  methods: {
    incrementAge(friend){
      friend.age = friend.age +1;
    },
    decrementAge(friend){
      friend.age = friend.age -1;
    }
  },
  template: `
    <div>
      <h2 v-for="friend in friends"> 
        <h4>{{friend | fullName}}</h4>
        <h5>age: {{friend.age}}</h5>
        <button v-on:click="decrementAge(friend)">-</button>
        <button v-on:click="incrementAge(friend)">+</button>
        <input v-model="friend.first" />
        <input v-model="friend.last" />
      </h2>
    </div>
  `
})