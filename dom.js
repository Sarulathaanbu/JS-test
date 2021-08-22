const button = document.createElement('button');
const btn = document.createElement("button");
btn.innerHTML = "Random Image";
document.body.appendChild(btn);
btn.addEventListener("click", function() {
      const img = document.createElement("img");
      document.body.innerHTML = "";
      document.body.appendChild(btn);
      img.src =
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";
      document.body.appendChild(img);
