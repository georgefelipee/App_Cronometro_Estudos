import style from './relogio.module.scss'

interface Props{
    tempo:number | undefined
}
export default function Relogio({tempo = 0 }: Props){ // se o tempo for 'undefined' seu valor é 0
    const minutos = Math.floor(tempo/60)  //Math.FLOOR para pegar somente numeros INTEIROS

    const segundos = Number(tempo % 60)

    const [minutoDezena, minutoUnidade]= String(minutos).padStart(2,'0')
    const [segundoDezena,segundoUnidade]= String(segundos).padStart(2,'0')
    //funçao de string PadStart serve para definir um tamanho padrao de caracteres, se o tamanho for menor que '2' no caso dessa chamada, ele preenche com '0' o caractere que estiver faltando

    return(
        
     <>
        <span className={style.relogioNumero}>{minutoDezena}</span>
        <span className={style.relogioNumero}>{minutoUnidade}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundoDezena}</span>
        <span className={style.relogioNumero}>{segundoUnidade}</span>
     </>
        
    )
}