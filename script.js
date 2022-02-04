import both_pack from "./content/data.js";

const content = both_pack.map((pack) => {
  let packArticle = document.createElement("article");
  packArticle.classList.add("backpack");
  packArticle.setAttribute("id", pack.id);

  packArticle.innerHTML = `
    <figure>
    <img src = ${pack.image} alt = '' loading="lazy"/>
    </figure>
    <h1> Name: ${pack.name}</h1>
    <ul>
    <li> Volume: <span> ${pack.volume}</span> </li>
     <li> Color: <span> ${pack.color}</span> </li>
     <li> Volume: <span> ${pack.volume}</span></li>
       <li> Lid status: <span> ${
         pack.lidOpen ? "Opened" : " closed"
       }</span></li>
         <li> Pocket number: <span> ${pack.PockNum}</span></li>
           <li> left length: <span> ${pack.strapLength.Left}</span></li>
           <li> Right length: <span> ${pack.strapLength.Right}</span></li>
           <li> Date since it was aquired: <span> ${pack.backpackAge()} days old </span><li>
    </ul>
    `;

  return packArticle;
});

const mainContent = document.querySelector(".main-content");
content.forEach((pack) => {
  mainContent.append(pack);
});
