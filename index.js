const calcular=document.getElementById('calcular');
const reiniciar=document.getElementById('reiniciar');

function calcularimc(){
    let peso=document.getElementById('peso').value;
    let altura=document.getElementById('altura').value;
    let imc=peso/altura**2

    if (altura<3) {
        document.getElementById('imc').value=imc
        let img = document.getElementById('figure')
        
        if(imc<=18.4){
            img.innerHTML= "<img src='https://thumbs.dreamstime.com/z/personaje-de-dibujos-animados-del-vector-hombre-aburrido-con-el-tel%C3%A9fono-celular-81842124.jpg'></img>"
        }
        else if(imc>=18.5 && imc<=24.9){
            img.innerHTML= "<img src='https://thumbs.dreamstime.com/b/hombre-joven-que-habla-en-un-tel%C3%A9fono-con-la-cara-sonriente-personaje-de-dibujos-animados-usa-smartphone-aislado-el-fondo-blanco-140603111.jpg'></img>"
        
            
        }
        else if(imc>=25 && imc<=29.9){
        
            img.innerHTML= "<img src='https://thumbs.dreamstime.com/b/hombre-con-sobrepeso-vestido-de-verde-icono-estilo-caricatura-en-un-ropa-dibujo-vectorial-para-dise%C3%B1o-web-aislado-fondo-blanco-161388302.jpg'></img>"
        }
        else if(imc>=30 && imc<=34.9){
            img.innerHTML= "<img src='https://previews.123rf.com/images/gmast3r/gmast3r1904/gmast3r190400339/124084213-hombre-gordo-obeso-pose-de-pie-sobre-el-tama%C3%B1o-chico-concepto-de-obesidad-personaje-de-dibujos-anima.jpg'></img>"
        }
        else{
            img.innerHTML= "<img src='https://w7.pngwing.com/pngs/44/555/png-transparent-fat-cartoon-man-cute-fat-man-hand-people-weight-loss.png'></img>"

        }      
    }else{
        alert("la altura debe estar en metros.Ejem 1.75")
    }
    
}
calcular.addEventListener('click',calcularimc);
