import styled from 'styled-components';
import profile from '../../../imgs/perfil.svg';
import bag from '../../../imgs/sacola.svg';

const icons = [profile, bag];

const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
`;

const IconContainer = styled.li`
    margin-right: 40px;
    width: 25px;
`;

/**
 * 
 * @returns {HTML} HTML
 */
function IconsHeader() {
    return (
        <IconsContainer>
            {
                icons.map((icon) => (
                    <IconContainer key={icon}>
                        <img src={icon} alt='imagem'></img>
                    </IconContainer>
                ))
            }
        </IconsContainer>
    );
}

export default IconsHeader;
