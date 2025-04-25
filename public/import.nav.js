fetch("/Alliance/nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    const script = document.createElement('script');
    script.src = 'scripts/tab.js';
    const menuScript = document.createElement('script')
    menuScript.src = 'scripts/menu.js'
    document.body.appendChild(script);
    document.body.appendChild(menuScript);
  })
  .catch((error) => {
    console.error("erro ao carregar o nav: ", error);
  });
