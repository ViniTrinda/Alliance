const tabElements = document.querySelectorAll('#tab');

tabElements.forEach((tab, i) => {
    let timeout; // Usado para evitar ocultar a lista rapidamente

    // Adiciona o evento ao passar o mouse
    tab.addEventListener('mouseenter', () => {
        const tabWindow = i === 0
               ? document.querySelector('.serv-tab-window') 
               : document.querySelector('.ass-tab-window');
        
        tabWindow.style.display = 'flex';

        // Garante que não seja ocultado caso ainda esteja visível
        clearTimeout(timeout);

    });

    // Adiciona o evento ao sair do elemento e lista
    tab.addEventListener('mouseleave', () => {
        const tabWindow = i === 0 
               ? document.querySelector('.serv-tab-window') 
               : document.querySelector('.ass-tab-window');

               //verifica a afirmação i===0, se simi, serv, se não ass
        
        // Espera um pouco antes de ocultar, permitindo mover para dentro da lista
        timeout = setTimeout(() => {
            tabWindow.style.display = 'none';
        }, 200); // Pequeno atraso (200ms)
        
        // Adiciona evento para cancelar o ocultamento ao mover para dentro da lista
        tabWindow.addEventListener('mouseenter', () => clearTimeout(timeout));
        
        // Garante ocultação quando sair da lista
        tabWindow.addEventListener('mouseleave', () => {
            tabWindow.style.display = 'none';
        });
    });

});


//atualização

//adiciona o cleartimeout para garantir que o sistema esperará o user tirar o mouse da tab