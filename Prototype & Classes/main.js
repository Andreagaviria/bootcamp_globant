var persona={
    name: "andrea"
    lastName:"gaviria"

}

persona.gender ="f"
console.log(persona)

//funciones constructoras

function person(name, lastName, gender){
this.name = name;
this.lastName = lastName;
this.gender = gender;

}

var me = new person ("andrea", "gavira", "f");

//metodos
person.prototype.introduce=function (){
    console.log("hi I'm ${this.name} ${this.lastName}")

}

//como ejecutar los metodos
me.introduce();

function Developer (name, lastName, gender, yearsOfExperience){
 person.call(this, name, lastName, gender);
 this.yearsOfExperience=yearsOfExperience;

}

Developer.prototype=object.create(person.prototype);

var me = new ("andrea", "gaviria", "f", "3" )


Developer.prototype.introduceAboutJob = function (){
    console.log("Hi, I'm ${this.name} ${this.lastName} and I have ${yearsOfExperience}");


}


var me4 = new("mateo", "gaviria", "m", 5);
me4.introduceAboutJob()
me4.introduce()

class personwithclass{
     constructor(name, lastName, gender){
         this.name=name;
         this.lastName=lastName;
         this.gender=gender;
         

     }
     Introduce(){
         console.log("hi I'm ${this.name} ${this.lastName}" );

     }

}

var me55 =new personWithclass ("andrea", "gaviria", "m" );
console.log(me55.introduce(), "introduce");

class DeveloperWithclass extends personWithclas{
    constructor(name, lastName, gender, yearsOfExperience){
        super(name, lastName, gender);
        this.yearsOfExperience=yearsOfExperience

    }
    introduceAboutJob(){
        console.log("Hi I'm ${this.name} ${this.lastName} and I have ${this.yearsOfExperience}");

    }
}

var me66 =  new personwithclass