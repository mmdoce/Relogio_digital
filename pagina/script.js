const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


function checarFaixaHorario(hora, minuto) {
  if (hora >= 6 && hora <= 10 && minuto <= 0) {
    return 1;
  } else if (
    (hora === 10 && minuto >= 1) || 
    (hora > 10 && hora < 13) || 
    (hora === 13 && minuto === 5)
  ) {
    return 2;
  } else if (
    (hora === 13 && minuto >= 6) || 
    (hora > 13 && (hora < 17 || (hora === 17 && minuto <= 50)))
  ) {
    return 3;
  } else if (
    (hora === 17 && minuto >= 51) || 
    (hora === 18 && minuto <= 50)
  ) {
    return 4;
  } else if (
    (hora === 18 && minuto >= 51) || 
    (hora > 18 && hora <= 23) || 
    (hora === 0 && minuto <= 50)
  ) {
    return 5;
  } else if (
    (hora === 0 && minuto >= 51) || 
    (hora > 0 && hora < 6) || 
    (hora === 5 && minuto <= 50)
  ) {
    return 6;
  } else {
    return 0; // caso não caia em nenhuma faixa
  }
}

const relogio = setInterval (function time(){

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    
    if(hr < 10) hr = "0"+hr;
    if(min < 10) min = "0"+min;
    if(seg < 10) seg = "0"+seg;

    horas.textContent= hr;
    minutos.textContent=min;
    segundos.textContent=seg;


    const faixa = checarFaixaHorario(dateToday.getHours(), dateToday.getMinutes());

  switch (faixa) {
    case 1:
      document.body.className = "manha";
      break;
    case 2:
      document.body.className = "tardeInicio";
      break;
    case 3:
      document.body.className = "tardeCheia";
      break;
    case 4:
      document.body.className = "fimDeTarde";
      break;
    case 5:
      document.body.className = "noite";
      break;
    case 6:
      document.body.className = "madrugada";
      break;
    default:
      document.body.className = "";
  }
});

const btnAbrir = document.getElementById("btnAbrir");
const popup = document.getElementById("popup");
const btnFechar = document.getElementById("btnFechar");

btnAbrir.addEventListener("click", () => {
  popup.style.display = "flex";
});

btnFechar.addEventListener("click", () => {
  popup.style.display = "none";
});
