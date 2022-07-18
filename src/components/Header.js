import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import polishFlag from '../assets/ico_pl.png';
import usFlag from '../assets/ico_us.png';

function Header() {
    const [arrowDisplay, setArrowDisplay] = useState('flex');
    const { t, i18n } = useTranslation('translations');

    const handleLocale = (locale) => {
        const url = window.location.href.split('?')[0];
        window.location.href = url + '?lng=' + locale;
    };

    return (
        <header>
            <div className="header-inner">
                <div className="logo">
                    <a href="/">Jakub</a>
                </div>
                <div className="header-links">
                    <a href="https://github.com/jacqouese" target="_blank">
                        Github
                    </a>
                    <a href="/resume.pdf" target="_blank">
                        {t('footer.3.2')}
                    </a>
                    <div>
                        <div className="header-menu">
                            <img src={i18n.language == 'en' ? usFlag : polishFlag} alt="" className="header-flag" />
                            <div className="header-menu-dropdown">
                                <div onClick={() => handleLocale('en')}>
                                    <img src={usFlag} alt="" className="header-flag" />
                                    <p>English</p>
                                </div>
                                <div onClick={() => handleLocale('pl')}>
                                    <img src={polishFlag} alt="" className="header-flag" />
                                    <p>Polish</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
