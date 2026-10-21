const $=id=>document.getElementById(id);
const WORDS=[["planet","something in space"],["guitar","you strum it"],["kitchen","room with a stove"],
["bicycle","two wheels"],["monster","under the bed"],["pyramid","ancient triangle"],["diamond","a hard gem"],
["jungle","dense forest"],["rocket","it goes to space"],["anchor","holds a boat"],["pillow","for your head"],
["cactus","a desert plant"],["volcano","it erupts"],["puzzle","pieces fit together"],["lantern","a portable light"]];
let cur,score=0;
function scramble(w){let a=w.split('');for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}const s=a.join('');return s===w?scramble(w):s;}
function next(){cur=WORDS[Math.floor(Math.random()*WORDS.length)];$('sc-word').textContent=scramble(cur[0]).toUpperCase().split('').join(' ');$('sc-hint').textContent='Hint: '+cur[1];$('sc-in').value='';$('sc-msg').innerHTML='&nbsp;';$('sc-in').focus();}
function check(){if(!cur)return;if($('sc-in').value.trim().toLowerCase()===cur[0]){score++;$('sc-score').textContent=score;$('sc-msg').textContent='Correct! ✅';setTimeout(next,700);}else $('sc-msg').textContent='Not quite, try again';}
$('sc-go').onclick=check;$('sc-next').onclick=next;$('sc-reveal').onclick=()=>{if(cur)$('sc-msg').textContent='It was: '+cur[0].toUpperCase();};
$('sc-in').addEventListener('keydown',e=>{if(e.key==='Enter')check();});next();
