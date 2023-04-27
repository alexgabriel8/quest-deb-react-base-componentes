import './index.css'
import textToUpperCase from "../../scripts/text-to-uppercase"

const ToggleableCaseParagraph = ({children, textColor, pClicked}) => (
    <p
        className="paragraph"
        style={{color: textColor}}
        onClick={() => textToUpperCase(pClicked)}
    >
        {children}
    </p>
)

ToggleableCaseParagraph.defaultProps = {
    children: 'Parágrafo usando texto do defaultProps.',
    textColor: 'blue'
}

export default ToggleableCaseParagraph