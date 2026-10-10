import{s as v,l as $,j as y,k as S,n as w,r as A,o as D,C as u,B as k}from"./index-BFh-RWj2.js";import{d as L,s as c,p as x}from"./dashShared-DdCRFv6K.js";import"./maplibre-CcmHau8V.js";let e=null,i="all";async function C(a){v({title:`Seller dashboard | ${u.site.name}`,description:"Review and manage the parcels you have listed for sale.",url:`${u.site.domain.replace(/\/$/,"")}/seller`});const{content:s}=L(a,{title:"Seller dashboard",subtitle:"Review your parcels, keep availability up to date, and draft new listings."});e=s,e.classList.add("dash-seller");try{await $()}catch(t){console.error(t),e.innerHTML='<p class="dash-empty dash-empty--error">Unable to load your listings.</p>';return}o(),e.addEventListener("click",f),e.addEventListener("submit",g)}function o(){const a=Object.entries(y()),s=a.length,t=a.filter(([,l])=>(l==null?void 0:l.status)==="available").length,n=s-t,d=a.filter(([,l])=>i==="all"||(l==null?void 0:l.status)===i),h=S();e.innerHTML=`
    <section class="dash-stats">
      ${c("Total listings",s)}
      ${c("Available",t)}
      ${c("Sold",n)}
    </section>

    <section class="dash-panel">
      <div class="dash-panel-head">
        <h2 class="dash-h2">Your listings</h2>
        <div class="dash-tabs" role="tablist">
          ${p("all","All",i)}
          ${p("available","Available",i)}
          ${p("sold","Sold",i)}
        </div>
      </div>
      <div class="dash-list">
        ${d.length?d.map(([l,m])=>E(l,m)).join(""):`<p class="dash-empty">No ${i==="all"?"":i} listings.</p>`}
      </div>
    </section>

    <section class="dash-panel">
      <div class="dash-panel-head">
        <h2 class="dash-h2">Draft listings</h2>
        <button type="button" class="dash-btn dash-btn--primary" data-action="open-add">
          + Add listing
        </button>
      </div>
      <p class="dash-note">
        Drafts are saved in this browser only. Publishing a parcel to the map
        will require the listings backend.
      </p>
      <div class="dash-list">
        ${h.length?h.map(R).join(""):'<p class="dash-empty">No drafts yet.</p>'}
      </div>
    </section>

    <div class="dash-modal" data-open="false">
      <div class="dash-modal-card" role="dialog" aria-modal="true" aria-label="Add a draft listing">
        <h3 class="dash-modal-title">Add a draft listing</h3>
        <form class="dash-form" data-form="add-draft">
          <label class="dash-field">
            <span>Parcel name / ID</span>
            <input name="name" type="text" required placeholder="e.g. Riverside Plot" />
          </label>
          <label class="dash-field">
            <span>Size</span>
            <input name="size" type="text" placeholder="e.g. 0.50 acre" />
          </label>
          <label class="dash-field">
            <span>Asking price (KES)</span>
            <input name="price" type="number" min="0" step="1000" placeholder="e.g. 3200000" />
          </label>
          <label class="dash-field">
            <span>Notes</span>
            <textarea name="notes" rows="3" placeholder="Access, water, landmarks…"></textarea>
          </label>
          <div class="dash-modal-actions">
            <button type="button" class="dash-btn" data-action="close-add">Cancel</button>
            <button type="submit" class="dash-btn dash-btn--primary">Save draft</button>
          </div>
        </form>
      </div>
    </div>
  `}function E(a,s){const t=(s==null?void 0:s.status)!=="sold",d=`
    <a class="dash-btn" href="${k}/plot/${a}">View</a>
    <button type="button" class="dash-btn dash-btn--toggle"
      data-action="toggle" data-id="${a}" data-next="${t?"sold":"available"}">
      ${t?"Mark sold":"Mark available"}
    </button>`;return x(a,s,d)}function R(a){const s=a.price?`KES ${Number(a.price).toLocaleString("en-KE")}`:null,t=[a.size,s].filter(Boolean).join(" · ");return`
    <article class="dash-plot dash-plot--draft">
      <div class="dash-plot-body">
        <div class="dash-plot-row">
          <span class="dash-plot-id">${r(a.name)}</span>
          <span class="dash-badge dash-badge--draft">Draft</span>
        </div>
        ${t?`<div class="dash-plot-meta">${r(t)}</div>`:""}
        ${a.notes?`<div class="dash-plot-facts">${r(a.notes)}</div>`:""}
      </div>
      <div class="dash-plot-actions">
        <button type="button" class="dash-btn" data-action="remove-draft" data-id="${r(a.id)}">
          Remove
        </button>
      </div>
    </article>`}function p(a,s,t){return`<button type="button" class="dash-tab${a===t?" is-active":""}"
    role="tab" aria-selected="${a===t}" data-tab="${a}">${s}</button>`}function f(a){const s=a.target.closest("[data-tab]");if(s){i=s.dataset.tab,o();return}const t=a.target.closest('[data-action="toggle"]');if(t){w(t.dataset.id,t.dataset.next),o();return}const n=a.target.closest('[data-action="remove-draft"]');if(n){A(n.dataset.id),o();return}if(a.target.closest('[data-action="open-add"]')){b(!0);return}a.target.closest('[data-action="close-add"]')&&b(!1)}function g(a){const s=a.target.closest('[data-form="add-draft"]');if(!s)return;a.preventDefault();const t=new FormData(s),n=String(t.get("name")||"").trim();n&&(D({id:`draft-${Date.now().toString(36)}`,name:n,size:String(t.get("size")||"").trim(),price:String(t.get("price")||"").trim(),notes:String(t.get("notes")||"").trim(),createdAt:new Date().toISOString()}),o())}function b(a){const s=e==null?void 0:e.querySelector(".dash-modal");if(s)if(s.dataset.open=a?"true":"false",a){const t=s.querySelector('input[name="name"]');t&&setTimeout(()=>t.focus(),0)}else{const t=s.querySelector("form");t&&t.reset()}}function r(a){return String(a==null?"":a).replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function M(){e&&(e.removeEventListener("click",f),e.removeEventListener("submit",g)),e=null}export{C as sellerView,M as teardownSellerView};
