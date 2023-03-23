import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './cronometro.module.scss'
import { tempoParaSegundos } from "../../Common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props{
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export function Cronometro({selecionado,finalizarTarefa}: Props  ){
    const [tempo,setTempo] = useState<number>()

    useEffect(()=>{    //renderezia o cronometro quando o SELECIONADO mudar 
        if(selecionado?.tempo){ // se tiver o selecionado.tempo ele     chama o estado setTempo
             setTempo(tempoParaSegundos(selecionado.tempo))  //chama a funçao tempoParaSegundo que vai retornar o tempo desejado para mudar o state TEMPO
        }
    } ,[selecionado])
    
    function regressiva(contador: number= 0 ){
        setTimeout(()=>{ //funçao regressiva para decrementação 
            if(contador > 0){
                setTempo(contador-1)
                return regressiva(contador-1)  
            } 
            finalizarTarefa()
                
        },1000)
    }

    return(
        <div className={style.cronometro}>
         <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
         </div>
         <Botao onClick={() => regressiva(tempo) } >
            Começar!
         </Botao>
     </div>
    )
}