class Security {

    constructor(){

        //input boxe 1
        this.access1 = createInput().attribute("placeholder", "Your Answer");
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        //check button 1
        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        //input box 2
        this.access2 = createInput().attribute("placeholder", "Your Answer");
        this.access2.position(700,90);
        this.access2.style('background', 'white');  

        //check button 2 
        this.button2 = createButton('Check');
        this.button2.position(700,120);
        this.button2.style('background', 'lightgrey');

        //input box 3
        this.access3 = createInput().attribute("placeholder", "Your Answer");
        this.access3.position(400,290);
        this.access3.style('background', 'white');  

        //check button 3
        this.button3 = createButton('Check');
        this.button3.position(400,320);
        this.button3.style('background', 'lightgrey');
        
    }

    //display
    display(){

        // 1st button function as mouse is pressed
        this.button1.mousePressed(() => {
            click.play();
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        // 2nd button function as mouse is pressed
        this.button2.mousePressed(() => {
            click.play();
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        // 3rd button function as mouse is pressed
        this.button3.mousePressed(() => {
            click.play();
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

    }
  
}
