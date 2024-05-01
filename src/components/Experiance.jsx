import { useTranslation } from 'react-i18next';


const Experiance    = function (){

    const { t } = useTranslation();

    return  (
        <h1>{t("p3")}</h1>
    )
}

export default Experiance;