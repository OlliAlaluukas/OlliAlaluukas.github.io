const user = {
    users: [
        {name:"Teppo Testi",email:"Testi@test.fi",language:"Suomi"},
        {name:"Teppo Testaaja",email:"Test@test.fi",language:"Suomi"},
        {name:"Teppo Testitesti",email:"Testi@testtesti.fi",language:"Ruotsi"}
    ],
    getAllUsers(){
        return this.users;
    },
    getOneUser(id){
        return this.users[id];
    },
    
}