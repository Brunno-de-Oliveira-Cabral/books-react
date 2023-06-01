import styled from "styled-components";
import IconsHeader from "./IconsHeader/icon";
import Logo from "./Logo/logo";
import OptionsHeader from "./OptionsHeader/option";

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

/**
 * Header Component
 * @returns {HTML} HTML
 */
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader />
            <IconsHeader />
        </HeaderContainer>
    );
}

export default Header;
