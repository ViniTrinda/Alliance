fetch("/Alliance/nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const tabScript = document.createElement('script');
    tabScript.src = '/Alliance/scripts/tab.js';

    const menuScript = document.createElement('script');
    menuScript.src = '/Alliance/scripts/menu.js';

    document.body.appendChild(tabScript);
    document.body.appendChild(menuScript);
  })
  .catch((error) => {
    console.error("erro ao carregar o nav: ", error);
  });
