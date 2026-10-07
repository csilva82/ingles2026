const $=s=>document.querySelector(s);
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
let slow=false,voices=[];
const TTS='speechSynthesis' in window;
if(TTS){const l=()=>{voices=speechSynthesis.getVoices().filter(v=>v.lang.startsWith('en'))};l();speechSynthesis.onvoiceschanged=l}
function say(t){
  if(!TTS){alert('Seu navegador não tem voz. Tente o Chrome ou o Safari.');return}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(t);u.lang='en-US';u.rate=slow?.55:.9;
  const v=voices.find(v=>v.lang==='en-US')||voices[0];if(v)u.voice=v;
  speechSynthesis.speak(u);
}
const sl=$('#slow');
if(sl)sl.onclick=()=>{slow=!slow;sl.setAttribute('aria-pressed',slow)};
