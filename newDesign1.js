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
var status4=document.getElementById("status4");
var box2=document.getElementById("box2");
var space1=document.getElementById("space1");
var space2=document.getElementById("space2");
var space3= document.getElementById("space3");
var spaceTitle=document.getElementById("spaceTitle");
var winContainer = document.getElementById("winContainer");
var lossesContainer = document.getElementById("lossesContainer");
var pipelineContainer=document.getElementById("pipelineContainer");
var cube=document.getElementById("cube");
var circle=document.getElementById("circle");
var adjust=document.getElementById("adjust");
var allContainer=document.getElementById("allContainer");

var box1 = document.getElementById("box1");
var competitorImg1=document.getElementById("competitorImg1");
var spaceTitle1=document.getElementById("spaceTitle1");
var strategyImg1=document.getElementById("strategyImg1");
var pipelineValue1=document.getElementById("pipelineValue1");
var pipelineBar1=document.getElementById("pipelineBar1");
var bullEye1=document.getElementById("bullEye1");
var winsValue1=document.getElementById("winsValue1");
var winsBar1=document.getElementById("winsBar1");
var targetValue1=document.getElementById("targetValue1");
var lossesValue1=document.getElementById("lossesValue1");
var lossesBar1=document.getElementById("lossesBar1");
var percentageImg1=document.getElementById("percentageImg1");
var percentage1=document.getElementById("percentage1");
var taskImg1=document.getElementById("taskImg1");
var taskValue1=document.getElementById("taskValue1");

var colorStatus="#008000";
var statusValue=status1;
var tick1= document.getElementById(colorStatus+"-tick");
tick1.style.display="block";


//some prefilled value
inputTarget.value=400000;
inputWins.value=600000;
inputPipeline.value=800000;
inputLosses.value=200000;
inputTask.value=05;
strategyYes.value="select";
competitorYes.value="chosen";
//strategyYes.value="chosen";
var template = document.getElementById("template").value;

var doc;
var template = document.getElementById("template").value;
            
            $("#template").change(function(){
    
                
                if($(this).val() == 'template1'){
                    
                    template="template1";
                    document.getElementById("box1").style.display="block";
                    document.getElementById("box2").style.display="none";
                   
                }
                else{
                    
                    template="template2";
                    document.getElementById("box1").style.display="none";
                    document.getElementById("box2").style.display="block";
                    
    
                }
                
                
                
            });

// Pipeline
inputPipeline.onkeyup= function(){
    
    if(inputPipeline.value == '0' || inputPipeline.value < '1'){
        
        
            pipelineValue1.innerHTML='&#8213';
            pipelineValue1.style.color='#a0a2a4';
            pipelineBar1.style.opacity='10%';
            pipelineValue1.style.opacity='90%';
        
        
            //pipelineValue.innerHTML='NO PIPELINE';
        removeAll();
        pipelineValue.innerHTML='&#8213';
        pipelineValue.style.color='#a0a2a4';
        pipelineContainer.style.textAlign='center';
        pipelineValue.style.opacity='90%';
        
        
        
    }
    else{
        
        
            pipelineBar1.style.opacity='125%';
            pipelineValue1.style.color='black';
            pipelineValue1.innerHTML='PIPELINE | $'+ intToString( inputPipeline.value, 2);
        
        
            removeAll();
            //pipelineBar.style.opacity='125%';
        //pipelineValue.innerHTML='PIPELINE | $'+ intToString( inputPipeline.value, 2);
        pipelineContainer.style.textAlign='start';
        pipelineValue.style.color='black';
        pipelineValue.innerHTML='$'+ intToString( inputPipeline.value, 2);
        
        
    }
}

// Wins
inputWins.onkeyup= function(){
    
    if( inputWins.value < 1){
        
            winsValue1.innerHTML='&#8213';
            winsValue1.style.color='#a0a2a4';
            winsBar1.style.opacity='25%';
            winsBar1.style.width='100%';
            percentage1.style.opacity='0';
            //percentageImg1.style.opacity='10%';
        
        
            removeAll();
            //  winsValue.innerHTML='NO WINS';
            winsValue.innerHTML='&#8213';
            winsValue.style.color='#a0a2a4';
            winContainer.style.textAlign= 'center';
            winsValue.style.opacity='90%';
            //winsBar.style.opacity='25%';
            //winsBar.style.width='100%';
            percentage.style.opacity='0';
            //percentageImg.style.opacity='25%';
        
       
    }
    else{
        
            winsBar1.style.opacity='125%';
            winsValue1.style.color='black';
            winsValue1.innerHTML='WINS | $'+ intToString(inputWins.value,2);
            var percent= ( inputWins.value / inputPipeline.value ) * 100;
            winsBar1.style.width=percent+'%';
            winsBar1.style.maxWidth='100%';
            percentage1.style.opacity='100';
        
        
            removeAll();
        //winsBar.style.opacity='125%';
        //winsValue.innerHTML='WINS | $'+ intToString(inputWins.value,2);
        winsValue.innerHTML='$'+ intToString(inputWins.value,2);
        winsValue.style.color='#00bd77';
        winContainer.style.textAlign= 'start';
        var percent= ( inputWins.value / inputPipeline.value ) * 100;
        //winsBar.style.width=percent+'%';
        //winsBar.style.maxWidth='100%';
        
        

        if(inputTarget.value >0){
        percentage.style.opacity='100%';
        percentage.innerHTML= ((inputWins.value / inputTarget.value) * 100)+"%";
        percentage1.innerHTML= ((inputWins.value / inputTarget.value) * 100)+"% ACHEIVED";
        //percentageImg.style.opacity='100%';
        }
        else{
            percentage.style.opacity='0';
        //percentageImg.style.opacity='10%';
        }
    }
}

