import './assets/css/style.css';
import Sorteador from "./modules/Sorteador";
// const Sorteador = require('./Sorteador');

(function(){
    
    const sortear = new Sorteador('Uno', 108, [
        '0', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9',
        'pular', 'pular', '+2', '+2','inverter', 'inverter', 'coringa', 'coringa'
    ]);

    // let $teste = document.querySelector('.teste');
    // let valores = sortear.opcoes;
    // valores.forEach((valor, id) => {
    //     $teste.textContent += `\n id: ${id} - valor: ${valor}`;
    // });

    let $body = document.querySelector('body');

    let $container = document.querySelector('.container');
    let $resultado = document.querySelector('.resultado');
    let $historico = document.querySelector('.historico');
    let $fraseFinal = document.querySelector('.p-final');

    let $btn_resetar = document.querySelector('.reiniciar');
    $btn_resetar.addEventListener('click', resetarSorteio);

    let $btn_sortear = document.querySelector('.sorteador');
    $btn_sortear.addEventListener('click', sortearNumero);

    function sortearNumero(){
        let numeroSorteado = sortear.sortear();
        
        let numerosUsados = sortear.utilizados;
        numerosUsados = numerosUsados.join('-');

        let carta = numeroSorteado % sortear.opcoes.length;
        let cor = sortear.verificarCorSeguimento(carta, numeroSorteado);

        $resultado.textContent = `Número da vez: ${numeroSorteado}, que corresponde a carta ${cor} ${sortear.opcoes[carta]}`;
        $historico.textContent = `Histórico de sorteio: ${numerosUsados}`;
        mudarCorFundo(cor);

        verificarSorteio();
    }

    function resetarSorteio(){
        $btn_sortear.disabled = false;
        $resultado.textContent = `Sorteio resetado...`;
        $historico.textContent = `Histórico de sorteio:`;

        sortear.utilizados = [];
        let p = document.querySelector('.p-final');

        if(p){
            p.remove();
        }
    }

    function verificarSorteio(){
        if(!sortear.verificarDisponibilidade()){
            $btn_sortear.disabled = true;
            // $btn_sortear.removeEventListener('click', sortearNumero);
            
            apresentarResultado();
        }
        else{
            atualizarCartasRestantes();
        }
    }

    function atualizarCartasRestantes(){
        $fraseFinal.textContent = `Ainda há ${sortear.verificarDisponibilidade()} cartas restantes`;
    }

    function apresentarResultado(){
        // let p = document.createElement('p');
        // p.classList.add('p-final');
        // let texto = document.createTextNode(`O sorteio usou todos os ${sortear.qtd} números!`);
        // p.appendChild(texto);
        // $container.appendChild(p);
        $fraseFinal.textContent = "O sorteio usou todos os 108 número!";
    }

    function mudarCorFundo(cor){
        $body.removeAttribute('class');
        $body.classList.add(cor);
    }

})();
