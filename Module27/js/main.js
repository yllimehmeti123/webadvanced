//Functions


function showMessage(){
    alert("This message is inside the showMessage()function");
}
showMessage();


//funksioni me parametra
function sum(number1,number2,number3,number4){
    return number1 + number2 + numri3 + numri4;
}

console.log(sum(25,5,10,2));

function sum(numri1,numri2){
    return numri1/numri2 ;
}

console.log(pjestimi(30,10));


//fahrenheit to celsius
function toCelsius(f){
    return (5/9) * (f-32);

}

console.log("54 fahrenheit is equal to " + toCelsius(54)+"celsus");

var rezultati = toCelsius(54);


console.log(" 54 fahrenheit is equal to " + rezultati +"celsus");

function toSeconds(minutes){
    return minutes * 60;
}
console.log(toSeconds(2));
console.log(toSeconds(23));

//Objektet - Object

var car = {
    name:"Mercedes",
    color:"red"
    year:2020,
    kilometers:0,
    startEngine:function(){
        alert("VROOOOOMMM!!!!!")
    },
    get getKilometers(km){
        this.kilometers = km
    }
};

console.log(car.getKilometers);
var.setKilometers = 100;
console.log(car.getKilometers);

var school = {
    name:"Digital School",
    subject:"Programming",
    sudents: 1500,
    year:2016

};

// alert(car.name)
// alert(car.color)
// startEnginecar()
// alert(school.name)

var computer = new Object ();

computer.name = "Lenovo";
computer.CPU = "Intel core i7";
computer.RAM = "16GB";
computer.GPU = "GeForce  GT730 2GB Dual DP HP";

computer.TYPE = function(){
    RETURN this.NAME + ", " + this.CPU + ", " + THIS + ", "+ this.GPU;

}

alert(computer.GPU);
alert(computer.TYPE())
delete computer.GPU;
alert(computer.GPU);

function Computer (name,CPU,RAM,GPU){
    this.name = name;
    this.CPU = RAM;
    this.RAM = RAM,
    this.GPU = GPU;
}
var computer1 = new Computer("macbook","m1","8gn","5600M gpu");
var comuter2 = new Computer("Acer","Intelcore i3", "8gb", "integrated");


