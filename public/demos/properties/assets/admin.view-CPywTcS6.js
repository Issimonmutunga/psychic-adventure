import{s as b,l as f,j as v,q as y,R as g,t as w,u as A,f as S,B as R,d as O,C as d}from"./index-BFh-RWj2.js";import{d as E,s as r,a as L}from"./dashShared-DdCRFv6K.js";import"./maplibre-CcmHau8V.js";let a=null;async function z(s){b({title:`Admin | ${d.site.name}`,description:"Oversee every land listing and manage roles.",url:`${d.site.domain.replace(/\/$/,"")}/admin`});const{content:t}=E(s,{title:"Admin",subtitle:"Every listing on the platform, and the roles that can see it."});a=t,a.classList.add("dash-admin");try{await f()}catch(n){console.error(n),a.innerHTML='<p class="dash-empty dash-empty--error">Unable to load listings.</p>';return}c(),a.addEventListener("click",h)}function c(){const s=Object.entries(v()),t=s.length,n=s.filter(([,e])=>(e==null?void 0:e.status)==="available").length,o=t-n,p=s.filter(([,e])=>e==null?void 0:e.road_access).length,u=s.filter(([,e])=>e==null?void 0:e.water).length,i=Object.keys(y()).length;a.innerHTML=`
    <section class="dash-stats">
      ${r("Total parcels",t)}
      ${r("Available",n)}
      ${r("Sold",o)}
      ${r("Road access",p)}
      ${r("Water nearby",u)}
    </section>

    <section class="dash-panel">
      <div class="dash-panel-head">
        <h2 class="dash-h2">All listings</h2>
        <button type="button" class="dash-btn" data-action="reset-demo">
          Reset demo changes${i?` (${i})`:""}
        </button>
      </div>
      <div class="dash-table-wrap">
        <table class="dash-table">
          <thead>
            <tr>
              <th>ID</th><th>Status</th><th>Size</th><th>Price</th>
              <th>Road</th><th>Water</th><th>Photos</th><th></th>
            </tr>
          </thead>
          <tbody>
            ${s.map(([e,$])=>j(e,$)).join("")}
          </tbody>
        </table>
      </div>
    </section>

    <section class="dash-panel">
      <h2 class="dash-h2">Roles</h2>
      <p class="dash-note">
        Role switching is currently client-side only (remembered per browser).
        Authentication and permissions are not wired up yet.
      </p>
      <div class="dash-roles">
        ${g.map(e=>`
          <div class="dash-role">
            <span class="dash-role-name">${e.label}</span>
            <span class="dash-role-desc">${e.description}</span>
          </div>`).join("")}
      </div>
    </section>
  `}function j(s,t){const n=Array.isArray(t==null?void 0:t.photos)?t.photos.length:0,o=S(t==null?void 0:t.price,t==null?void 0:t.currency);return`
    <tr>
      <td class="dash-td-id">${s}</td>
      <td>${L(t==null?void 0:t.status)}</td>
      <td>${O(t==null?void 0:t.size)||"—"}</td>
      <td>${o||"—"}</td>
      <td>${l(t==null?void 0:t.road_access)}</td>
      <td>${l(t==null?void 0:t.water)}</td>
      <td>${n||"—"}</td>
      <td class="dash-td-action"><a href="${R}/plot/${s}">View</a></td>
    </tr>`}function l(s){return s==null?"—":s?"Yes":"No"}function h(s){s.target.closest('[data-action="reset-demo"]')&&(w(),A(),c())}function B(){a&&a.removeEventListener("click",h),a=null}export{z as adminView,B as teardownAdminView};
