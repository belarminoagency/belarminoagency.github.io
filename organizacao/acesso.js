// B-Foco — login e liberação de acesso (mesmo Firebase do Forja e do B-Fight, coleção "organizacao")
{
const CFG={
  apiKey:"AIzaSyBpl5GkIkQOtriiTyI0N5bsevM0E71hqq4",
  authDomain:"forja-f7ca8.firebaseapp.com",
  projectId:"forja-f7ca8",
  storageBucket:"forja-f7ca8.firebasestorage.app",
  messagingSenderId:"1011302668862",
  appId:"1:1011302668862:web:66c33e3c5f1579581e8f6f"
};
const ADMINS=["belarminokaique581@gmail.com"];
const WHATS="5511953837208";
const COL="organizacao";

const css=`
#bfGate{position:fixed;inset:0;z-index:9999;background:#1E3A2F;color:#fff;overflow:auto;font:16px/1.5 Inter,system-ui,sans-serif}
#bfGate[hidden],#bfAdminBtn[hidden],#bfPanel[hidden]{display:none}
#bfGate .in{max-width:420px;margin:0 auto;padding:max(40px,env(safe-area-inset-top)) 22px 40px;display:flex;flex-direction:column;gap:14px}
#bfGate .logo{display:flex;align-items:center;gap:10px;font:800 22px Inter,sans-serif;letter-spacing:-.3px}
#bfGate .logo b{width:44px;height:44px;border-radius:50%;background:#E9B44C;color:#1E3A2F;display:grid;place-items:center;font-size:22px}
#bfGate h1{margin:8px 0 0;font:800 28px/1.15 Inter,sans-serif;letter-spacing:-.5px}
#bfGate .muted{color:#C9D8CC;margin:0}
#bfGate .seg{display:grid;grid-template-columns:1fr 1fr;background:rgba(255,255,255,.08);border-radius:12px;padding:4px}
#bfGate .seg button{min-height:44px;border:0;border-radius:9px;background:none;color:#C9D8CC;font:600 15px Inter,sans-serif}
#bfGate .seg button[aria-selected=true]{background:#E9B44C;color:#1E3A2F}
#bfGate label{display:flex;flex-direction:column;gap:6px;font-weight:600;font-size:13px;color:#C9D8CC}
#bfGate input{min-height:48px;border:1.5px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);color:#fff;border-radius:12px;padding:0 14px;font:16px Inter,sans-serif}
#bfGate input:focus{outline:none;border-color:#E9B44C}
.bfBtn{display:flex;align-items:center;justify-content:center;min-height:52px;border:0;border-radius:14px;background:#E9B44C;color:#1E3A2F;font:700 16px Inter,sans-serif;text-decoration:none;cursor:pointer}
.bfBtn.ghost{background:rgba(255,255,255,.1);color:#fff}
.bfBtn:disabled{opacity:.6}
#bfGate .link{background:none;border:0;color:#C9D8CC;text-decoration:underline;font:14px Inter,sans-serif;min-height:44px}
#bfGate .err{color:#ffb3bb;margin:0;min-height:1em;font-size:14px}
#bfGate .ok{color:#9be3b4;font-size:14px;margin:0}
#bfGate .card{background:rgba(255,255,255,.08);border-radius:14px;padding:14px 16px}
#bfGate .credit{text-align:center;color:#C9D8CC;font-size:13px;margin-top:10px}
#bfAdminBtn{position:fixed;right:14px;bottom:calc(18px + env(safe-area-inset-bottom));z-index:9000;min-height:44px;padding:0 16px;border:0;border-radius:99px;background:#1E3A2F;color:#fff;font:700 14px Inter,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.25)}
#bfAdminBtn i{font-style:normal;background:#E9B44C;color:#1E3A2F;border-radius:99px;padding:0 7px;margin-left:6px}
#bfPanel{position:fixed;inset:0;z-index:9500;background:#F7F3EA;color:#22302a;overflow:auto;font:16px/1.5 Inter,system-ui,sans-serif}
#bfPanel .in{max-width:560px;margin:0 auto;padding:max(24px,env(safe-area-inset-top)) 16px 40px}
#bfPanel .top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px}
#bfPanel h2{margin:0;font:800 26px Inter,sans-serif}
#bfPanel h3{margin:22px 0 8px;font:600 13px Inter,sans-serif;color:#6f7a72;text-transform:uppercase;letter-spacing:.5px}
#bfPanel ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}
#bfPanel li{background:#fff;border-radius:14px;padding:12px 14px;display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap;box-shadow:0 2px 10px rgba(30,58,47,.06)}
#bfPanel li b{display:block}
#bfPanel li small{color:#6f7a72;font-size:13px;word-break:break-all}
#bfPanel li small a{color:#1D4ED8}
#bfPanel .acts{display:flex;gap:6px}
#bfPanel .mini{min-height:40px;padding:0 14px;border:0;border-radius:10px;background:#1E3A2F;color:#fff;font:600 14px Inter,sans-serif}
#bfPanel .mini.ghost{background:#ebe5d8;color:#22302a}
#bfPanel .empty{color:#6f7a72;font-size:14px}
#bfPanel .x{min-height:44px;padding:0 14px;border:0;border-radius:12px;background:#ebe5d8;color:#22302a;font:600 15px Inter,sans-serif}
`;
document.head.insertAdjacentHTML("beforeend",`<style>${css}</style>`);
document.body.insertAdjacentHTML("beforeend",`<div id="bfGate"><div class="in"></div></div><button id="bfAdminBtn" hidden>Usuários</button><div id="bfPanel" hidden><div class="in"></div></div>`);
document.getElementById("bfCover")?.remove();
const G=document.querySelector("#bfGate .in"), gateEl=document.getElementById("bfGate");
const P=document.querySelector("#bfPanel .in"), panel=document.getElementById("bfPanel"), abtn=document.getElementById("bfAdminBtn");
const $=s=>document.getElementById(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const isAdmin=e=>ADMINS.includes(String(e||"").toLowerCase());
const ERR={
  "auth/invalid-email":"E-mail inválido. Confira se digitou certinho.",
  "auth/missing-password":"Digite sua senha.",
  "auth/user-not-found":"Não achamos conta com esse e-mail. Toque em \"Criar conta\".",
  "auth/wrong-password":"Senha incorreta. Tente de novo ou use \"Esqueci a senha\".",
  "auth/invalid-credential":"E-mail ou senha incorretos. Tente de novo ou use \"Esqueci a senha\".",
  "auth/email-already-in-use":"Esse e-mail já tem conta (pode ser a do Forja ou do B-Fight). Toque em \"Entrar\" e use a mesma senha.",
  "auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.",
  "auth/too-many-requests":"Muitas tentativas seguidas. Espere alguns minutos.",
  "auth/network-request-failed":"Sem internet. Verifique a conexão e tente de novo.",
  "permission-denied":"Sem permissão. Saia e entre de novo."
};
const errMsg=e=>ERR[e?.code]||"Algo deu errado. Tente de novo.";
const brand=`<div class="logo"><b>B</b>B-Foco</div>`;
const credit=`<p class="credit">Feito por <strong>Kaique Belarmino</strong></p>`;
const show=html=>{G.innerHTML=html;gateEl.hidden=false;window.scrollTo(0,0)};

if(typeof firebase==="undefined"){
  show(`${brand}<h1>Sem conexão</h1><p class="muted">Precisa de internet para entrar no B-Foco. Verifique a conexão e tente de novo.</p><button class="bfBtn" onclick="location.reload()">Tentar de novo</button>`);
} else {
firebase.initializeApp(CFG);
const auth=firebase.auth(), fs=firebase.firestore(), U=fs.collection(COL);
window.ORG_db=fs;
fs.enablePersistence().catch(()=>{});
let ME=null, tab="in", signingUp=false, watch=[], clients=[];
const stop=()=>{watch.forEach(f=>f&&f());watch=[]};
const newDoc=(email,nome,whats)=>({nome:nome.slice(0,40),whats:whats.slice(0,30),email:String(email).toLowerCase(),createdAt:Date.now(),aprovado:isAdmin(email),recusado:false});
const out=async()=>{stop();try{await auth.signOut()}catch(e){}location.reload()};
document.addEventListener("click",e=>{if(e.target.closest("[data-bfout]"))out()});
window.ORG_sair=out;

function login(msg=""){
  const up=tab==="up", email=$("bfE")?.value||"";
  show(`${brand}
  <h1>${up?"Crie sua conta":"Entre na sua conta"}</h1>
  <p class="muted">${up?"Depois do cadastro, o Kaique libera seu acesso e o app abre sozinho.":"Suas tarefas organizadas, com prazos, lembretes e checklist."}</p>
  <div class="seg"><button type="button" data-t="in" aria-selected="${!up}">Entrar</button><button type="button" data-t="up" aria-selected="${up}">Criar conta</button></div>
  <form id="bfF" novalidate style="display:flex;flex-direction:column;gap:14px">
    ${up?`<label>Seu nome<input id="bfN" autocomplete="name" maxlength="40" placeholder="Nome e sobrenome"></label>
    <label>WhatsApp<input id="bfW" type="tel" inputmode="tel" autocomplete="tel" maxlength="30" placeholder="(11) 99999-9999"></label>`:""}
    <label>E-mail<input id="bfE" type="email" inputmode="email" autocomplete="email" value="${esc(email)}"></label>
    <label>Senha<input id="bfP" type="password" autocomplete="${up?"new-password":"current-password"}" placeholder="${up?"Mínimo 6 caracteres":""}"></label>
    <p class="err" id="bfX" role="alert">${esc(msg)}</p>
    <button class="bfBtn" id="bfGo">${up?"Criar conta":"Entrar"}</button>
    ${up?"":`<button type="button" class="link" id="bfR">Esqueci a senha</button>`}
  </form>${credit}`);
  G.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{tab=b.dataset.t;login()});
  $("bfR")?.addEventListener("click",async()=>{
    const e=$("bfE").value.trim();
    if(!e){$("bfX").textContent="Digite seu e-mail e toque em \"Esqueci a senha\" de novo.";return}
    try{await auth.sendPasswordResetEmail(e);$("bfX").outerHTML=`<p class="ok">Enviamos um link de nova senha para ${esc(e)}. Veja também o spam.</p>`}
    catch(er){$("bfX").textContent=errMsg(er)}
  });
  $("bfF").onsubmit=async ev=>{
    ev.preventDefault();
    const e=$("bfE").value.trim(), p=$("bfP").value, b=$("bfGo"), lb=b.textContent;
    const fail=m=>{$("bfX").textContent=m;b.disabled=false;b.textContent=lb};
    if(!e) return fail("Digite seu e-mail.");
    if(!p) return fail("Digite sua senha.");
    let nome="",whats="";
    if(tab==="up"){
      nome=$("bfN").value.trim(); whats=$("bfW").value.trim();
      if(!nome) return fail("Digite seu nome.");
      if(whats.replace(/\D/g,"").length<10) return fail("Digite seu WhatsApp com DDD.");
    }
    b.disabled=true;b.textContent="Aguarde…";
    try{
      if(tab==="up"){
        signingUp=true;
        const c=await auth.createUserWithEmailAndPassword(e,p);
        await U.doc(c.user.uid).set(newDoc(c.user.email||e,nome,whats));
        signingUp=false;
      } else await auth.signInWithEmailAndPassword(e,p);
    }catch(er){
      if(signingUp&&ME){signingUp=false;return request(errMsg(er))}
      signingUp=false;fail(errMsg(er));
    }
  };
}
// Conta existe (ex.: veio do Forja/B-Fight) mas ainda não pediu acesso ao B-Foco
function request(msg=""){
  show(`${brand}<h1>Falta pouco</h1><p class="muted">Você já tem conta. Confirme seus dados para pedir acesso ao B-Foco.</p>
  <form id="bfQ" novalidate style="display:flex;flex-direction:column;gap:14px">
    <label>Seu nome<input id="bfN2" autocomplete="name" maxlength="40"></label>
    <label>WhatsApp<input id="bfW2" type="tel" inputmode="tel" autocomplete="tel" maxlength="30" placeholder="(11) 99999-9999"></label>
    <p class="err" id="bfX2" role="alert">${esc(msg)}</p>
    <button class="bfBtn" id="bfGo2">Pedir acesso</button>
    <button type="button" class="link" data-bfout>Sair da conta</button>
  </form>`);
  $("bfQ").onsubmit=async ev=>{
    ev.preventDefault();
    const n=$("bfN2").value.trim(), w=$("bfW2").value.trim();
    if(!n){$("bfX2").textContent="Digite seu nome.";return}
    if(w.replace(/\D/g,"").length<10){$("bfX2").textContent="Digite seu WhatsApp com DDD.";return}
    $("bfGo2").disabled=true;
    try{await U.doc(ME.uid).set(newDoc(ME.email,n,w))}catch(er){$("bfGo2").disabled=false;$("bfX2").textContent=errMsg(er)}
  };
}
function pending(me){
  const txt=encodeURIComponent(`Oi Kaique! Criei minha conta no B-Foco com o e-mail ${me.email||ME.email} e quero liberar meu acesso.`);
  show(`${brand}<h1>${me.recusado?"Acesso não liberado":"Aguardando liberação"}</h1>
  <p class="muted">${me.recusado?"Seu acesso ao B-Foco não está liberado no momento. Se acha que é engano, fale com o Kaique.":"Sua conta foi criada. Assim que o Kaique liberar, o app abre sozinho aqui. Pode deixar esta tela aberta."}</p>
  <div class="card"><b>${esc(me.nome||"")}</b><br><span class="muted">${esc(me.email||ME.email||"")}</span></div>
  <a class="bfBtn" href="https://wa.me/${WHATS}?text=${txt}" target="_blank" rel="noopener">Falar com o Kaique no WhatsApp</a>
  <button class="bfBtn ghost" data-bfout>Sair da conta</button>${credit}`);
}
let opened=false;
let entrou=false;
function open(me,admin){gateEl.hidden=true;opened=true;if(!entrou&&window.ORG&&ME){entrou=true;window.ORG.entrar(ME.uid,me||{},!!admin)}}

// Painel do Kaique
const waLink=w=>{const d=String(w||"").replace(/\D/g,"");return d.length<10?"":"https://wa.me/"+(d.length<=11?"55"+d:d)};
const when=t=>t?new Date(t).toLocaleDateString("pt-BR"):"";
function renderPanel(){
  const by=(a,b)=>(b.createdAt||0)-(a.createdAt||0);
  const o=clients.filter(u=>u&&!isAdmin(u.email));
  const pend=o.filter(u=>!u.aprovado&&!u.recusado).sort(by), ok=o.filter(u=>u.aprovado).sort(by), off=o.filter(u=>!u.aprovado&&u.recusado).sort(by);
  abtn.innerHTML=`Usuários${pend.length?`<i>${pend.length}</i>`:""}`;
  const row=(u,btns)=>{const wa=waLink(u.whats);return `<li><span><b>${esc(u.nome||"Sem nome")}</b><small>${esc(u.email||"")}${u.whats?` · ${wa?`<a href="${wa}" target="_blank" rel="noopener">${esc(u.whats)}</a>`:esc(u.whats)}`:""}${u.createdAt?` · ${when(u.createdAt)}`:""}</small></span><span class="acts">${btns(esc(u.id))}</span></li>`};
  P.innerHTML=`<div class="top"><h2>Usuários</h2><button class="x" id="bfClose">Fechar</button></div>
  <h3>Pedindo acesso · ${pend.length}</h3>
  ${pend.length?`<ul>${pend.map(u=>row(u,id=>`<button class="mini ghost" data-no="${id}">Recusar</button><button class="mini" data-yes="${id}">Liberar</button>`)).join("")}</ul>`:`<p class="empty">Nenhum pedido novo. Quando alguém criar conta, aparece aqui.</p>`}
  <h3>Com acesso · ${ok.length}</h3>
  ${ok.length?`<ul>${ok.map(u=>row(u,id=>`<button class="mini ghost" data-no="${id}">Tirar acesso</button>`)).join("")}</ul>`:`<p class="empty">Ninguém liberado ainda.</p>`}
  ${off.length?`<h3>Sem acesso · ${off.length}</h3><ul>${off.map(u=>row(u,id=>`<button class="mini" data-yes="${id}">Liberar</button>`)).join("")}</ul>`:""}
  <p style="margin-top:28px"><button class="x" data-bfout>Sair da conta</button></p>`;
}
abtn.onclick=()=>{renderPanel();panel.hidden=false};
P.addEventListener("click",async e=>{
  if(e.target.closest("#bfClose")){panel.hidden=true;return}
  const y=e.target.closest("[data-yes]"), n=e.target.closest("[data-no]");
  try{
    if(y) await U.doc(y.dataset.yes).set({aprovado:true,recusado:false,liberadoEm:Date.now()},{merge:true});
    if(n) await U.doc(n.dataset.no).set({aprovado:false,recusado:true},{merge:true});
  }catch(er){P.insertAdjacentHTML("afterbegin",`<p class="empty" style="color:#ff6b72">${esc(errMsg(er))}</p>`)}
});

show(`${brand}<h1>Carregando…</h1>`);
auth.onAuthStateChanged(u=>{
  stop(); ME=u?{uid:u.uid,email:u.email}:null; abtn.hidden=true;
  if(!u){if(opened)location.reload();return login()}
  const admin=isAdmin(u.email);
  show(`${brand}<h1>Carregando…</h1><button class="link" data-bfout style="align-self:flex-start">Sair da conta</button>`);
  watch.push(U.doc(u.uid).onSnapshot(d=>{
    const me=d.exists?{id:d.id,...d.data()}:null;
    if(!me){if(admin){U.doc(u.uid).set(newDoc(u.email,"Kaique","")).catch(()=>{});return open({nome:"Kaique"},true)}
      if(!signingUp&&!d.metadata.fromCache)request();return}
    if(me.aprovado===true||admin) open(me,admin);
    else if(opened) location.reload();
    else pending(me);
  },er=>login(errMsg(er))));
  if(admin){
    abtn.hidden=false;
    watch.push(U.onSnapshot(s=>{clients=s.docs.map(d=>({id:d.id,...d.data()}));renderPanel()},()=>{}));
  }
});
}
}
