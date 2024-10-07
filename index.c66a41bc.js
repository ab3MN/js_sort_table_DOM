const t=document.querySelector("tbody"),e=t=>t.map(t=>{let{age:e,position:r,salary:o}=t;return`
    <tr>
      <td>${t.name}</td>
      <td>${r}</td>
      <td>${e}</td>
      <td>${o}</td>
    </tr>`}).join("");var r=r=>{t.innerHTML=e(r)};const o=document.querySelectorAll("tbody tr"),a={0:"name",1:"position",2:"age",3:"salary"},n=[];for(const t of o){let e=Array.from(t.cells).reduce((t,e,r)=>(t[a[r]]=e.textContent,t),{});n.push(e)}const s=t=>t.replace(/[$,]/g,""),c=t=>[...t].sort((t,e)=>t.age-e.age),l=t=>[...t].sort((t,e)=>t.name.localeCompare(e.name)),d=t=>[...t].sort((t,e)=>t.position.localeCompare(e.position)),i=t=>[...t].sort((t,e)=>s(t.salary)-s(e.salary));document.querySelectorAll("thead tr").forEach(t=>{t.addEventListener("click",t=>{switch(t.target.textContent.toLowerCase()){case"name":return r(l(n));case"position":return r(d(n));case"age":return r(c(n));case"salary":return r(i(n));default:throw Error("Wrong type!")}})});
//# sourceMappingURL=index.c66a41bc.js.map
