(function () {
  var splash = document.getElementById('splash');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { splash.style.display = 'none'; document.body.classList.add('ready'); return; }
  var done = false;
  function enter() {
    if (done) return; done = true;
    splash.classList.add('leaving');
    document.body.classList.add('ready');
    setTimeout(function () { splash.style.display = 'none'; }, 900);
  }
  splash.addEventListener('click', enter);
  setTimeout(enter, 2600);
})();

(function(){
  var PHONE='5584991259998';
  var saud=(function(){var h=new Date().getHours();return h<12?'Bom dia':h<18?'Boa tarde':'Boa noite'})();
  var main=document.querySelector('.btn--primary');if(main)main.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent('Olá! Vim pelo link da GreenGold.');
  var cards=[].slice.call(document.querySelectorAll('.card'));
  cards.forEach(function(c){
    var t=c.querySelector('b').textContent+', modelo '+c.dataset.n;
    c.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent(saud+', queria saber sobre a peça da '+t+'. Está disponível? Em quais tamanhos?');
  });
  var tr=document.getElementById('track'),cat=document.getElementById('catalog');
  document.getElementById('chips').addEventListener('click',function(e){
    var b=e.target.closest('.chip'); if(!b)return;
    [].forEach.call(document.querySelectorAll('.chip'),function(x){x.setAttribute('aria-pressed',x===b)});
    cards.forEach(function(c){c.hidden=b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f});
    tr.scrollTo({left:0});
  });
  function step(d){tr.scrollBy({left:d*(cards[0].offsetWidth+14),behavior:'smooth'})}
  document.getElementById('prev').onclick=function(){step(-1)};
  document.getElementById('next').onclick=function(){step(1)};
  var v=document.getElementById('view');
  v.onclick=function(){cat.dataset.view=cat.dataset.view==='full'?'crop':'full'};
})();
