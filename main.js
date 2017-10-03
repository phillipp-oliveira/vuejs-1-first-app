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
  },
  filters: {
    fullName(obj){
      return `${obj.first } ${obj.last}`
    },
    ageInOneYear(obj){
      return obj.age + 1;
    }
  },
  template: `
    <div>
      <h1>first: {{john | fullName}}</h1>
      <h2>Age: {{john | ageInOneYear}}</h2>
      <hr>
      <h1>first: {{jane | fullName}}</h1>
      <h2>Age: {{jane | ageInOneYear}}</h2>
    </div>
  `
})