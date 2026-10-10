import{B as i,C as n,v as h,w as t,a as e,f as p,d as u,p as v,h as $,c as b}from"./index-7fJqyOi-.js";function w(a,{title:s,subtitle:o}){a.innerHTML="";const d=document.createElement("div");return d.className="dash",d.innerHTML=`
    <header class="dash-topbar">
      <a class="brand-link dash-brand" href="${i}/" aria-label="${n.site.name} home">
        <span class="brand-name">${n.site.name}</span>
      </a>
      <div class="dash-role-host"></div>
    </header>
    <main class="dash-main">
      <div class="dash-head">
        <span class="dash-rolechip"><span class="dash-rolechip-dot"></span>${h(t())}</span>
        <h1 class="dash-title">${s}</h1>
        <p class="dash-sub">${o}</p>
      </div>
      <div class="dash-content"></div>
    </main>
  `,a.appendChild(d),e(d.querySelector(".dash-role-host")),{root:d,content:d.querySelector(".dash-content")}}function S(a,s){return`
    <div class="dash-stat">
      <span class="dash-stat-value">${s}</span>
      <span class="dash-stat-label">${a}</span>
    </div>`}function f(a){const s=b(a);return s?`<span class="dash-badge ${a==="sold"?"dash-badge--sold":"dash-badge--available"}">${s}</span>`:""}function y(a,s,o=""){const d=p(s==null?void 0:s.price,s==null?void 0:s.currency),r=u(s==null?void 0:s.size),l=[];(s==null?void 0:s.road_access)!=null&&l.push(s.road_access?"Road access":"No road access"),(s==null?void 0:s.water)!=null&&l.push(s.water?"Water nearby":"No water");const c=v($(a,s==null?void 0:s.photos));return`
    <article class="dash-plot">
      <img class="dash-thumb" src="${c.src}" srcset="${c.srcset}" sizes="120px"
        loading="${c.loading}" decoding="${c.decoding}" alt="${a} photograph" />
      <div class="dash-plot-body">
        <div class="dash-plot-row">
          <span class="dash-plot-id">${a}</span>
          ${f(s==null?void 0:s.status)}
        </div>
        <div class="dash-plot-meta">${[r,d].filter(Boolean).join(" · ")}</div>
        ${l.length?`<div class="dash-plot-facts">${l.join(" · ")}</div>`:""}
      </div>
      ${o?`<div class="dash-plot-actions">${o}</div>`:""}
    </article>`}export{f as a,w as d,y as p,S as s};
