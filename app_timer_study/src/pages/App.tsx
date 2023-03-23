import { useState } from 'react'
import { Cronometro } from '../components/Cronometro'
import Formulario from '../components/Formulario'
import Lista from '../components/Lista'
import { ITarefa } from '../types/tarefa'
import style from  './app.module.scss'

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])  //Estado de todas as tarefaas
  const[selecionado,setSelecionado]= useState<ITarefa>() //Estado para quando o item for SELECIONADO

    function selecionaTarefa(tarefaSelecionada: ITarefa){ //funçao para se passada por PROPS na LISTA para adicionar o estado de SELECIONADO
      setSelecionado(tarefaSelecionada)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa=>({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      }))) //setTarefas chamado para dar um MAP nas tarefas ANTERIORES e mudar a constate boleana 'SELECIONADO' para TRUE, caso o operador ternario estabeleça sua condição 
    }


// setTarefas chamado para fazer um SPREAD OPERATOR com MAP para percorrer o array, com uma condição, para pegar somente a tarefa finalizada e mudar os valores boleanos SELECIONADO para False e COMPLETADO para True 
    function finalizarTarefa(){ //Funçao a ser passada por Prop no cronometro para ser chamada na regressiva quando o tempo chegar a 0.
      if(selecionado){  
        setTarefas(tarefasAnteriores =>  
         tarefasAnteriores.map(tarefa => {                    
          if(tarefa.id === selecionado.id){
            return {
              ...tarefa,
              selecionado:false,
              completado:true
            }

          } return tarefa; 
        } ))
      }
    }


  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
      tarefas={tarefas} 
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  )
}

export default App
