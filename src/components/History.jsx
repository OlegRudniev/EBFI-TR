import { useTranslation } from 'react-i18next';


const History = function (){

    const { t } = useTranslation();

    return (
    <h1>{t("p2")}</h1>
    )
}

export default History;
