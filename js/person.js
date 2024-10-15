class Person {
    constructor(n,e,l){
        this.name = n;
        this.email = e;
        this.language = l;
    }
    getPerson(){
        return "nimi = "+this.name+" email = "+this.email+" kieli = "+this.language;
    }
}