
//atualizados de hora de rotacao
function updateTime(){
    const fullTime = new Date();
    //montando variavis de tempos
    const segundos = fullTime.getSeconds();
    const minutos = fullTime.getMinutes();
    const hora = fullTime.getHours();
    const hands = document.querySelectorAll('.hand');
    // previne que os ponteiros retornem a origem com o valor 0
    if (segundos === 0) {
        hands.forEach(hand => hand.style.transitionDuration = '0s');
    } else {
      hands.forEach(hand => hand.style.transitionDuration = '1s');
    }
    //calcula a rotacao
    const degSeconds = (( segundos / 1 ) * 6)+90;
    const degMinutes = (( minutos / 60 ) * 360)+90;
    const degHours = (( hora / 12 ) * 360 )+90;
    //movimenta ponteiros
    rotacionar(degHours,degMinutes,degSeconds);

    // console.log(degHours+","+degMinutes+","+degSeconds);
}
const rotacionar = (h,m,s)=>{
    // ponteiros do relogio
    const phora = document.querySelector('div.hours');
    const pminuto = document.querySelector('div.minutes');
    const psegundo = document.querySelector('div.seconds');
    phora.style.transform =`rotate(${h}deg)`;
    pminuto.style.transform =`rotate(${m}deg)`;
    psegundo.style.transform =`rotate(${s}deg)`;
    // console.log(h,m,s);
}
 setInterval(updateTime,1000);