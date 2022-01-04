let euro = prompt('Cuantos euros quieres convertir?');
alert(euro+' Euros son '+ euro*1.08+' Dolares');

function mostrar_fecha(){
    document.write(new Date());
}

const greet = function(greeting, person){
    return `${greeting} ${person}, how are you?`;
}