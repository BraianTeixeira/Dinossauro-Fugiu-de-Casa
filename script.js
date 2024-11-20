const avanca = document.querySelectorAll('.btn-proximo');

avanca. forEach(button => {
    button.addEventListener('click', function(){
        const atual = document. querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');

        if ([4, 6, 8].includes(parseInt(proximoPasso.replace('passo-', '')))) {
            document.body.classList.add('passo-especial-ativo');
          } else {
            document.body.classList.remove('passo-especial-ativo');
          }
    })
})