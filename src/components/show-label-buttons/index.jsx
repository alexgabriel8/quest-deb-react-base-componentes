import './index.css'
import AlertButton from "../show-label-button"

const btnLabel = ['Label adicionado por props', 'Mais um label adicionando por props']

const ShowLabelButtons = () => (
    <>
        <h2 className='title'>Botões que exibem seu label ao serem clicados</h2>
        <div className="buttons">
            {
                btnLabel.map((label, index) => (
                    <AlertButton key={index} label={label} />
                ))
            }
            <AlertButton />
        </div>
    </>
)

export default ShowLabelButtons