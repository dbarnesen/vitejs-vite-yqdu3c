!function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(mapboxgl);const o="pk.eyJ1IjoiZGJhcm5lc2VuIiwiYSI6IjFWeUJFNFUifQ.CF2Du3MPcaCQhBBNJSQMDQ",a=[8.2961,59.91639],l={Trehus:"mapbox://styles/dbarnesen/ckk3vfvbi4t1v17p82fuy61pt",Urheia:"mapbox://styles/dbarnesen/ckk3vfvbi4t1v17p82fuy61pt",Barna:"mapbox://styles/dbarnesen/clu1rd21q002x01pi0udm9dds",default:"mapbox://styles/dbarnesen/cltqf5kh9001w01qu48sn3oti"};let c;let i,s=null,r=null,d=[];function u(t){i=t,document.querySelectorAll(".tur-collection-item").forEach((t=>{const e=parseFloat(t.getAttribute("data-lat")),o=parseFloat(t.getAttribute("data-lng")),a=t.getAttribute("data-item-id"),l=t.getAttribute("data-kategori");if(!isNaN(e)&&!isNaN(o)){const c=function(t="location_on"){const e=document.createElement("span");return e.className="unSelected",e.innerHTML=t,e}("location_on"),u=new n.default.Marker({element:c,anchor:"bottom"}).setLngLat([o,e]).addTo(i);d.push({marker:u,item:t,category:l,element:c,latitude:e,longitude:o}),t.addEventListener("click",(function(){if(r){r.classList.remove("selected");d.find((t=>t.item===r)).element.classList.remove("selectedMarker")}this.classList.add("selected"),r=this;var t;d.find((t=>t.item===this)).element.classList.add("selectedMarker"),i.flyTo({center:[o,e],zoom:16,duration:2e3}),function(t){t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}(this),(t=document.querySelector(`.tur-collection-content[data-content-id="${a}"]`))!==s?(s&&m(s),function(t){t.style.display="block",setTimeout((()=>{t.classList.add("expanded"),t.style.height="30vh"}),10)}(t),s=t):(m(t),s=null)})),u.getElement().addEventListener("click",(()=>{t.click()}))}})),document.querySelectorAll(".showmapbutton").forEach((t=>{t.addEventListener("click",(function(){const t=this.getAttribute("data-kategori");!function(t){c&&t&&c.setStyle(t)}(l[t]||l.default),function(t){document.querySelectorAll(".tur-collection-item").forEach((e=>{const n=e.getAttribute("data-kategori");e.style.display="all"===t||n===t?"":"none"}))}(t),function(t,e,n){const o=new mapboxgl.LngLatBounds;e.forEach((({marker:e,category:a,latitude:l,longitude:c})=>{const i="all"===n||a===n;e.getElement().style.visibility=i?"visible":"hidden",i?(e.addTo(t),o.extend(e.getLngLat())):e.remove()})),o.isEmpty()||t.fitBounds(o,{padding:50,maxZoom:15,pitch:54,duration:6e3})}(i,d,t)}))}))}function m(t){t.classList.remove("expanded"),setTimeout((()=>{t.style.height="0",setTimeout((()=>t.style.display="none"),300)}),10)}function f(){let t,e;const n=e=>{t=e.touches[0].clientY},o=n=>{if(!t)return;e=n.changedTouches[0].clientY;const o=e-t;Math.abs(o)>20&&(o>0?l(n.target):a(n.target),window.scrollTo(0,0),t=null)},a=t=>{const e=t.closest(".tur-collection-content");if(e){e.classList.add("expanded"),e.style.maxHeight="70vh";const t=e.querySelector(".tur-tray-arrow");t&&(t.style.transform="rotateX(0deg)")}},l=t=>{const e=t.closest(".tur-collection-content");if(e){e.classList.remove("expanded"),e.style.maxHeight="0";const t=e.querySelector(".tur-tray-arrow");t&&(t.style.transform="rotateX(180deg)")}};var c,i;c=".tur-content-slide-cnt",i=t=>{t.addEventListener("touchstart",n),t.addEventListener("touchend",o)},document.querySelectorAll(c).forEach(i)}document.addEventListener("DOMContentLoaded",(()=>{mapboxgl.accessToken=o;u(function(){n.default.accessToken=o,c=new n.default.Map({container:"turmap",style:"mapbox://styles/dbarnesen/ckk3vfvbi4t1v17p82fuy61pt",center:a,zoom:5.5,pitch:54}),c.addControl(new n.default.NavigationControl,"top-right"),c.addControl(new n.default.ScaleControl({maxWidth:80,unit:"metric"}));const t=new n.default.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0,showUserHeading:!0});return c.on("load",(()=>c.addControl(t))),document.getElementById("geolocateButton").addEventListener("click",(()=>t.trigger())),c}()),f()}))}();
