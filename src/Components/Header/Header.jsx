import { BsBell } from 'react-icons/bs';
import { BiBookmark } from 'react-icons/bi';
import { FiTrash2, FiFolder } from 'react-icons/fi';

const Header = () => {
    return (

        <div className="header">
            <div className="header__left">
                <div className="header__left__logo">dcu</div>
                <div className="header__left__bell"> <BsBell />
                    <span className="header__left__bell__red-dot">.</span>
                </div>
            </div>
            <div className="header__center">
                <div className="header__center__select">
                    <label htmlFor="sort">Sort:</label>
                    <select name="sort" id="sort">
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                </div>
                <div className="header__center__btns">
                    <div className="header__center__btns-folder"><FiFolder /></div>
                    <div className="header__center__btns-bookmark"><BiBookmark /></div>
                    <div className="header__center__btns-trash"><FiTrash2 /></div>
                </div>
            </div>
            <div className="header__right">
                <div className="header__right__avatar">
                    <img src="https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf" alt="avatar" />
                    <span className="avatar-dot"></span>
                </div>
            </div>
        </div>
    )
}

export default Header