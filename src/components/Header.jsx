
import DateTime from "./DateTime";
import Menu from "./Menu";
import LanguageSelector from "./LanguageSelector";
const Header    = function (){
    return(
        <div>
            <div>
                <p>© Engineering Bureau Franke International from 2006. Independent Inspection Company</p>
                <DateTime></DateTime>
            </div>
            <div>
                <Menu></Menu>
                <LanguageSelector></LanguageSelector>

            </div>
        </div>
    )
}

export default Header;


