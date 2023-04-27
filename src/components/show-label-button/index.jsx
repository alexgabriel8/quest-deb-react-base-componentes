import './index.css'

const AlertButton = ({label}) => (
    <button
        className="btn"
        onClick={() => alert(`Este botão possui o label: ${label}`)}
    >
        {label}
    </button>
)

AlertButton.defaultProps = {
    label: 'Label adicionando por defaultProps'
}

export default AlertButton