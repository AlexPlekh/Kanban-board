import avatar from '../images/User-avatar.jpg'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__heading">Awesome Kanban Board</h1>
            <label className="header__menu" htmlFor='menu__opener'>
                <input type='checkbox' className='menu__opener' id='menu__opener'></input>
                <div className='menu__heading'>
                    <img className='header__avatar' src={avatar} alt='avatar'></img>
                </div>
                <ul className='menu__container expandable'>
                    <li className='menu__item'>Profile</li>
                    <li className='menu__item'>Log Out</li>
                </ul>
            </label>
        </header >
    )
}

export default Header;