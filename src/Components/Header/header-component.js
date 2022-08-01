import weerbanner from "../../Assets/weerbanner.jpg";
import weerbannerflipped from "../../Assets/weerbannerflipped.jpg";
import './header.styles.css';

function Header() {
    return (
        <>
            <header className='header'>
                <img src={weerbanner} alt='weerbanner' />
                <img src={weerbannerflipped} alt='weerbannerflipped'/>
                <img src={weerbanner} alt='weerbanner'/>
                <img src={weerbannerflipped} alt='weerbannerflipped'/>
                <img src={weerbanner} alt='weerbanner'/>
                <img src={weerbannerflipped} alt='weerbanner'/>
            </header>
        </>
    )
}

export default Header;