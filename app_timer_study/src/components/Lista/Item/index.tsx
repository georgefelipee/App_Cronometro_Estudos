import { ITarefa } from '../../../types/tarefa'
import style from '../Lista.module.scss'

interface Props extends ITarefa{  //reaproveitando as tipagens do iTarefa com extends
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void  
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
        }: Props){
    return(
        
        <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado: `` } ${completado ? style.itemCompletado : '' } `}  // sempre que o operador ternario retornar TRUE, ou seja a constante 'SELECIONADO' retornar true, a tarefa muda de ESTILO para mostrar para o usuario o item selecionado. // Quando o bolleano 'COMPLETADO' receber True seu estilo é alterado 

                 //se o item ja tiver sido completado nao sera possivel seleciona-lo com o uso dessa condicional 
        onClick={()=> !completado && selecionaTarefa(
            {
                 tarefa,
                tempo,
                selecionado,
                completado,
                id
        })} 
        >

            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            
            {/* renderização CONDICIONAL */ completado && <span className={style.concluido}></span>}
        </li>
    )
}