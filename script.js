import both_pack from "./content/data.js";

const content = both_pack.map((pack) => {
  let packArticle = document.createElement("article");
  packArticle.classList.add("backpack");
  packArticle.setAttribute("id", pack.id);

  packArticle.innerHTML = `
    <figure class="backpack__image">
    <img src = ${pack.image} alt = '' loading="lazy"/>
    </figure>
    <h4 class="backpack__name"> Name: ${pack.name}</h4>
    <ul class="features">
    <li class="backpack__volume"> Volume: <span> ${pack.volume}</span> </li>
     <li class="backpack__color"> Color: <span> ${pack.color}</span> </li>
     
       <li class="backpack__lid" > Lid status: <span> ${
         pack.lidOpen ? "Opened" : " closed"
       }</span></li>
         <li class="feature backpack__pockets"> Pocket number: <span> ${
           pack.PockNum
         }</span></li>
           <li class="feature backpack__strap"> left length: <span> ${
             pack.strapLength.Left
           }</span></li>
           <li class="feature backpack__strap"> Right length: <span> ${
             pack.strapLength.Right
           }</span></li>
           <li class="feature backpack__age"> Date since it was aquired: <span> ${pack.backpackAge()} days old </span><li>
    </ul>
    `;

  return packArticle;
});

const mainContent = document.querySelector(".main-content");
content.forEach((pack) => {
  mainContent.append(pack);
});
