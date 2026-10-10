import{B as i,C as l,a as h,f as t,d as e,p,h as u,c as v}from"./index-BFh-RWj2.js";function b(a,{title:s,subtitle:o}){a.innerHTML="";const d=document.createElement("div");return d.className="dash",d.innerHTML=`
    <header class="dash-topbar">
      <a class="brand-link dash-brand" href="${i}/" aria-label="${l.site.name} home">
        <span class="brand-name">${l.site.name}</span>
      </a>
      <div class="dash-role-host"></div>
    </header>
    <main class="dash-main">
      <div class="dash-head">
        <h1 class="dash-title">${s}</h1>
        <p class="dash-sub">${o}</p>
      </div>
      <div class="dash-content"></div>
    </main>
  `,a.appendChild(d),h(d.querySelector(".dash-role-host")),{root:d,content:d.querySelector(".dash-content")}}function g(a,s){return`
    <div class="dash-stat">
      <span class="dash-stat-value">${s}</span>
      <span class="dash-stat-label">${a}</span>
    </div>`}function $(a){const s=v(a);return s?`<span class="dash-badge ${a==="sold"?"dash-badge--sold":"dash-badge--available"}">${s}</span>`:""}function S(a,s,o=""){const d=t(s==null?void 0:s.price,s==null?void 0:s.currency),r=e(s==null?void 0:s.size),c=[];(s==null?void 0:s.road_access)!=null&&c.push(s.road_access?"Road access":"No road access"),(s==null?void 0:s.water)!=null&&c.push(s.water?"Water nearby":"No water");const n=p(u(a,s==null?void 0:s.photos));return`
    <article class="dash-plot">
      <img class="dash-thumb" src="${n.src}" srcset="${n.srcset}" sizes="120px"
        loading="${n.loading}" decoding="${n.decoding}" alt="${a} photograph" />
      <div class="dash-plot-body">
        <div class="dash-plot-row">
          <span class="dash-plot-id">${a}</span>
          ${$(s==null?void 0:s.status)}
        </div>
        <div class="dash-plot-meta">${[r,d].filter(Boolean).join(" · ")}</div>
        ${c.length?`<div class="dash-plot-facts">${c.join(" · ")}</div>`:""}
      </div>
      ${o?`<div class="dash-plot-actions">${o}</div>`:""}
    </article>`}export{$ as a,b as d,S as p,g as s};
