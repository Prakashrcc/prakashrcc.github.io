var inputPipeline= document.getElementById("pipeline");
var inputWins= document.getElementById("wins");
var inputLosses=document.getElementById("losses");
var inputStar=document.getElementById("star");
var inputTarget=document.getElementById("target");
var inputTask=document.getElementById("task");

var pipelineValue=document.getElementById("pipelineValue");
var pipelineBar=document.getElementById("pipelineBar");
var winsValue=document.getElementById("winsValue");
var winsBar=document.getElementById("winsBar");
var lossesValue=document.getElementById("lossesValue");
var lossesBar=document.getElementById("lossesBar");
var targetValue=document.getElementById("targetValue");
var bullEye=document.getElementById("bullEye");
var taskValue=document.getElementById("taskValue");
var taskImg=document.getElementById("taskImg");
var percentage=document.getElementById("percentage");
var percentageImg=document.getElementById("percentageImg");
var strategyYes=document.getElementById("bulbYes");
var strategyNo=document.getElementById("bulb");
var strategyImg=document.getElementById("strategyImg");
var competitorYes=document.getElementById("starYes");
var competitorNo=document.getElementById("star");
var competitorImg= document.getElementById("competitorImg");
var status1=document.getElementById("status1");
var status2=document.getElementById("status2");
var status3= document.getElementById("status3");
var box=document.getElementById("box");
var space1=document.getElementById("space1");
var space2=document.getElementById("space2");
var space3= document.getElementById("space3");
var spaceTitle=document.getElementById("spaceTitle");
var winContainer = document.getElementById("winContainer");
var lossesContainer = document.getElementById("lossesContainer");
var pipelineContainer=document.getElementById("pipelineContainer");
var colorStatus;
var statusValue=status1;


//some prefilled value
inputTarget.value=400000;
inputWins.value=600000;
inputPipeline.value=800000;
inputLosses.value=200000;
inputTask.value=05;


// Pipeline
inputPipeline.onkeyup= function(){
    
    if(inputPipeline.value == '0' || inputPipeline.value < '1'){
        
        //pipelineValue.innerHTML='NO PIPELINE';
        pipelineValue.innerHTML='-';
        pipelineContainer.style.textAlign='center';
        pipelineValue.style.opacity='90%';
        pipelineBar.style.opacity='25%';
    }
    else{
        //pipelineBar.style.opacity='125%';
        //pipelineValue.innerHTML='PIPELINE | $'+ intToString( inputPipeline.value, 2);
        pipelineContainer.style.textAlign='start';
        pipelineValue.innerHTML='$'+ intToString( inputPipeline.value, 2);
    }
}

// Wins
inputWins.onkeyup= function(){
    
    if( inputWins.value < 1){
        
        //  winsValue.innerHTML='NO WINS';
        winsValue.innerHTML='-';
        winContainer.style.textAlign= 'center';
        winsValue.style.opacity='90%';
        winsBar.style.opacity='25%';
        winsBar.style.width='100%';
        percentage.style.opacity='0';
        percentageImg.style.opacity='25%';
    }
    else{
        //winsBar.style.opacity='125%';
        //winsValue.innerHTML='WINS | $'+ intToString(inputWins.value,2);
        winsValue.innerHTML='$'+ intToString(inputWins.value,2);
        winContainer.style.textAlign= 'start';
        var percent= ( inputWins.value / inputPipeline.value ) * 100;
        winsBar.style.width=percent+'%';
        winsBar.style.maxWidth='100%';

        if(inputTarget.value >0){
        percentage.style.opacity='100%';
        percentage.innerHTML= ((inputWins.value / inputTarget.value) * 100)+"%";
        percentageImg.style.opacity='100%';
        }
        else{
            percentage.style.opacity='0';
        percentageImg.style.opacity='25%';
        }
    }
}

// losses
inputLosses.onkeyup= function(){
    
    if( inputLosses.value < 1){
        
       // lossesValue.innerHTML='NO LOSSES';
       lossesValue.innerHTML='-';
       lossesContainer.style.textAlign="center";
        lossesValue.style.opacity='90%';
        lossesBar.style.opacity='25%';
        lossesBar.style.width='100%';
    }
    else{
        //lossesBar.style.opacity='125%';
        //lossesValue.innerHTML='LOSSES | $'+ intToString(inputLosses.value,2);
        lossesValue.innerHTML='$'+ intToString(inputLosses.value,2);
        lossesContainer.style.textAlign="start";
        
        var percent= ( inputLosses.value / inputPipeline.value ) * 100;
        lossesBar.style.width=percent+'%';
        lossesBar.style.maxWidth='100%';
    }
}

