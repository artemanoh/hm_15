const e=document.querySelector(".image-list"),t=document.querySelector(".button");let n=1;const i=e=>e.map(e=>`
      <li>
        <img src="${e.webformatURL}" />
        <button class="like" aria-label="Like">&#10084;</button>
        <span class="like-count">0</span>
      </li>
    `).join(""),s=()=>{fetch(`https://pixabay.com/api/?key=50834834-38d93ed52f356f352f281d28a&per_page=5&page=${n}`).then(e=>e.json()).then(t=>{e.insertAdjacentHTML("beforeend",i(t.hits))})};t.addEventListener("click",()=>{n++,s()}),e.addEventListener("click",e=>{if(e.target.classList.contains("like")){let t=e.target,n=t.nextElementSibling,i=parseInt(n.textContent,10);n.textContent=++i,t.classList.add("clicked"),setTimeout(()=>t.classList.remove("clicked"),400)}}),s();
//# sourceMappingURL=hm_15.de5258ea.js.map
