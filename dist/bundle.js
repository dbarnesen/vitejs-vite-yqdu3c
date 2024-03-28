!function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=e(mapboxgl);const n="pk.eyJ1IjoiZGJhcm5lc2VuIiwiYSI6IjFWeUJFNFUifQ.CF2Du3MPcaCQhBBNJSQMDQ",a="https://uploads-ssl.webflow.com/5a12777c9048ed000106553e/65f40a4f33d817767e6e242e_marker_blue.svg",s="mapbox://styles/dbarnesen/ckk3vfvbi4t1v17p82fuy61pt",c=[8.2961,59.91639];let l,r=null,i=null,d=[];function u(t){l=t,document.querySelectorAll(".tur-collection-item").forEach((t=>{const e=parseFloat(t.getAttribute("data-lat")),n=parseFloat(t.getAttribute("data-lng")),s=t.getAttribute("data-item-id"),c=t.getAttribute("data-kategori");if(!isNaN(e)&&!isNaN(n)){const u=function(t=a){const e=document.createElement("div");return e.className="custom-marker",e.style.backgroundImage=`url(${t})`,e.style.width="40px",e.style.height="50px",e.style.backgroundSize="cover",e}(a),f=new o.default.Marker({element:u,anchor:"bottom"}).setLngLat([n,e]).addTo(l);d.push({marker:f,item:t,category:c,latitude:e,longitude:n}),t.addEventListener("click",(function(){var t;i&&(i.classList.remove("selected"),g(i,a)),this.classList.add("selected"),i=this,g(this,"https://uploads-ssl.webflow.com/5a12777c9048ed000106553e/65f40a4f0116312d1320e108_marker_okre.svg"),l.flyTo({center:[n,e],zoom:16}),function(t){t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}(this),(t=document.querySelector(`.tur-collection-content[data-content-id="${s}"]`))!==r?(r&&m(r),function(t){t.style.display="block",setTimeout((()=>{t.classList.add("expanded"),t.style.height="30vh"}),10)}(t),r=t):(m(t),r=null)})),f.getElement().addEventListener("click",(()=>{t.click()}))}})),document.querySelectorAll(".showmapbutton").forEach((t=>{t.addEventListener("click",(function(){const t=this.getAttribute("data-kategori"),e=this.getAttribute("data-mapstyle")||s;l.setStyle(e),l.on("style.load",(()=>function(t){const e=new o.default.LngLatBounds;d.forEach((({marker:o,category:n,latitude:a,longitude:s})=>{const c="all"===t||n===t;o.getElement().style.display=c?"block":"none",c&&e.extend([s,a])})),e.isEmpty()||l.fitBounds(e,{padding:50,maxZoom:15,duration:5e3})}(t)))}))}))}function m(t){t.classList.remove("expanded"),setTimeout((()=>{t.style.height="0",setTimeout((()=>t.style.display="none"),300)}),10)}function g(t,e){const o=d.find((e=>e.item===t));o&&(o.marker.getElement().style.backgroundImage=`url(${e})`)}function f(){let t,e;const o=e=>{t=e.touches[0].clientY},n=o=>{if(!t)return;e=o.changedTouches[0].clientY;const n=e-t;Math.abs(n)>20&&(n>0?s(o.target):a(o.target),window.scrollTo(0,0),t=null)},a=t=>{const e=t.closest(".tur-collection-content");if(e){e.style.height="70vh",e.classList.add("expanded");const t=e.querySelector(".tur-tray-arrow");t&&(t.style.transform="rotateX(0deg)")}},s=t=>{const e=t.closest(".tur-collection-content");if(e){e.classList.remove("expanded"),e.style.height="20vh",setTimeout((()=>{e.classList.contains("expanded")||(e.style.display="none")}),300);const t=e.querySelector(".tur-tray-arrow");t&&(t.style.transform="rotateX(180deg)")}};var c,l;c=".tur-content-slide-cnt",l=t=>{t.addEventListener("touchstart",o),t.addEventListener("touchend",n)},document.querySelectorAll(c).forEach(l)}document.addEventListener("DOMContentLoaded",(()=>{mapboxgl.accessToken=n;u(function(){o.default.accessToken=n;const t=new o.default.Map({container:"turmap",style:s,center:c,zoom:5.5,pitch:54});t.addControl(new o.default.NavigationControl,"top-right"),t.addControl(new o.default.ScaleControl({maxWidth:80,unit:"metric"}));const e=new o.default.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0,showUserHeading:!0});return t.on("load",(()=>t.addControl(e))),document.getElementById("geolocateButton").addEventListener("click",(()=>e.trigger())),t}()),f()}))}();
