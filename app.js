
Vue.createApp({
    data(){
        return {
          firstname: "Dagic zewdu",
          lastname: "Tilahun",
          gender:"male",
          email: "dagic@gmail.com",
          picture :"https://randomuser.me/api/portraits/men/47.jpg" 
        }
    },
    methods: {
    async getUsers(){
      let req=await fetch('https://randomuser.me/api/')
      let res=await req.json()
      let [person]=res.results
      this.firstname=person.firstname
      this.lastname=person.lastname
      this.gender=person.gender
      this.email=person.email
      this.picture=person.picture.large
    }}
}).mount("#app")