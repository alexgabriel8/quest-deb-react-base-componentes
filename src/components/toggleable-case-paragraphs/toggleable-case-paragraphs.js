import ToggleableCaseParagraph from "../toggleable-case-paragraph/toggleable-case-paragraph";

const pText = [
               'Texto 1 adicionado através da prop children.',
               'Texto 2 adicionado por prop children.',
               'Texto 3 adicionado usando prop children.',
               'Texto 4 adicionado com prop children e com cor do defaultProps.'
              ]
const colors = ['red', 'brown', 'purple']

const ToggleableCaseParagraphs = () => (
    <>
        <h2 className="title">Parágrafos coloridos e em maiúsculo</h2>
        {
            pText.map((text, index) => (
                <ToggleableCaseParagraph
                    key={index}
                    pClicked={index}
                    textColor={colors[index]}
                >
                    {text}
                </ToggleableCaseParagraph>
            ))
        }
        <ToggleableCaseParagraph pClicked={4} />
        <p className="text-aligned-to-center"><strong>(Clique no parágrafo para deixá-lo maiúsculo/minúsculo)</strong></p>
    </>
)

export default ToggleableCaseParagraphs