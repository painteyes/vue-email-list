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
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
            console.log(this.emailList.push(response.data.response));
            console.log(this.emailList);
        });  

    }
});

