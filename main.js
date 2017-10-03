const app = new Vue({
  el: "#app",
  data: {
    john: {
      name: "Jhon",
      age: 26,  
    },
    doe: {
      name: "Doe",
      age: 31,
    }
  }, 
  template: `
    <div>
      <h1>Name: {{john.name}}</h1>
      <h2>Age: {{john.age}}</h2>
      <hr>
      <h1>Name: {{doe.name}}</h1>
      <h2>Age: {{doe.age}}</h2>
    </div>
  `
})