//target
inputTarget.onkeyup=function(){
    
    if(inputTarget.value < 1){
        //targetValue.style.opacity='0%';
        targetValue.innerHTML="-";
        bullEye.style.opacity='25%';
        percentage.style.opacity='0';
        percentageImg.style.opacity='25%';
    }
    else{
        targetValue.style.opacity='100%';
        bullEye.style.opacity='100%';
        targetValue.innerHTML='$'+ intToString(inputTarget.value,2); 

        percentage.style.opacity='100%';
        if(inputWins.value >0){
        percentage.innerHTML= ((inputWins.value / inputTarget.value) * 100).toFixed(2)+"%";
        percentageImg.style.opacity='100%';
        }
        else{
            percentage.style.opacity='0';
            percentageImg.style.opacity='25%';  
        }

    }
}

//percentage
inputTask.onkeyup=function(){
    
    if(inputTask.value < 1){
       // taskValue.style.opacity='0%';
        taskImg.style.opacity='25%';
    }
    else{
       // taskValue.style.opacity='100%';
        taskImg.style.opacity='100%';
        taskValue.innerHTML= intToString(inputTask.value,2); 
        if(taskValue.innerHTML <10){
            taskValue.innerHTML="0"+taskValue.innerHTML;
        }
    }
}

//task
inputTask.onkeyup=function(){
    
    if(inputTask.value < 1){
       // taskValue.style.opacity='0%';
        taskImg.style.opacity='25%';
    }
    else{
       // taskValue.style.opacity='100%';
        taskImg.style.opacity='100%';
        taskValue.innerHTML= intToString(inputTask.value,2); 
        if(taskValue.innerHTML <10){
            taskValue.innerHTML="0"+taskValue.innerHTML;
        }
    }
}

//strategy
strategyYes.onclick=function(){
    
    if(strategyYes.checked == true){
        strategyImg.style.opacity="100%";
    }
    else{
        strategyImg.style.opacity="25%";
    }
}
strategyNo.onclick=function(){
    
    if(strategyNo.checked == true){
        strategyImg.style.opacity="25%";
    }
    else{
        strategyImg.style.opacity="100%";
    }
}

//competitor
competitorYes.onclick=function(){
        competitorImg.style.opacity="100%";
    }
competitorNo.onclick=function(){
    
     competitorImg.style.opacity="25%";
    
}

//status
status1.onclick=function(){
    box.style.border=" 1px solid "+colorStatus;
    box.style.background="#d8ffe3";
    status1.className="col-3 option  active";
    status2.className="col-3 option";
    status3.className="col-3 option ";
    statusValue=status1;
    
    document.documentElement.style.setProperty("--selection-background", colorStatus);
}
status2.onclick=function(){
    box.style.border=" 1px solid "+colorStatus;
    box.style.background="white";
    status1.className="col-3 option";
    status2.className="col-3 option active";
    status3.className="col-3 option ";
    statusValue=status2;
    document.documentElement.style.setProperty("--selection-background", colorStatus);
}
status3.onclick=function(){
    box.style.border=" 1px dashed "+colorStatus;
    box.style.background="white";
    status1.className="col-3 option";
    status2.className="col-3 option";
    status3.className="col-3 option active";
    statusValue=status3;
    document.documentElement.style.setProperty("--selection-background", colorStatus);
}

//space
space1.onclick=function(){
    spaceTitle.innerHTML="WHITESPACE";
    spaceTitle.style.color="black";
    spaceTitle.style.background="transparent";
    spaceTitle.style.border="solid 0.5px #000000";
    
}
space2.onclick=function(){
    spaceTitle.innerHTML="BLACKSPACE";
    spaceTitle.style.color="white";
    spaceTitle.style.background="black";
    spaceTitle.style.border="solid 0.5px #000000";
   

   
}
space3.onclick=function(){
    spaceTitle.style.color="transparent";
    spaceTitle.style.background="transparent";
    spaceTitle.style.border="none";
    
}

function colorSelector(color){
    var tick= document.getElementById(color+"-tick");
   
    var x = document.getElementsByClassName("fa-check");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
}
  
    tick.style.display="block";
    colorStatus=color;
    statusValue.click();
}


const COUNT_ABBRS = [ '', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y' ];

function intToString(count, withAbbr = false, decimals = 2) {
    const i     = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    let result  = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    if(withAbbr) {
        result += `${COUNT_ABBRS[i]}`; 
    }
    
    return result;
}

