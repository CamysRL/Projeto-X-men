const personagens = document.querySelectorAll('.personagem');



personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavier: 'smooth'});
        }
        //adiciona e remove a sombra azul quando se coloca ou tira o mouse de cima do personagem
        const personagemSelecionado = document.querySelector('.selecionado');
        
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        //muda a imgem grande do personagem
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;

        //mudar o nome do personagem
        const nomeDoPersonagem = document.getElementById('nome-personagem');
        nomeDoPersonagem.innerHTML =  personagem.getAttribute('data-name');

        //mudar a descrição do personagem
        const descricaoDoPersonagem = document.getElementById('descricao-personagem');
        descricaoDoPersonagem.innerHTML =  personagem.getAttribute('data-description');
    })    
})


