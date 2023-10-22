import brainflixlogo from "../../assets/images/Logo/BrainFlix-logo.svg"
import yourimg from "../../assets/images/images/Mohan-muruge.jpg"
import uploadimg from "../../assets/images/Icons/upload.svg"

import './header.scss'
function Header() {
    const cohortNickName = "The Queens Bees"
    return (
        <>
        
            <header className="Header">
            <img className='navbar__search--logo' src={brainflixlogo} alt="brainflix logo"></img>
            <form className="navbar__useroptions" >
                        <div class="navbar__searchbar__container">
                            <input class="navbar__searchbar" type="text" placeholder="Search"></input>
                        </div>
                        <img class="navbar__userimg" src={yourimg}></img>
                        <div className="navbar__upload-button__container">
                            <button type="submit" class="navbar__upload-button"><img className="navbar__upload-button__image" src={uploadimg}></img>UPLOAD</button>
                        </div>
                </form>
            </header>
        </>
    )
}

export default Header

