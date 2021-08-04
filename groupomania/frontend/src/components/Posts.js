const Posts = () => {
  // Requête GET vers l'API
  return (
    // Requête GET vers l'API

    fetch("http://localhost:3000/api/")
      .then((response) => response.json())
      .then((json) => {
        let el = [];
        // Boucle de création d'éléments
        for (let bc of json) {
          el.push(document.createElement("div"));
          el[el.length - 1].className = "description";
          document.querySelector(".container").appendChild(el[el.length - 1]);

          let img = document.createElement("img");
          img.src = bc.imageUrl;
          el[el.length - 1].appendChild(img);

          let pNom = document.createElement("p");
          pNom.textContent = bc.name;
          el[el.length - 1].appendChild(pNom);

          let pPrix = document.createElement("p");
          pPrix.textContent = bc.price + "€";
          el[el.length - 1].appendChild(pPrix);

          el[el.length - 1].onclick = () => {
            localStorage.setItem("idCourrant", bc._id);
            location.href = "ours/ours.html";
          };
        }
      })
  );
};

export default Posts;
