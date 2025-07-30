import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";async function _(){try{return(await a("https://dummyjson.com/products/category-list")).data}catch(t){throw console.log(t.message),new Error("Something went wrong!")}}async function l(t=1){try{return(await a.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}catch(e){throw console.log(e.message),new Error("Something went wrong!")}}async function h(t,e=1){try{return(await a.get(`https://dummyjson.com/products/category/${t}?limit=12&skip=${(e-1)*12}`)).data}catch(o){throw console.log(o.message),new Error("Something went wrong!")}}async function y(t){try{const o=(await a.get(`https://dummyjson.com/products/${t}`)).data;return console.log("Loading product:",t),o}catch(e){console.log(e)}}const c={categotiesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divNotFound:document.querySelector(".not-found"),themeToggleBtn:document.querySelector(".theme-toggle-btn"),modalProduct:document.querySelector(".modal"),modalProductContent:document.querySelector(".modal-product"),closeModalBtn:document.querySelector(".modal__close-btn")};function f(t){const e=["All",...t].map(o=>`
    <li class="categories__item">
        <button class="categories__btn" type="button">${o}</button>
    </li>
 `).join("");c.categotiesList.insertAdjacentHTML("beforeend",e)}function u(t){const e=t.map(({id:o,title:s,thumbnail:n,brand:r,category:d,price:i})=>`
    <li class="products__item" data-id="${o}">
    <img class="products__image" src="${n}" alt="${s}"/>
    <p class="products__title">${s}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${r}</span></p>
    <p class="products__category">Category:${d}</p>
    <p class="products__price">Price:${i}$</p>
 </li>
    `).join("");c.productsList.insertAdjacentHTML("beforeend",e)}function L(){c.divNotFound.classList.remove("not-found--visible"),c.productsList.innerHTML=""}async function w(t){if(t.target.classList.contains("categories__btn")){const e=t.target;c.categotiesList.querySelectorAll(".categories__btn").forEach(r=>{r.classList.remove("categories__btn--active")}),e.classList.add("categories__btn--active");const s=e.textContent,n=s==="All"?await l():await h(s);L(),n.products.length!==0?u(n.products):c.divNotFound.classList.add("not-found--visible")}}function $(){c.themeToggleBtn.addEventListener("click",()=>{const t=document.documentElement,o=t.dataset.theme==="dark"?"light":"dark";t.dataset.theme=o,localStorage.setItem("site-theme",o)})}function b(){c.modalProduct.classList.add("modal--is-open")}function m(){c.modalProduct.classList.remove("modal--is-open")}function P(){window.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("site-theme"),e=document.documentElement;e.dataset.theme=t||"light"})}function v(t){const{images:e,description:o,title:s,tags:n="Not specified",shippingInformation:r="Not specified",returnPolicy:d="Not specified",price:i}=t,p=`
<img class="modal-product__img" src="${e[0]}" alt="${s}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${s}</p>
        <ul class="modal-product__tags">
    ${n.map(g=>`<li class="modal-product__tag">${g}</li>`).join("")}</ul>
        <p class="modal-product__description">${o}</p>
        <p class="modal-product__shipping-information">Shipping:${r}</p>
        <p class="modal-product__return-policy">Return Policy:${d}</p>
        <p class="modal-product__price">Price: ${i}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`;console.log("Product received:",t),document.querySelector(".modal-product").innerHTML=p}async function S(){f(await _());const t=await l();u(t.products)}P();$();S();c.categotiesList.addEventListener("click",w);c.productsList.addEventListener("click",async t=>{const e=t.target.closest(".products__item");if(!e)return;const o=e.dataset.id;b();try{const s=await y(o);v(s)}catch(s){console.log(s)}});c.closeModalBtn.addEventListener("click",m);c.modalProduct.addEventListener("click",t=>{c.modalProductContent.contains(t.target)||m()});
//# sourceMappingURL=index.js.map
