!function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);const n="pk.eyJ1IjoiZGJhcm5lc2VuIiwiYSI6IjFWeUJFNFUifQ.CF2Du3MPcaCQhBBNJSQMDQ",a="https://uploads-ssl.webflow.com/5a12777c9048ed000106553e/65f40a4f33d817767e6e242e_marker_blue.svg",c="https://uploads-ssl.webflow.com/5a12777c9048ed000106553e/65f40a4f0116312d1320e108_marker_okre.svg",r=[8.2961,59.91639];function l(e){const t=document.querySelectorAll(".tur-collection-item");let n=null,r=[];t.forEach(((t,l)=>{const s=parseFloat(t.getAttribute("data-lat")),i=parseFloat(t.getAttribute("data-lng")),d=t.getAttribute("data-kategori");if(!isNaN(s)&&!isNaN(i)&&d){const d=function(e){var t=document.createElement("div");return t.className="custom-marker",t.style.backgroundImage="url("+e+")",t.style.width="40px",t.style.height="50px",t.style.backgroundSize="cover",t}(a),u=new o.default.Marker({element:d,anchor:"bottom"}).setLngLat([i,s]).addTo(e);r.push(u),t.addEventListener("click",(function(){e.flyTo({center:[i,s],zoom:15}),function(e){document.getElementById("map-slides"),e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}(t),function(e,t){e.forEach((function(e,o){var n=o===t?c:a;e.getElement().style.backgroundImage="url("+n+")"}))}(l,r),function(e,t){t&&(t.style.borderColor="",t.style.backgroundColor=""),e.style.borderColor="#cc9752",e.style.backgroundColor="#cc9752",t=e}(t,n),n=t}))}}))}mapboxgl.accessToken=n,document.addEventListener("DOMContentLoaded",(()=>{l(function(){o.default.accessToken=n;const e=new o.default.Map({container:"turmap",style:"mapbox://styles/dbarnesen/ckk3vfvbi4t1v17p82fuy61pt",center:r,zoom:5.5,pitch:54});e.addControl(new o.default.NavigationControl,"top-right"),e.addControl(new o.default.ScaleControl({maxWidth:80,unit:"metric"}));const t=new o.default.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0,showUserHeading:!0});return e.on("load",(()=>{e.addControl(t)})),document.getElementById("geolocateButton").addEventListener("click",(function(){t.trigger()})),e}())}))}(mapboxgl$1);
