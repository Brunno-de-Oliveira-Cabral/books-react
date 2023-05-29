import './option.css';

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OptionsHeader() {
    return (
        <ul className='Option'>
            {
                textOptions.map((text) => (
                    <li key={text.id} className='Options'>
                        <p>
                            {text}
                        </p>
                    </li>
                ))
            }
        </ul>
    );
}

export default OptionsHeader;
