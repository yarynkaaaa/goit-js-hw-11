import{a as d,S as p,i as n}from"./assets/vendor-DDdXnYQq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();d.defaults.baseURL="https://pixabay.com/api/";function m(t){return d.get("/",{params:{key:"51491215-b07c5a52c3d96c7bcc8c26318",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function g(t){return`
    <li class="gallery-item">
      <div class="image-wrap">
          <a href="${t.largeImageURL}" data-lightbox="gallery" data-title="${t.tags}">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
          </a>
      </div>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${t.likes}</p>
        <p class="info-item"><b>Views</b> ${t.views}</p>
        <p class="info-item"><b>Comments</b> ${t.comments}</p>
        <p class="info-item"><b>Downloads</b> ${t.downloads}</p>
      </div>
    </li>
  `}function y(t){t.innerHTML=""}function h(){document.querySelector(".loader").style.display="block"}function b(){document.querySelector(".loader").style.display="none"}const f=document.querySelector(".form"),c=f.querySelector('input[name="search-text"]'),u=document.querySelector(".gallery");let l;document.addEventListener("DOMContentLoaded",()=>{l=new p(".gallery a",{captionsData:"alt",captionDelay:250})});f.addEventListener("submit",t=>{t.preventDefault();const o=c.value.trim();if(o===""){n.warning({title:"",message:"Please enter something in the search field",position:"topRight",backgroundColor:"#ffa000",color:"white",progressBarColor:"#bb7b10",timeout:3e3});return}c.value="",y(u),h(),m(o).then(i=>{const a=i.data.hits;if(a.length===0)n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",color:"white",progressBarColor:"#b51b1b",timeout:3e3});else{const e=a.map(g).join("");u.innerHTML=e,l&&l.refresh()}}).catch(i=>{console.error("Помилка при запиті до Pixabay:",i),n.error({title:"Error",message:"Сталася помилка при завантаженні зображень. Будь ласка, спробуйте пізніше.",position:"topRight",backgroundColor:"#ef4040;",color:"white",progressBarColor:"#b51b1b;",timeout:3e3})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
