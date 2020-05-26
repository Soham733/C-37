class Game{
    constructor(){

    }
getstate(){
    var refgame=database.ref('Gamestate');
    refgame.on("value",function(data){
     Gamestate = data.val();
    })
}
update(state){
    database.ref('/').update({
        Gamestate:state
    })
}
async start(){
    if(Gamestate===0){
        player= new Player();
        var Playerref=await database.ref('Playercount').once("value");
        if(Playerref.exists()){
            playercount=Playerref.val();
            player.getcount();
        }
        form= new Form();
        form.display();
    }
    car1= createSprite(100,200);
    car2= createSprite(300,200);
    car3= createSprite(500,200);
    car4= createSprite(700,200);
    CAR=[car1,car2,car3,car4];
}
play(){
    form.hide();
    textSize(17);
    text("GAME HAS STARTED!",250,40);
    Player.getinfo();
    if(playerId!==undefined){
        var index=0;
        var x=0
        var y;
        for(var plr in playerId){
            index=index+1;
            x=x+200
            y=displayHeight-playerId[plr].distance;
            CAR[index-1].x=x;
            CAR[index-1].y=y;
            if(index===player.index){
                CAR[index-1].shapeColor="yellow";
                camera.position.x=displayWidth/2;
                camera.position.y=CAR[index-1].y;
            }
        }
    
        
    
}
if(keyIsDown(UP_ARROW)&& player.index!==null){
    player.distance+=50
    player.update();
}
drawSprites();
}
}