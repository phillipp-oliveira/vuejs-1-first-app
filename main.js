Vue.component('friend-component',{
  props: ['friend'],
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
      <h4>{{friend | fullName}}</h4>
      <h5>age: {{friend.age}}</h5>
      <button v-on:click="decrementAge(friend)">-</button>
      <button v-on:click="incrementAge(friend)">+</button>
      <input v-model="friend.first" />
      <input v-model="friend.last" />
    </div>
  `
});

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
    
  },
  methods: {
    
  },
  template: `
    <div>
      <friend-component v-for="item in friends" v-bind:friend="item" />
    </div>
  `
})