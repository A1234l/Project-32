const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bImg;
var hrTime;
var bg;
var hOur;
var temporaryBg;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    temporaryBg = loadImage('sunrise5.png');
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(temporaryBg);
    // add condition to check if any background image is there to add
    if(bImg){
        background(bImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    if(hOur>=12 && hOur<=23){
        textSize(40);
        text('Time: '+hOur+' PM',100,100);
    } else{
        textSize(40);
        text('Time: '+hOur+' AM',100,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    //change the data in JSON format
    var TiMeJSON = await response.json();
    // write code slice the datetime
    var dateTIme = TiMeJSON.datetime;
    hOur = dateTIme.slice(11,13);
    // console.log(dateTIme);
    // console.log(hrTime);

    // add conditions to change the background images from sunrise to sunset
    if(hOur>=21 && hOur<=3){
        bg = 'sunset12.png';
    } else if(hOur>=3 && hOur<=5){
        bg = 'sunrise1.png';
    } else if(hOur>=5 && hOur<=7){
        bg = 'sunrise2.png';
    } else if(hOur>=7 && hOur<=9){
        bg = 'sunrise3.png';
    } else if(hOur>=9 && hOur<=11){
        bg = 'sunrise4.png';
    } else if(hOur>=11 && hOur<=14){
        bg = 'sunrise5.png';
    } else if(hOur>=14 && hOur<=16){
        bg = 'sunset7.png';
    } else if(hOur>=16 && hOur<=17){
        bg = 'sunset9.png';
    } else if(hOur>=17 && hOur<= 18){
        bg = 'sunset10.png';
    } else if(hOur>=18 && hOur<=21){
        bg = 'sunset11.png';
    }

    //load the image in backgroundImg variable here
    bImg = loadImage(bg);
}
