import{a as f,S as u,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p="57635798-c4932ba894df776d1b1444d77",m="https://pixabay.com/api/?key=57635798-c4932ba894df776d1b1444d77&q=yellow+flowers&image_type=photo";async function y(t){const r={key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(m,{params:r})).data}const l=document.querySelector(".gallery"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const r=t.map(({webformatURL:o,largeImageURL:a,tags:e,likes:s,views:i,comments:c,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img 
            class="gallery-image" 
            src="${o}" 
            alt="${e}" 
            loading="lazy" 
          />
        </a>
        <div class="info-box">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${s}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${i}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${c}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${d}</span>
          </div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function v(){l.innerHTML=""}function b(){const t=document.querySelector(".loader");t&&t.classList.remove("is-hidden")}function L(){const t=document.querySelector(".loader");t&&t.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",S);async function S(t){t.preventDefault();const r=t.currentTarget,o=r.elements.userQuery.value.trim();if(o===""){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}v(),b();try{const a=await y(o);(!a.hits||a.hits.length===0)&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3}),h(a.hits),r.reset()}catch(a){n.error({title:"Error",message:`Something went wrong: ${a.message}`,position:"topRight"})}finally{L()}}
//# sourceMappingURL=index.js.map
