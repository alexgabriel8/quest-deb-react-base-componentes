import './button.css'

function showBtnLabel(label) {
    window.alert(`Este botão possui o label "${label}"`)
}


const ShowLabelButton = ({label}) => (
    <button
        className="btn"
        onClick={() => showBtnLabel(label)}
    >
        {label}
    </button>
)

ShowLabelButton.defaultProps = {
    label: 'Label adicionando por defaultProps'
}

export default ShowLabelButton