const app = new Vue({
  el: "#app",
  data: {
    john: {
      first: "Jhon",
      last: "Doe",
      age: 28,  
    },
    jane: {
      first: "Jane",
      last: "Doe",
      age: 21,
    }
  },
  computed: {
    johnFullName(){
      return `${this.john.first} ${this.john.last}`
    },
    janeFullName(){
      return `${this.jane.first} ${this.jane.last}`
    },
    johnAgeInOneYear(){
      return this.john.age + 1;
    }
  },
  template: `
    <div>
      <h1>first: {{johnFullName}}</h1>
      <h2>Age: {{johnAgeInOneYear}}</h2>
      <hr>
      <h1>first: {{janeFullName}}</h1>
      <h2>Age: {{jane.age}}</h2>
    </div>
  `
})