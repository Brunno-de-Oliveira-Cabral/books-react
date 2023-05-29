import './logo.css'
import logoImg from '../../../imgs/logo.svg';

function Logo() {
    return (
        <div className='Logo'>
            <img
                src={logoImg} 
                alt='Logo' 
                className='logo-img'
            ></img>
            <p>
                <strong>Alura</strong>Books
            </p>
        </div>
    );
}

export default Logo;
