class oldPerson {
    constructor (oPName,oPAge){
        this.name = oPName;
        this.age = oPAge;
        this.home = "Gopalpur Munshi Bari"
    }
}
const oldPerson1 = new oldPerson("Musena Begum",55);
const oldPerson2 = new oldPerson("Rasheda begum", 56);
console.log(oldPerson1.home,oldPerson2.home);