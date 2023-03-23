import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import  style from './Formulario.module.scss'
import {v4 as uuidv4} from 'uuid'; // pacote para dar id nas TAREFAS

interface Props{
    setTarefas:React.Dispatch<React.SetStateAction<ITarefa[]>> 
}

function Formulario({setTarefas}: Props ){

    const [tarefa, setTarefa]= useState("")
    const [tempo, setTempo] = useState("00:00")
    
    function adicionarTarefa(evento: React.FormEvent ){
        evento.preventDefault() //// para previnir o recarregar da pagina, comportamento padrão do HTML
        setTarefas( tarefasAntigas => 
            [...tarefasAntigas,  //SPREAD OPERATOR 
                { 
                    tarefa,
                    tempo,                                       
                    selecionado:false,      
                    completado:false,
                    id: uuidv4() // retorna um ID para tarefa 
                    
                    // quando a tarefa for adicionada recebera esses boleanos que irao indicar se estao selecionados ou completos
                }
            ]  )   //passando as novas tarefas e presevando as antigas dentro do array tarefas. 
    
    
     setTarefa('')
    setTempo("00:00")     
        
}

    return(
        <form  className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
            <label  htmlFor="tarefa">
                Adicione um novo estudo
            </label>
            <input type="text"
            name="tarefa"
            id="tarefa"
            value={tarefa}
            onChange={evento=> setTarefa(evento.target.value)}
            required
            placeholder="O que voce quer estudar ?"
            />
            
        </div>

        <div className={style.inputContainer}>
            <label htmlFor="tempo">
                Tempo
            </label>
            <input type="time"
            step='1'
            name="tempo"
            id="tempo"
            value={tempo}
            onChange={evento=> setTempo(evento.target.value) }
            min="00:00:00"
            max="01:30:00"
            required
             />
        </div>
        
        <Botao>
            adicionar
        </Botao>
    </form>
    )
}


export default Formulario