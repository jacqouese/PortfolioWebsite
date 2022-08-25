import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ReactIcon } from '../assets/reactIcon.svg';

function Footer() {
    const { t, i18n } = useTranslation('translations');

    return (
        <footer>
            <div className="footer-links">
                <div>
                    <h3>{t('footer.1.1')}</h3>
                    <p>main svg: made by unDraw.co, animated by me</p>
                    <p>skill icons: svgrepo.com</p>
                    <p>linguesia mockup: freepick.com by user17882893</p>
                    <p>{t('footer.1.2')}</p>
                </div>

                <div>
                    <h3>{t('footer.3.1')}</h3>
                    <p>email: jakub003@pm.me</p>
                    <a href="https://github.com/jacqouese" target="_blank">
                        GitHub
                    </a>
                    <a href="/resume.pdf" target="_blank">
                        {t('footer.3.2')}
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <hr />
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                        <p>Made in React</p>
                        <ReactIcon style={{ maxHeight: 15 }} />
                    </div>
                    <p>Jakub Czaja all rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