// losses
inputLosses.onkeyup= function(){
    
    if( inputLosses.value < 1){
        
            lossesValue1.innerHTML='&#8213';
            lossesValue1.style.color='#a0a2a4';
            lossesBar1.style.opacity='25%';
            lossesBar1.style.width='100%';
        
        removeAll();
       // lossesValue.innerHTML='NO LOSSES';
       lossesValue.innerHTML='&#8213';
       lossesValue.style.color='#a0a2a4';
       lossesContainer.style.textAlign="center";
        lossesValue.style.opacity='90%';
        
    }
    else{
        
            lossesBar1.style.opacity='125%';
            lossesValue1.innerHTML='LOSSES | $'+ intToString(inputLosses.value,2);
            lossesValue1.style.color='black';
            var percent= ( inputLosses.value / inputPipeline.value ) * 100;
            lossesBar1.style.width=percent+'%';
            lossesBar1.style.maxWidth='100%';
        
        removeAll();
        //lossesBar.style.opacity='125%';
        //lossesValue.innerHTML='LOSSES | $'+ intToString(inputLosses.value,2);
        lossesValue.innerHTML='$'+ intToString(inputLosses.value,2);
        lossesValue.style.color='#ff5757';
        lossesContainer.style.textAlign="start";
        
        
    }
}


//target
inputTarget.onkeyup=function(){
    
    if(inputTarget.value < 1){
        
            targetValue1.style.opacity='0%';
            targetValue1.innerHTML="&#8213";
            targetValue1.style.color='#a0a2a4';
        
            bullEye1.style.opacity='0%';
            percentage1.style.opacity='0';
           // percentageImg1.style.opacity='10%';
        
        targetValue.style.opacity='0%';
        targetValue.innerHTML="&#8213";
        targetValue.style.color='#a0a2a4';
        
        bullEye.style.opacity='0%';
        percentage.style.opacity='0';
        //percentageImg.style.opacity='10%';
    }
    else{
        
            targetValue1.style.opacity='100%';
            targetValue1.style.color='black';
            bullEye1.style.opacity='100%';
            targetValue1.innerHTML='$'+ intToString(inputTarget.value,2); 

            percentage1.style.opacity='100%';
        
        targetValue.style.opacity='100%';
        targetValue.style.color='black';
        bullEye.style.opacity='100%';
        targetValue.innerHTML='$'+ intToString(inputTarget.value,2); 

        percentage.style.opacity='100%';
        if(inputWins.value >0){
        percentage.innerHTML= ((inputWins.value / inputTarget.value) * 100).toFixed(2)+"%";
        percentage1.innerHTML= ((inputWins.value / inputTarget.value) * 100).toFixed(2)+"% ACHEIVED";
        percentageImg.style.opacity='100%';
        percentageImg1.style.opacity="100%";
        }
        else{
            percentage.style.opacity='0';
            percentageImg.style.opacity='10%';  
            percentage1.style.opacity='0';
            percentageImg1.style.opacity='10%'; 
        }

    }
}

//percentage
inputTask.onkeyup=function(){
    
    if(inputTask.value < 1){
       
            //taskValue1.style.opacity="0%";
            taskImg1.style.opacity='10%';
        
        //taskValue.style.opacity='0%';
        taskImg.style.opacity='10%';
    }
    else{
        
            taskImg1.style.opacity='100%';
        //taskValue1.innerHTML= intToString(inputTask.value,2); 
        
        
       // taskValue.style.opacity='100%';
        taskImg.style.opacity='100%';
       // taskValue.innerHTML= intToString(inputTask.value,2); 
        
    }
}
/*
//task
inputTask.onkeyup=function(){
    
    if(inputTask.value < 1){
       // taskValue.style.opacity='0%';
        taskImg.style.opacity='10%';
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
*/
//strategy
strategyYes.onclick=function(){
    
    if(strategyYes.checked == true){
        strategyImg.style.opacity="100%";
        strategyImg1.style.opacity="100%";
    }
    else{
        strategyImg.style.opacity="10%";
        strategyImg1.style.opacity="10%";
    }
}
strategyNo.onclick=function(){
    
    if(strategyNo.checked == true){
        strategyImg.style.opacity="10%";
        strategyImg1.style.opacity="10%";
    }
    else{
        strategyImg.style.opacity="100%";
        strategyImg1.style.opacity="100%";
    }
}

