import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss'
//importando tipagens 'ITarefa' do arquivo types/tarefa.ts 

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
    
}

function Lista({ tarefas, selecionaTarefa }: Props ){
    


    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map( item => (                   // Percorre todo o array TAREFAS para mostrar todos os itens da LISTA, junto com o componente ITEM.
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        tarefa={item.tarefa}
                        tempo={item.tempo} 
                        selecionado={item.selecionado} 
                        completado={item.completado} 
                        id={item.id}                        />
                ) )}
            </ul>
        </aside>
    )
}

export default Lista