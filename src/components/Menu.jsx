
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



import History from "./History";
import Experiance from "./Experiance";
import Main from "./Main";
const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Router>
            <div>
                <button onClick={toggleMenu}>{t("p1")}</button>

                {menuOpen && (
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/main" onClick={toggleMenu}> Main
                                </Link>
                            </li>


                            <li>
                                <Link to="/history" onClick={toggleMenu}>
                                    {t("p2")}
                                </Link>
                            </li>


                            <li>
                                <Link to="/experiance" onClick={toggleMenu}>
                                    {t("p3")}
                                </Link>
                            </li>


                            {/* Добавьте ссылки для переключения на другие компоненты */}
                        </ul>
                    </div>
                )}

                <Routes>
                    <Route path="/main" element={<Main/>}>
                    </Route>

                    <Route path="/history" element={<History/>}>
                    </Route>
                    <Route path="/experiance" element={<Experiance/>}>
                    </Route>
                    {/* Добавьте маршруты для других компонентов */}
                </Routes>
            </div>
        </Router>
    );
};

export default Menu;
