function zdjTel(){
    setInterval(zmianazdjec, 3000); //zdj na tel
        let indexZdj = 0;
        let zdjecia = [ "url('images/pic4resp.jpg')", 
        "url('images/pic1resp.jpg')", "url('images/pic2resp.jpg')", "url('images/pic4resp.jpg')"];

        let sekcja = document.getElementById("landing-section");

        function zmianazdjec(){
        
            if(indexZdj < zdjecia.length){
                sekcja.style.background = zdjecia[indexZdj];
                sekcja.style.backgroundSize = "100vw 100vh";
                indexZdj++;
            }else{
                indexZdj = 0;
            }
    }
}
function zdjKomp(){
    setInterval(zmianazdjec, 3000); //zdj na kompa
        let indexZdj = 0;
        let zdjecia = [ "url('images/pic1.jpg')", "url('images/pic4.jpg')", "url('images/pic2.jpg')" ];

        let sekcja = document.getElementById("landing-section");

        function zmianazdjec(){
        
            if(indexZdj < zdjecia.length){
                sekcja.style.background = zdjecia[indexZdj];
                sekcja.style.backgroundSize = "100vw 100vh";
                indexZdj++;
            }else{
                indexZdj = 0;
            }
    }
}

document.addEventListener('DOMContentLoaded', slider);

function slider(){ //sprawdza rozdzielczosc
    let query1 = window.matchMedia("(max-width: 320px");
    let query2 = window.matchMedia("(max-width: 480px");
    let query3 = window.matchMedia("(max-width: 768px");

    if(query1.matches){
        zdjTel();
    }
    else if(query2.matches){
        zdjTel();
    }
    else if(query3.matches){
        zdjTel();
    }
    else{
        zdjKomp();
    }
}
