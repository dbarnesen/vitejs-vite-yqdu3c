!function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=e(mapboxgl);const n="pk.eyJ1IjoiZGJhcm5lc2VuIiwiYSI6IjFWeUJFNFUifQ.CF2Du3MPcaCQhBBNJSQMDQ",a="https://uploads-ssl.webflow.com/5a12777c9048ed000106553e/65f40a4f33d817767e6e242e_marker_blue.svg",c=[8.2961,59.91639];let r=null;function l(t){o.default.accessToken=n;document.querySelectorAll(".tur-collection-item").forEach((e=>{const n=parseFloat(e.getAttribute("data-lat")),c=parseFloat(e.getAttribute("data-lng")),l=e.getAttribute("data-item-id");if(!isNaN(n)&&!isNaN(c)){const s=function(t=a){const e=document.createElement("div");return e.className="custom-marker",e.style.backgroundImage=`url(${t})`,e.style.width="40px",e.style.height="50px",e.style.backgroundSize="cover",e}(a),u=new o.default.Marker({element:s,anchor:"bottom"}).setLngLat([c,n]).addTo(t);e.addEventListener("click",(function(){if(r&&r!==this){const t=r.getAttribute("data-item-id");document.querySelector(`.tur-content-reveal[data-content-id="${t}"]`).click()}const t=document.querySelector(`.tur-content-reveal[data-content-id="${l}"]`);t&&(t.click(),r="block"===t.style.display?e:null),u.getElement().style.backgroundImage="url(https://uploads-ssl.webflow.com/5a12777c9048ed000106553e/65f40a4f0116312d1320e108_marker_okre.svg)",document.querySelectorAll(".custom-marker").forEach((t=>{t!==u.getElement()&&(t.style.backgroundImage=`url(${a})`)}))}))}}))}const s=t=>document.querySelector(t);document.addEventListener("DOMContentLoaded",(()=>{mapboxgl.accessToken=n;l(function(){o.default.accessToken=n;const t=new o.default.Map({container:"turmap",style:"mapbox://styles/dbarnesen/ckk3vfvbi4t1v17p82fuy61pt",center:c,zoom:5.5,pitch:54});t.addControl(new o.default.NavigationControl,"top-right"),t.addControl(new o.default.ScaleControl({maxWidth:80,unit:"metric"}));const e=new o.default.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0,showUserHeading:!0});return t.on("load",(()=>t.addControl(e))),document.getElementById("geolocateButton").addEventListener("click",(()=>e.trigger())),t}()),function(){let t,e;const o=e=>{t=e.touches[0].clientY},n=o=>{if(!t)return;e=o.changedTouches[0].clientY;const n=e-t;Math.abs(n)>20&&(n>0&&o.preventDefault(),n<0?a():c(),window.scrollTo(0,0),t=null)},a=()=>{s(".tur-collection-content").style.height="70vh",s(".tur-tray-arrow").style.transform="rotateX(0deg)"},c=()=>{s(".tur-collection-content").style.height="20vh",s(".tur-tray-arrow").style.transform="rotateX(180deg)"},r=s(".tur-content-slide-cnt");r&&(r.addEventListener("touchstart",o),r.addEventListener("touchend",n))}()}))}();
