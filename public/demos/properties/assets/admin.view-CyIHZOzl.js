import{s as b,l as f,j as v,q as y,R as g,t as w,u as A,f as S,B as R,d as O,C as l}from"./index-7fJqyOi-.js";import{d as E,s as r,a as L}from"./dashShared-DJV6r_oX.js";import"./maplibre-CcmHau8V.js";let a=null;async function z(e){b({title:`Admin | ${l.site.name}`,description:"Oversee every land listing and manage roles.",url:`${l.site.domain.replace(/\/$/,"")}/admin`});const{content:t}=E(e,{title:"Admin",subtitle:"Every listing on the platform, and the roles that can see it."});a=t,a.classList.add("dash-admin");try{await f()}catch(n){console.error(n),a.innerHTML='<p class="dash-empty dash-empty--error">Unable to load listings.</p>';return}c(),a.addEventListener("click",h)}function c(){const e=Object.entries(v()),t=e.length,n=e.filter(([,s])=>(s==null?void 0:s.status)==="available").length,o=t-n,p=e.filter(([,s])=>s==null?void 0:s.road_access).length,u=e.filter(([,s])=>s==null?void 0:s.water).length,i=Object.keys(y()).length;a.innerHTML=`
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
            ${e.map(([s,$])=>j(s,$)).join("")}
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
        ${g.map(s=>`
          <div class="dash-role" style="--rc:${s.color}">
            <span class="dash-role-name"><span class="dash-role-dot"></span>${s.label}</span>
            <span class="dash-role-desc">${s.description}</span>
          </div>`).join("")}
      </div>
    </section>
  `}function j(e,t){const n=Array.isArray(t==null?void 0:t.photos)?t.photos.length:0,o=S(t==null?void 0:t.price,t==null?void 0:t.currency);return`
    <tr>
      <td class="dash-td-id">${e}</td>
      <td>${L(t==null?void 0:t.status)}</td>
      <td>${O(t==null?void 0:t.size)||"—"}</td>
      <td>${o||"—"}</td>
      <td>${d(t==null?void 0:t.road_access)}</td>
      <td>${d(t==null?void 0:t.water)}</td>
      <td>${n||"—"}</td>
      <td class="dash-td-action"><a href="${R}/plot/${e}">View</a></td>
    </tr>`}function d(e){return e==null?"—":e?"Yes":"No"}function h(e){e.target.closest('[data-action="reset-demo"]')&&(w(),A(),c())}function B(){a&&a.removeEventListener("click",h),a=null}export{z as adminView,B as teardownAdminView};
