

function products() {
  fetch("db.json")
    .then((res) => {
      return res.json();
    })
    .then((product) => {
      product.forEach((element) => {
        const productsTitle = document.querySelector(".wrapper");
        productsTitle.style.display = "flex";
        productsTitle.style.flexWrap = "wrap";
        

        const container = document.createElement("div");
        container.className = "container";
        container.style.display = "flex";
        container.style.width = "300px";
        container.style.flexDirection = "column";
        container.style.margin = "40px auto";
        container.style.border = "8px solid #ccc";
        container.style.backgroundColor = "rgb(125, 138, 127)";
        container.style.textAlign = "center";
        container.style.borderRadius = "10px";
        container.style.padding = "3em";
        productsTitle.appendChild(container);

        const divImg = document.createElement("div");
        divImg.style.backgroundColor = "rgb(125, 138, 127)";
        container.appendChild(divImg);

        const photo = document.createElement("img");
        photo.style.width = "200px";
        photo.style.height = "280px";
        photo.style.objectFit = "contain";
        photo.style.backgroundColor = "rgb(125, 138, 127)";
        divImg.appendChild(photo);

        const div1 = document.createElement("div");
        div1.className = "div-1";
        div1.style.width = "280px";
        div1.style.height = "60px";
        div1.style.textAlign = "center";
        div1.style.display = "flex";
        div1.style.borderBottom = "3px solid #ccc";
        div1.style.justifyContent = "space-between";
        div1.style.backgroundColor = "rgb(125, 138, 127)";
        div1.style.alignItems = "center";
        div1.style.padding = "10px";
        divImg.appendChild(div1);

        const h1 = document.createElement("h1");
        h1.style.fontSize = "15px";
        h1.style.width = "200px";
        div1.appendChild(h1);

        const h2 = document.createElement("h2");
        h2.style.fontSize = "15px";
        div1.appendChild(h2);

        const text = document.createElement("div");
        container.appendChild(text);

        const p = document.createElement("p");
        text.appendChild(p);

        photo.getAttribute("src");
        photo.src = element.img;
        h1.textContent = element.title;
        h2.textContent = element.price;
        p.textContent = element.desc;
     


//filtering 
             const btnAll = document.querySelector(".filters-btn-all");
             const btnLaptop = document.querySelector(".filters-btn-laptops");
             const btnPhone = document.querySelector(".filters-btn-phones");
             const btnTv = document.querySelector(".filters-btn-tv");
             btnAll.addEventListener("click", () => {
                 if (element.category === "") {
                     container.style.display = "none";
                 } else {
                     container.style.display = "block";
                 }
             });

             btnLaptop.addEventListener("click", () => {
                 if (element.category === "laptops") {
                     container.style.display = "block";
                 } else {
                     container.style.display = "none";
                 }
             });

             btnPhone.addEventListener("click", () => {
                 if (element.category === "smartphones") {
                     container.style.display = "block";
                 } else {
                     container.style.display = "none";
                 }
             });

             btnTv.addEventListener("click", () => {
                 if (element.category === "tv") {
                     container.style.display = "block";
                 } else {
                     container.style.display = "none";
                 }
             });

         });
     })

     .catch((error) => {
         console.log(error);
     });
}
products();

