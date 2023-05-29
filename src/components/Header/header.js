import './header.css';
import IconsHeader from "./IconsHeader/icon";
import Logo from "./Logo/logo";
import OptionsHeader from "./OptionsHeader/option";

function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <OptionsHeader/>
            <IconsHeader/>
        </header>
    );
}

export default Header;
