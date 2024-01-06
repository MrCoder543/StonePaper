var computer=0;
var player=0;
var i = 0;
var o = 0;
//Game Logic
function run1(){
    player=1;
}
function run2(){
    player=2;
}
function run3(){
    player=3;
}

function run(){
    let s1 = 3 - 1 + 1;
    let s2 = Math.random() * s1;
    let computer = Math.floor(s2) + 1;
    
    if(computer==1 && player==1){
        document.getElementById('pla2').style.cssText = 'opacity:1; background:url(rock.jpg);background-size:200px 100%;';
        function vs1(){
        document.getElementById('vs').style.cssText = 'opacity:1; background:url(vs.jpg); background-size:125px 150px;';
        }
        function com(){
        document.getElementById('com2').style.cssText = 'opacity:1; background:url(rock.jpg);background-size:200px 100%;';
        }
        function win(){
        document.getElementById('win').innerText="Draw";
        }
        function reset(){
        document.getElementById('pla2').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('vs').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('com2').style.cssText = 'opacity:0; transition:0.4s;';
        }
        setTimeout(com,3500);
        setTimeout(vs1,2000);
        setTimeout(win,5000);
        setTimeout(reset,5300);
        player=0;
        computer=0;
    }

    if(computer==1 && player==2){
        document.getElementById('pla2').style.cssText = 'opacity:1; background:url(paper.jpg);background-size:200px 100%;';
        function vs2(){
        document.getElementById('vs').style.cssText = 'opacity:1; background:url(vs.jpg); background-size:125px 150px;';
        }
        function com2(){
        document.getElementById('com2').style.cssText = 'opacity:1; background:url(rock.jpg);background-size:200px 100%;';
        }
        function win2(){
        document.getElementById('win').innerText="Player Win";
        i++;
        document.getElementById('ipla').innerText="Player:"+i;
        }
        function reset2(){
        document.getElementById('pla2').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('vs').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('com2').style.cssText = 'opacity:0; transition:0.4s;';
        }
        setTimeout(com2,3500);
        setTimeout(vs2,2000);
        setTimeout(win2,5000);
        setTimeout(reset2,5300);
        player=0;
        computer=0;
    }

    if(computer==1 && player==3){
        document.getElementById('pla2').style.cssText = 'opacity:1; background:url(scissors.jpg);background-size:200px 100%;';
        function vs3(){
        document.getElementById('vs').style.cssText = 'opacity:1; background:url(vs.jpg); background-size:125px 150px;';
        }
        function com3(){
        document.getElementById('com2').style.cssText = 'opacity:1; background:url(rock.jpg);background-size:200px 100%;';
        }
        function win3(){
        document.getElementById('win').innerText="Computer Win";
        o++;
        document.getElementById('icom').innerText="Computer:"+o;
        }
        function reset3(){
        document.getElementById('pla2').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('vs').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('com2').style.cssText = 'opacity:0; transition:0.4s;';
        }
        setTimeout(com3,3500);
        setTimeout(vs3,2000);
        setTimeout(win3,5000);
        setTimeout(reset3,5300);
        player=0;
        computer=0;
    }

    if(computer==2 && player==1){
        document.getElementById('pla2').style.cssText = 'opacity:1; background:url(rock.jpg);background-size:200px 100%;';
        function vs4(){
        document.getElementById('vs').style.cssText = 'opacity:1; background:url(vs.jpg); background-size:125px 150px;';
        }
        function com4(){
        document.getElementById('com2').style.cssText = 'opacity:1; background:url(paper.jpg);background-size:200px 100%;';
        }
        function win4(){
        document.getElementById('win').innerText="Computer Win";
        o++;
        document.getElementById('icom').innerText="Computer:"+o;
        }
        function reset4(){
        document.getElementById('pla2').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('vs').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('com2').style.cssText = 'opacity:0; transition:0.4s;';
        }
        setTimeout(com4,3500);
        setTimeout(vs4,2000);
        setTimeout(win4,5000);
        setTimeout(reset4,5300);
        player=0;
        computer=0;
    }

    if(computer==2 && player==2){
        document.getElementById('pla2').style.cssText = 'opacity:1; background:url(paper.jpg);background-size:200px 100%;';
        function vs5(){
        document.getElementById('vs').style.cssText = 'opacity:1; background:url(vs.jpg); background-size:125px 150px;';
        }
        function com5(){
        document.getElementById('com2').style.cssText = 'opacity:1; background:url(paper.jpg);background-size:200px 100%;';
        }
        function win5(){
        document.getElementById('win').innerText="Draw";
        }
        function reset5(){
        document.getElementById('pla2').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('vs').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('com2').style.cssText = 'opacity:0; transition:0.4s;';
        }
        setTimeout(com5,3500);
        setTimeout(vs5,2000);
        setTimeout(win5,5000);
        setTimeout(reset5,5300);
        player=0;
        computer=0;
    }

    if(computer==2 && player==3){
        document.getElementById('pla2').style.cssText = 'opacity:1; background:url(scissors.jpg);background-size:200px 100%;';
        function vs6(){
        document.getElementById('vs').style.cssText = 'opacity:1; background:url(vs.jpg); background-size:125px 150px;';
        }
        function com6(){
        document.getElementById('com2').style.cssText = 'opacity:1; background:url(paper.jpg);background-size:200px 100%;';
        }
        function win6(){
        document.getElementById('win').innerText="Player Win";
        i++;
        document.getElementById('ipla').innerText="Player:"+i;
        }
        function reset6(){
        document.getElementById('pla2').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('vs').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('com2').style.cssText = 'opacity:0; transition:0.4s;';
        }
        setTimeout(com6,3500);
        setTimeout(vs6,2000);
        setTimeout(win6,5000);
        setTimeout(reset6,5300);
        player=0;
        computer=0;
    }

    if(computer==3 && player==1){
        document.getElementById('pla2').style.cssText = 'opacity:1; background:url(rock.jpg);background-size:200px 100%;';
        function vs7(){
        document.getElementById('vs').style.cssText = 'opacity:1; background:url(vs.jpg); background-size:125px 150px;';
        }
        function com7(){
        document.getElementById('com2').style.cssText = 'opacity:1; background:url(scissors.jpg);background-size:200px 100%;';
        }
        function win7(){
        document.getElementById('win').innerText="Player Win";
        i++;
        document.getElementById('ipla').innerText="Player:"+i;
        }
        function reset7(){
        document.getElementById('pla2').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('vs').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('com2').style.cssText = 'opacity:0; transition:0.4s;';
        }
        setTimeout(com7,3500);
        setTimeout(vs7,2000);
        setTimeout(win7,5000);
        setTimeout(reset7,5300);
        player=0;
        computer=0;
    }

    if(computer==3 && player==2){
        document.getElementById('pla2').style.cssText = 'opacity:1; background:url(paper.jpg);background-size:200px 100%;';
        function vs8(){
        document.getElementById('vs').style.cssText = 'opacity:1; background:url(vs.jpg); background-size:125px 150px;';
        }
        function com8(){
        document.getElementById('com2').style.cssText = 'opacity:1; background:url(scissors.jpg);background-size:200px 100%;';
        }
        function win8(){
        document.getElementById('win').innerText="Computer Win";
        o++;
        document.getElementById('icom').innerText="Computer:"+o;
        }
        function reset8(){
        document.getElementById('pla2').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('vs').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('com2').style.cssText = 'opacity:0; transition:0.4s;';
        }
        setTimeout(com8,3500);
        setTimeout(vs8,2000);
        setTimeout(win8,5000);
        setTimeout(reset8,5300);
        player=0;
        computer=0;
    }

    if(computer==3 && player==3){
        document.getElementById('pla2').style.cssText = 'opacity:1; background:url(scissors.jpg);background-size:200px 100%;';
        function vs9(){
        document.getElementById('vs').style.cssText = 'opacity:1; background:url(vs.jpg); background-size:125px 150px;';
        }
        function com9(){
        document.getElementById('com2').style.cssText = 'opacity:1; background:url(scissors.jpg);background-size:200px 100%;';
        }
        function win9(){
        document.getElementById('win').innerText="Draw";
        }
        function reset9(){
        document.getElementById('pla2').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('vs').style.cssText = 'opacity:0; transition:0.4s;';
        document.getElementById('com2').style.cssText = 'opacity:0; transition:0.4s;';
        }
        setTimeout(com9,3500);
        setTimeout(vs9,2000);
        setTimeout(win9,5000);
        setTimeout(reset9,5300);
        player=0;
        computer=0;
    }
}

function reset(){
    i=0;
    o=0;
    document.getElementById('win').innerText="";
    document.getElementById('ipla').innerText="Player:0";
    document.getElementById('icom').innerText="Computer:0";
}