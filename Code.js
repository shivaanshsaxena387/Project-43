//some constant answers to the asked questins 
const accessCode1 = "PROGRAM";
const accessCode2 = "FUNCTION";
const accessCode3 = "PATIENCE";

function clues() {
    
    //intro
    fill("white");
    textSize(22);
    text("Answer the questions truely to unlock the Genie's secret treasury !!", 80, 480);

    //1st quiz
    fill("white");
    textSize(15);
    text("G R O A M R P", 100,50);
    fill("lightblue");
    text("Hint: It describes the set of instructions that ", 100,70);
    text("computer needs to work on !!", 100,85);

    //2nd quiz
    fill("white");
    textSize(15);  
    text("C U T N I F O N", 700,50);
    fill("lightblue");
    text("Hint: A short sections of code written to ", 700,70);
    text("complete a task !! ", 700,85);

    //3rd quiz
    fill("white");
    textSize(15);
    text("E N T I E P C A", 400,250);
    fill("lightblue");
    text("Hint: Most important virtue to ", 400,270);  
    text("have while programming !!", 400,285);  
}