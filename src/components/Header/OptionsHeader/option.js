import styled from "styled-components";
import { Link } from "react-router-dom";

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const OptionsContainer = styled.ul`
    display: flex;
    text-align: center;
`

const OptionContainer = styled.li`
    font-size: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    min-width: 180px;
`;

/**
 * Categories Component
 * @returns {HTML} HTML
 */
function OptionsHeader() {
    return (
      <OptionsContainer>
        {textOptions.map((text) => (
          <Link to={`/${text.toLowerCase().split(" ").join("-")}`}>
            <OptionContainer key={text}>
              <p>{text}</p>
            </OptionContainer>
          </Link>
        ))}
      </OptionsContainer>
    );
}

export default OptionsHeader;
