import { useTranslation } from 'react-i18next';
import EBFILogo from    './Pictures/logoEBFnew.svg';


const Footer = function (){

    const { t } = useTranslation();

    return (
        <div>
            <img src={EBFILogo} alt="EBFI logo"/>
                <h1>{t("footer1")}</h1>
                <div>
                    <h2>{t("footer2-1")}</h2>
                    <h3>{t("footer2-2")}</h3>
                    <h4>{t("footer2-3")}</h4>
                    <h5>{t("footer2-4")}</h5>

                </div>


        </div>

)}





export default Footer;
