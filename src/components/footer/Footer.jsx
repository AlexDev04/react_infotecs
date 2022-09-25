import React from 'react'
import './Footer.sass'

export const Footer = () => {

    return(
        <footer className="footer">
            <h2>Useful links</h2>
            <div className="footer_info">
                <div className="footer_info_left">
                    <h3>Contacts</h3>
                    <ul>
                        <li><a href="mailto:Web.yakovlev04@yandex.ru">Email</a></li>
                        <li><a href="https://t.me/Alexius04">Telegram</a></li>
                        <li><a href="https://github.com/AlexDev04">GitHub</a></li>
                    </ul>
                </div>
                <div className="footer_info_right">
                    <h3>Documentation</h3>
                    <ul>
                        <li><a href="https://ru.reactjs.org/docs/jsx-in-depth.html">JSX</a></li>
                        <li><a href="https://ru.reactjs.org/docs/hooks-reference.html">Hooks</a></li>
                        <li><a href="https://www.internet-technologies.ru/articles/rukovodstvo-po-test-react-prilozheniy-s-pom-jest.html">Jest</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}