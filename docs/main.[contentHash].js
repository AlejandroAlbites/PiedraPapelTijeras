(()=>{var c="piedra",d="papel",e="tijera",f=0,g=1,h=2,a=document.getElementById("piedra"),b=document.getElementById("papel"),i=document.getElementById("tijera"),j=document.getElementById("result"),k=document.getElementById("usuario"),l=document.getElementById("maquina");a.addEventListener("click",function(){m(c)}),b.addEventListener("click",function(){m(d)}),i.addEventListener("click",function(){m(e)});var m=function(e){k.src="/src/assets/"+e+"1.png",j.innerHTML="PENSANDO";var a=setInterval(function(){var b=n();l.src="/src/assets/"+b+"2.png"},150);setTimeout(function(){clearInterval(a);var b=n(),c=o(e,b);l.src="/src/assets/"+b+"2.png",c===f?j.innerHTML="HAS EMPATADO":c===g?j.innerHTML="HAS GANADO":c===h?j.innerHTML="HAS PERDIDO":void 0},2e3)},n=function(){var b=Math.floor(3*Math.random());return 0===b?c:1===b?d:2===b?e:void 0},o=function(i,a){if(i===a)return f;if(i===c){if(a===d)return h;if(a===e)return g}else if(i===d){if(a===e)return h;if(a===c)return g}else if(i===e){if(a===c)return h;if(a===d)return g}}})();