//competitor
competitorYes.onclick=function(){
        competitorImg.style.opacity="100%";
        competitorImg1.style.opacity="100%";
    }
competitorNo.onclick=function(){
    
     competitorImg.style.opacity="10%";
     competitorImg1.style.opacity="10%";
    
}

//status
status1.onclick=function(){
    box2.style.border=" 1px solid "+colorStatus;
    box2.style.background=hexToRGB(colorStatus);
    box1.style.border=" 1px solid "+colorStatus;
    box1.style.background=hexToRGB(colorStatus);
    cube.style.display="none";
    circle.style.display="none";
    adjust.style.display="none";

    status1.className="col-3 option  active";
    status2.className="col-3 option";
    status3.className="col-3 option ";
    status4.className="col-3 option ";
    statusValue=status1;
    
    document.documentElement.style.setProperty("--selection-background", colorStatus);
}
status2.onclick=function(){
    box1.style.border=" 1px solid "+colorStatus;
    box1.style.background="white";
    box2.style.border=" 1px solid "+colorStatus;
    box2.style.background="white";
    cube.style.display="inline-block";
    cube.style.color=colorStatus;
    circle.style.display="none";
    circle.style.color=colorStatus;
    adjust.style.display="none";
    status1.className="col-3 option";
    status2.className="col-3 option active";
    status3.className="col-3 option ";
    status4.className="col-3 option ";
    statusValue=status2;
    document.documentElement.style.setProperty("--selection-background", 'transparent');
}
status3.onclick=function(){
    box2.style.border=" 1px dashed "+colorStatus;
    box2.style.background="white";
    box1.style.border=" 1px dashed "+colorStatus;
    box1.style.background="white";
    circle.style.display="inline-block";
    circle.style.color=colorStatus;
    cube.style.display="none";
    cube.style.color=colorStatus;
    adjust.style.display="none";
    status1.className="col-3 option";
    status2.className="col-3 option";
    status3.className="col-3 option active";
    status4.className="col-3 option ";
    statusValue=status3;
    document.documentElement.style.setProperty("--selection-background", 'transparent');
}
status4.onclick=function(){
    box2.style.border=" 1px solid "+colorStatus;
    box2.style.background="white";
    box1.style.border=" 1px solid "+colorStatus;
    box1.style.background="white";
    adjust.style.display="inline-block";
    adjust.style.color=colorStatus;
    circle.style.display="none";
    circle.style.color=colorStatus;
    cube.style.display="none";
    circle.style.display="none";
    status1.className="col-3 option";
    status2.className="col-3 option ";
    status3.className="col-3 option ";
    status4.className="col-3 option active";
    statusValue=status2;
    document.documentElement.style.setProperty("--selection-background", 'transparent');
}

//space
space1.onclick=function(){
    spaceTitle.innerHTML="WHITESPACE";
    spaceTitle.style.color="black";
    spaceTitle1.innerHTML="WHITESPACE";
    spaceTitle1.style.color="black";
    spaceTitle.style.background="transparent";
    spaceTitle.style.border="solid 0.5px #000000";
    spaceTitle1.style.background="transparent";
    
}
space2.onclick=function(){
    spaceTitle.innerHTML="BLACKSPACE";
    spaceTitle.style.color="white";
    spaceTitle.style.background="black";
    spaceTitle.style.border="solid 0.5px #000000";
    spaceTitle1.innerHTML="BLACKSPACE";
    spaceTitle1.style.color="white";
    spaceTitle1.style.background="black";
    
   

   
}
space3.onclick=function(){
    spaceTitle.style.color="transparent";
    spaceTitle.style.background="transparent";
    spaceTitle.style.border="none";
    spaceTitle1.style.color="transparent";
    spaceTitle1.style.background="transparent";
    spaceTitle1.style.border="none";
    
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
function hexToRGB(h) {
    let r = 0, g = 0, b = 0,a=0.1;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return "rgba("+ +r + "," + +g + "," + +b + "," + +a + ")";
  }

  function removeAll(){
      if(inputWins.value< 1 && inputLosses.value < 1 && inputPipeline.value < 1){
        allContainer.style.opacity="0";
        var x=document.getElementById("bowl");
            x.style.opacity = '0';
       
      }
      else{
          allContainer.style.opacity="100";
          var x=document.getElementById("bowl");
          x.style.opacity = '100';
      }
  }

