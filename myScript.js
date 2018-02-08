


var arr = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L','M','M','N','N','O','O','P','P','Q','Q','R','R'];

var click=0;


Array.prototype.shuffle = function() {

   var l = this.length;
   
   for (i=0; i<l; i++) {
        var temp='';
        var random_number= Math.floor(Math.random()* l);
        temp = this[i];
        this[i]= this[random_number];
        this[random_number]= temp;
        }
}


    
    function create_divs() {

        arr.shuffle();
        var l= arr.length;
        var output = '';
        
            for (i=0; i<l; i++) {
            output+= '<div id="card'+i+'" onclick="run_me()" (this,\''+arr[i]+'\')>'+arr[i]+'</div>';
            }
        document.getElementById('board').innerHTML =output;
    }



    
        var location1;
        var location2;
    
        function run_me()  {  
            
            click +=1;
        
        
                if(click==1) {
                    location1= event.srcElement;
                    location1.style.fontSize =('70px');
                }
                if(click==2) {
                    location2= event.srcElement;
                    location2.style.fontSize =('70px');
                }

                if (click==2 && location1.innerHTML==location2.innerHTML) {                                     /* matching */
                    setInterval(hide(),30000);
                    
                }

                if (click==3) {
                    location1.style.fontSize =('0px'); location2.style.fontSize =('0px');
                    location1='';
                    location2='';
                    click = 0;
            }
}


function hide() {
    
    if(location1.id == location2.id) {
            location1.style.fontSize =('0px'); location2.style.fontSize =('0px');
            location1='';
            location2='';
            click = 0;
    }

    if(location1.id != location2.id){
    
    location1.style.visibility =('hidden'); location2.style.visibility =('hidden');  /* ------------- hiding elements*/
    }
}