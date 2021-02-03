class Parent {
    constructor(){
        this.fatherName = "Jewel Rana";
        this.fatherProperty = "Nothing";
    }
}
class Son extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.fatherName + " " + this.name + " " + this.fatherProperty;
    }
}

const firstSon = new Son("Bin Sakib");
const secondSon = new Son ("Bin Sajedul");
 console.log(firstSon.getFullName(),secondSon.getFullName());