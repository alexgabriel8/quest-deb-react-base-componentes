import './buttons.css'
import ShowLabelButton from "../show-label-button/show-label-button"

const btnLabel = ['Label adicionado por props', 'Mais um label adicionando por props']

const ShowLabelButtons = () => (
    <>
        <h2 className='title'>Botões que exibem seu label ao serem clicados</h2>
        <div className="buttons">
            {
                btnLabel.map((label, index) => (
                    <ShowLabelButton key={index} label={label} />
                ))
            }
            <ShowLabelButton />
        </div>
    </>
)

export default ShowLabelButtons