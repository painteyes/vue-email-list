Vue.config.devtools = true;

const newApp = new Vue({
    el: "#root",
    data: 
    {
        emailList:[]
    },
    methods:{
        
    },
    created() {
        
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                console.log(this.emailList.push(response.data.response));
                  console.log(this.emailList);
            })            
        }
    }
});

