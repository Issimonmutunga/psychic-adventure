import{m as N}from"./maplibre-CcmHau8V.js";import{m as P,l as B,a as A,g,b as j,B as h,f as w,c as k,d as T,C as l,s as m,h as z,e as E,p as C,i as R}from"./index-7fJqyOi-.js";let t=null,d=null;async function X(o,s){s.innerHTML="";const n=P(s);try{await B()}catch(r){return console.error(r),n.textContent="Unable to load property information.",n.classList.add("status--error"),!1}const e=j(o),i=W(o);return!e&&!i?(q(s,o),!1):(Z(s,o,e),A(s.querySelector(".pv-role-host")),document.title=L(o,e),D(o,e),i&&U(s,o,i),!0)}function Z(o,s,n,e,i){var b;const r=w(n==null?void 0:n.price,n==null?void 0:n.currency),c=k(n==null?void 0:n.status),a=T(n==null?void 0:n.size),f=(n==null?void 0:n.status)==="available"?"#7a5538":"#673515",x=(n==null?void 0:n.description)||"No description has been provided for this parcel yet.";let $="";const u=[];(n==null?void 0:n.road_access)!=null&&u.push(n.road_access?"Road access":"No road access"),(n==null?void 0:n.water)!=null&&u.push(n.water?"Water nearby":"No water"),u.length&&($=`<section class="pv-block">
      <h2 class="pv-h2">Key facts</h2>
      <ul class="pv-facts">
        ${u.map(p=>`<li>${v(p)}</li>`).join("")}
      </ul>
    </section>`);const S=(b=n==null?void 0:n.landmarks)!=null&&b.length?`<section class="pv-block pv-nearby">
        <h2 class="pv-h2">Nearby places</h2>
        <ul class="pv-landmarks">
          ${n.landmarks.map(p=>`
            <li class="pv-landmark">
              <span class="pv-lm-name">${v(p.name)}</span>
              <span class="pv-lm-dist">${p.distance_km!=null?`${p.distance_km} km`:""}</span>
            </li>`).join("")}
        </ul>
      </section>`:"",H=`https://wa.me/${l.seller.whatsappNumber}?text=${encodeURIComponent(`Hello, I'm interested in ${s} (${l.site.name}).`)}`,I=`tel:${l.seller.contactNumber.replace(/[^+\d]/g,"")}`;o.innerHTML=`
    <div class="pv">
      <header class="pv-topbar">
        <a class="pv-back" href="${h}/" aria-label="Back to map">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          <span>Map</span>
        </a>
        <div class="pv-role-host"></div>
        <a class="brand-link pv-brand" href="${h}/" aria-label="${l.site.name} home">
          <span class="brand-name">${l.site.name}</span>
        </a>
      </header>

      <main class="pv-main">
        <div class="pv-card">

          <div class="pv-media">
            <figure class="pv-hero">
              ${_(s,n)}
            </figure>
            ${F(s,n)}
          </div>

          <div class="pv-body">
            <div class="pv-head">
              <div class="pv-id-row">
                <span class="pv-id">${s}</span>
                ${c?`<span class="pv-badge" style="color:${f};border-color:${f}">${c}</span>`:""}
              </div>
              ${r?`<div class="pv-price">${r}</div>`:""}
              ${a?`<div class="pv-size">${a}</div>`:""}
            </div>

            ${$}

            <section class="pv-block">
              <h2 class="pv-h2">About this land</h2>
              <p class="pv-desc">${v(x)}</p>
            </section>

            <section class="pv-block pv-location">
              <h2 class="pv-h2">Location</h2>
              <div class="pv-map-wrap">
                <div id="pv-map" class="pv-map"></div>
                <div class="pv-map-overlay">
                  <button type="button" class="pv-focus-btn" aria-label="Center ${s} on map">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
                    <span>${s}</span>
                  </button>
                </div>
              </div>
              ${S}
            </section>

            <div class="pv-contact">
              <a class="pv-btn pv-btn--primary" href="${H}" target="_blank" rel="noopener">
                ${y("wa")} WhatsApp us
              </a>
              <a class="pv-btn pv-btn--ghost" href="${I}">
                ${y("call")} Call ${l.seller.contactNumber}
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  `}function _(o,s){const n=z(o,s==null?void 0:s.photos),e=C(n,{eager:!0});return`<img src="${e.src}" srcset="${e.srcset}" sizes="${e.sizes}"
    loading="${e.loading}" decoding="${e.decoding}" alt="${o} photograph" />`}function F(o,s){const n=R(o,s==null?void 0:s.photos).slice(1);return n.length?`<div class="pv-thumbs">
    ${n.map((e,i)=>{const r=C(e);return`<img src="${r.src}" srcset="${r.srcset}" sizes="${r.sizes}"
          loading="${r.loading}" decoding="${r.decoding}" alt="${o} photograph ${i+2}" />`}).join("")}
  </div>`:""}function q(o,s){o.innerHTML=`
    <div class="pv pv--notfound">
      <div class="pv-nf-inner">
        <h1>Property not found</h1>
        <p>We could not find parcel "${v(s)}". It may have been removed.</p>
        <a class="pv-btn pv-btn--primary" href="${h}/">Back to the map</a>
      </div>
    </div>
  `}function U(o,s,n){const e=document.getElementById("pv-map");if(!e)return;t=new N.Map({container:e,style:l.map.styleUrl,center:[n.center[0],n.center[1]],zoom:15,minZoom:l.map.minZoom,maxZoom:l.map.maxZoom,attributionControl:!1}),t.addControl(new E,"bottom-right"),t.touchZoomRotate.disableRotation();const i={type:"Feature",properties:{id:s},geometry:g(s)};t.on("style.load",()=>{t.addSource("p",{type:"geojson",data:{type:"FeatureCollection",features:[i]}}),t.addLayer({id:"p-fill",type:"fill",source:"p",paint:{"fill-color":"#815a35","fill-opacity":.18}}),t.addLayer({id:"p-line",type:"line",source:"p",paint:{"line-color":"#7a5538","line-width":3,"line-opacity":.95}});const r=t.getSource("p")?n.center:[0,0];t.flyTo({center:r,zoom:15,duration:0});const c=document.querySelector(".pv-focus-btn");c&&c.addEventListener("click",()=>{t.flyTo({center:n.center,zoom:15,duration:600})})}),d=()=>t.resize(),window.addEventListener("resize",d),t.on("load",()=>t.resize())}function W(o){const s=g(o);if(!s)return null;let n=1/0,e=1/0,i=-1/0,r=-1/0;return M(s.coordinates,(c,a)=>{c<n&&(n=c),a<e&&(e=a),c>i&&(i=c),a>r&&(r=a)}),n===1/0?null:{bbox:[n,e,i,r],center:[(n+i)/2,(e+r)/2]}}function L(o,s){const n=s==null?void 0:s.size,e=n?` (${n})`:"";return`${o}${e} — ${(s==null?void 0:s.status)==="available"?"Land for sale":"Sold land"} | ${l.site.name}`}function D(o,s){const n=w(s==null?void 0:s.price,s==null?void 0:s.currency),e=k(s==null?void 0:s.status),i=[o,e,s!=null&&s.size?`(${s.size})`:null,n?`at ${n}`:null,(s==null?void 0:s.description)||null].filter(Boolean).join(" - ").slice(0,200);m({title:L(o,s),description:i,url:`${l.site.domain.replace(/\/$/,"")}/plot/${o}`,image:z(o,s==null?void 0:s.photos)})}function M(o,s){if(typeof o[0]=="number"){s(o[0],o[1]);return}for(const n of o)M(n,s)}function v(o){return String(o==null?"":o).replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function y(o){const s={pin:'<path d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="11" r="2.2" fill="currentColor"/>',call:'<path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',wa:'<path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 9c-.5 0-.9.5-.7 1 .9 2.4 2.8 4.3 5.2 5.2.5.2 1-.2 1-.7l.8-1.7c.2-.5-.4-1-.8-.8l-1.4.6a9 9 0 01-2.4-2.4l.6-1.4c.2-.4-.3-1-.8-.8z" fill="currentColor"/>'};return`<svg class="pv-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">${s[o]||s.pin}</svg>`}function Y(){d&&window.removeEventListener("resize",d),d=null,t&&(t.remove(),t=null)}export{X as propertyView,Y as teardownPropertyView};
