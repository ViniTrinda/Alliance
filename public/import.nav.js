fetch("/nav.html") // está em public/, então vira raiz
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const tabScript = document.createElement('script');
    tabScript.src = '/scripts/tab.js'; 

    const menuScript = document.createElement('script');
    menuScript.src = '/scripts/menu.js'; 

    document.body.appendChild(tabScript);
    document.body.appendChild(menuScript);
  })
  .catch((error) => {
    console.error("erro ao carregar o nav: ", error);
  });