import styled from 'styled-components';
import logoImg from '../../../imgs/logo.svg';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    justify-content: center;
`;

const LogoImageContainer = styled.img`
    margin-right: 10px;
`;

/**
 * Website Logo Related Component
 * @returns {HTML} HTML
 */
function Logo() {
    return (
        <LogoContainer>
            <LogoImageContainer
                src={logoImg}
                alt='Logo'
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    );
}

export default Logo;
