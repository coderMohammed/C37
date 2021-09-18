class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();

    player = new Player();
    player.getCount();

    car1 = createSprite(width/2-100,height-100);
    car1.addImage("car1",car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width/2+100,height-100);
    car2.addImage("car2",car2_img);
    car2.scale = 0.07;
    
    cars = [car1,car2];
  }
    
  getState(){
    database.ref("gameState").on("value",(data)=>{
      gameState = data.val();   
    })
  }
    
  updateState(state){
    database.ref("/").update({
      gameState:state,
    })
  }

  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  
  play(){
    
    this.handleElements();
    
    Player.allPlayersInfo();

    if(allPlayers !== undefined ){
      image(track_img,0,-height*5,width,height*6);
    }

    drawSprites()
  }
}
