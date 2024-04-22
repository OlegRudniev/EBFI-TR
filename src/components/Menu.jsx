
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import History from "./History";
import Experiance from "./Experiance";
const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Router>
            <div>
                <button onClick={toggleMenu}>MENU</button>

                {menuOpen && (
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/history" onClick={toggleMenu}>
                                    History
                                </Link>
                            </li>
                            <li>
                                <Link to="/experiance" onClick={toggleMenu}>
                                    Experiance
                                </Link>
                            </li>
                            {/* Добавьте ссылки для переключения на другие компоненты */}
                        </ul>
                    </div>
                )}

                <Routes>
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
