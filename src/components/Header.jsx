
import DateTime from "./DateTime";
import Menu from "./Menu";
import LanguageSelector from "./LanguageSelector";
import EBFILogo from    "./Pictures/logoEBFnew.svg";
const Header    = function (){
    return(
        <div>
            <div>
                <p>© Engineering Bureau Franke International from 2006. Independent Inspection Company</p>
                <DateTime></DateTime>
            </div>
            <div>
                <img src={EBFILogo} alt="EBFILogo"/>
                <LanguageSelector></LanguageSelector>
                <Menu></Menu>


            </div>
        </div>
    )
}

export default Header;


