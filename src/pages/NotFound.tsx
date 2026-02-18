import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router"
import useTranslatedTitle from "../helpers/useTranslatedTitle";


function NotFoundPage() {  
    const { t } = useTranslation("notfound");
    const navigate = useNavigate();
    useTranslatedTitle(t);
    return <>
        <h1>{t(k => k.title)}</h1>
        <a onClick={() => navigate("/")}>{t(k => k.backlink)}</a>
    </>
}

export default NotFoundPage;