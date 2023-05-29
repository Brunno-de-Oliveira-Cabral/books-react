import './icon.css';
import profile from '../../../imgs/perfil.svg';
import bag from '../../../imgs/sacola.svg';

const icons = [profile, bag];

function IconsHeader() {
    return (
        <ul className='icons'>
            {
                icons.map((icon) => (
                    <li key={icon} className='icon'>
                        <img src={icon} alt='imagem'></img>
                    </li>
                ))
            }
        </ul>
    );
}

export default IconsHeader;
