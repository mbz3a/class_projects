let mbz_letterBanks = "QWm12FERzxcvbnJop34KLZXCVkertyTYUluGHi56789BNMqwIOPsdfASDaghj";
let mbz_parentElemnt = document.getElementById('captcha') ;
let refresh_btn = document.getElementById('refresh');

let mbz_setCaptcha = ()=> {
    mbz_parentElemnt.innerHTML =""; 
    let mbz_catcha = "" ;
    for(var i=0 ; i <6 ; i++){
        let mbz_index = Math.floor(Math.random()*mbz_letterBanks.length);
        var mbz_spans = document.createElement('span');
        mbz_spans.textContent = mbz_letterBanks[mbz_index] ;
        mbz_spans.style.color = "#ff"+Math.floor(Math.random()*10000) ;
        mbz_parentElemnt.appendChild(mbz_spans);
        mbz_catcha += mbz_letterBanks[mbz_index];    
    }
    mbz_parentElemnt.setAttribute('data-captcha',mbz_catcha );
    console.log(mbz_catcha);    
}
mbz_setCaptcha();


refresh_btn.addEventListener('click',()=>{mbz_setCaptcha();})