import QuestaoModel from "@/model/questao"
import styles from "@/styles/Questao.module.css"
import Enunciado from "./Enunciado"
import Resposta from "./Resposta"
import Temporizador from "./Temporizador"

const letras = [
    { valor: 'A', corFundo: '#f2c866' },
    { valor: 'B', corFundo: '#f266ba' },
    { valor: 'C', corFundo: '#85d4f2' },
    { valor: 'D', corFundo: '#bce596' }
]

interface QuestaoProps {
    valor: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderizarRespotas() {
        return questao.respostas.map((resposta, i) => {
            return (
                <Resposta 
                    key={`${questao.id}-${i}`}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].corFundo}
                    respostaFornecida={props.respostaFornecida}
                />
            )
        })
    }
    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador key={questao.id} duracao={props.tempoPraResposta ?? 10} 
                tempoEsgotado={props.tempoEsgotado}/> 
            {renderizarRespotas()}
        </div>
    )
}