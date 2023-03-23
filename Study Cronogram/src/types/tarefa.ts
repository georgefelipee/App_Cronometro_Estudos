
export  interface ITarefa {   // Tipando o que vem da PROPS(tarefas) passada no App.tsx 
    tarefa: string,
    tempo: string,
    selecionado:boolean,
    completado:boolean,
    id:string
}