class Form{
    constructor(){
        this.input= createInput("Name");
        this.button= createButton("Play");
        this.greeting= createElement('h3');

    }
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}
display(){
    var title= createElement('h3');
    title.html("CarRacer");
    title.position(displayWidth/2,40);
    
   this.input.position(displayWidth/2,displayHeight/2-30);
    this.button.position(displayWidth/2,displayHeight/2+25);
    this.button.mousePressed(()=>{
        this.input.hide();
       this.button.hide();
        player.name= this.input.value();
        playercount+=1;
        player.index = playercount;
        player.update();
        player.updatecount(playercount);
        this.greeting.html("Welcome!"+ player.name);
        this.greeting.position(displayWidth/2,250);
    })
}
}