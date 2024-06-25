import earthLogo from './assets/earth-logo.png'

function Header(){

    return( <div className="header">
                <img className='header--logo' src={earthLogo}/>
                <h3 className='header-title'>My Travel Journal.</h3>
            </div>)
}

export default Header