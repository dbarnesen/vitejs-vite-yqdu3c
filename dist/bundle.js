!function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(mapboxgl);const o="pk.eyJ1IjoiZGJhcm5lc2VuIiwiYSI6IjFWeUJFNFUifQ.CF2Du3MPcaCQhBBNJSQMDQ",a=[8.2961,59.91639],i={Trehus:"mapbox://styles/dbarnesen/ckk3vfvbi4t1v17p82fuy61pt",Urheia:"mapbox://styles/dbarnesen/ckk3vfvbi4t1v17p82fuy61pt",Barna:"mapbox://styles/dbarnesen/clu1rd21q002x01pi0udm9dds",default:"mapbox://styles/dbarnesen/cltqf5kh9001w01qu48sn3oti"};let s;let l,c=null,r=null,d=[];function u(t){l=t,document.querySelectorAll(".tur-collection-item").forEach((t=>{const e=parseFloat(t.getAttribute("data-lat")),o=parseFloat(t.getAttribute("data-lng")),a=t.getAttribute("data-item-id"),i=t.getAttribute("data-kategori");if(!isNaN(e)&&!isNaN(o)){const s=function(t="location_on"){const e=document.createElement("span");return e.className="unSelected",e.innerHTML=t,e}("location_on"),u=new n.default.Marker({element:s,anchor:"bottom"}).setLngLat([o,e]).addTo(l);d.push({marker:u,item:t,category:i,element:s,latitude:e,longitude:o}),t.addEventListener("click",(function(){if(r){r.classList.remove("selected");d.find((t=>t.item===r)).element.classList.remove("selectedMarker")}this.classList.add("selected"),r=this;var t;d.find((t=>t.item===this)).element.classList.add("selectedMarker"),l.flyTo({center:[o,e],zoom:16,duration:2e3}),function(t){t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}(this),(t=document.querySelector(`.tur-collection-content[data-content-id="${a}"]`))!==c?(c&&m(c),function(t){t.style.display="block",setTimeout((()=>{t.classList.add("expanded"),t.style.height="30vh"}),10)}(t),c=t):(m(t),c=null)})),u.getElement().addEventListener("click",(()=>{t.click()}))}})),document.querySelectorAll(".showmapbutton").forEach((t=>{t.addEventListener("click",(function(){const t=this.getAttribute("data-kategori");!function(t){s&&t&&s.setStyle(t)}(i[t]||i.default),function(t){document.querySelectorAll(".tur-collection-item").forEach((e=>{const n=e.getAttribute("data-kategori");e.style.display="all"===t||n===t?"":"none"}))}(t),function(t,e,n){const o=new mapboxgl.LngLatBounds;e.forEach((({marker:e,category:a,latitude:i,longitude:s})=>{const l="all"===n||a===n;e.getElement().style.visibility=l?"visible":"hidden",l?(e.addTo(t),o.extend(e.getLngLat())):e.remove()})),o.isEmpty()||t.fitBounds(o,{padding:50,maxZoom:15,pitch:54,duration:6e3})}(l,d,t)}))}))}function m(t){t.classList.remove("expanded"),setTimeout((()=>{t.style.height="0",setTimeout((()=>t.style.display="none"),300)}),10)}document.addEventListener("DOMContentLoaded",(()=>{mapboxgl.accessToken=o;u(function(){n.default.accessToken=o,s=new n.default.Map({container:"turmap",style:"mapbox://styles/dbarnesen/ckk3vfvbi4t1v17p82fuy61pt",center:a,zoom:5.5,pitch:54}),s.addControl(new n.default.NavigationControl,"top-right"),s.addControl(new n.default.ScaleControl({maxWidth:80,unit:"metric"}));const t=new n.default.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0,showUserHeading:!0});return s.on("load",(()=>s.addControl(t))),document.getElementById("geolocateButton").addEventListener("click",(()=>t.trigger())),s}()),function(){let t,e=!1,n=!1;const o=e=>{t=e.touches[0].clientY,n=!1},a=o=>{if(!t)return;const a=o.touches[0].clientY-t;if(Math.abs(a)>10){e=!0,n=!0;const t=o.target.closest(".tur-collection-content");if(t){let e=30+a*(100/window.innerHeight);e=Math.max(0,Math.min(e,70)),t.style.maxHeight=`${e}vh`}}},i=o=>{const a=o.target.closest(".tur-collection-content");a&&!n?(a.style.maxHeight="30vh",a.style.transition="max-height 0.3s ease, opacity 0.3s ease"):e&&s(a),t=null,e=!1,n=!1},s=t=>{let e=parseFloat(t.style.maxHeight);t.style.transition="max-height 0.3s ease, opacity 0.3s ease",t.style.maxHeight=e>=35?"70vh":"30vh"};document.querySelectorAll(".tur-content-slide-cnt").forEach((t=>{t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("touchmove",a,{passive:!0}),t.addEventListener("touchend",i)}))}()}))}();
