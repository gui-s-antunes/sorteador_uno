import './../css/config.css';
import Sorteador from "./Sorteador";
// const Sorteador = require('./Sorteador');

(function(){
    
    const sortear = new Sorteador('Uno', 10);

    let $container = document.querySelector('.container');
    let $resultado = document.querySelector('.resultado');
    let $historico = document.querySelector('.historico');

    let $btn_sortear = document.querySelector('.sorteador');
    $btn_sortear.addEventListener('click', () => {
        if(sortear.verificarDisponibilidade()){
            let numeroSorteado = sortear.sortear();
            
            let numerosUsados = sortear.utilizados;
            numerosUsados = numeroUsados.join(' ');

            $resultado.textContent = `Número da vez: ${numeroSorteado}`;
            $historico.textContent = `Histórico de sorteio: ${numerosUsados}`;
        }
        else{
            $btn_sortear.disabled = true;
            let p = document.createElement('p');
            let texto = document.createTextNode(`O sorteio usou todos os ${sortear.qtd} números!`);
            p.appendChild(texto);
            $container.appendChild(p);
        }
    });

    
})();
