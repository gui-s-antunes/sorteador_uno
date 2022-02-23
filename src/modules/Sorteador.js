import { ok } from "assert";

export default class Sorteador {
    constructor(nome, qtd, opcoes){
        this.nome = nome;
        this.qtd = qtd;
        this.opcoes = opcoes;
        this.utilizados = [];
    }

    rand(){
        const min = 0;
        const max = this.qtd;
        const sorteio = Math.floor(Math.random() * (max - min) + min);
        return sorteio;
    }

    sortear(){
        // const numero = this.rand();
        
        // if(this.utilizados.includes(numero)){
        //     this.sortear();
        // }
        // else{
        //     this.utilizados.push(numero);
        //     return numero;
        // }
        
        let numero = this.rand();
        while(this.utilizados.includes(numero)){
            numero = this.rand();
        }



        this.utilizados.push(numero);
        return numero;
    }

    verificarCorSeguimento(carta, numeroSorteado){
        if(this.opcoes[carta] !== 'coringa'){
            if(numeroSorteado <= 26){
                return 'verde';
            }
            else if(numeroSorteado <= 53){
                return 'amarela';
            }
            else if(numeroSorteado <= 80){
                return 'azul';
            }
            else{
                return 'vermelha';
            }
        }else{
            return 'especial';
        }
    }

    verificarDisponibilidade(){
        return this.qtd - this.utilizados.length;
    }

}