import React from 'react'
import styles from './Footer.module.scss';


function Footer() {
    let items = [/*{
        href: 'https://github.com/raitasu',
        title: 'git'
    }*/, {href: 'https://www.linkedin.com/in/pavel-buryak-ab83b41b8/', title: 'linkedIn'},
        {
            href: 'https://pavelburyak3@gmail.com',
            title: 'email'
        }, {href: 'https://www.instagram.com/shakesoul', title: 'instagram'},]
    return (
        <div className={styles.footerContainer}>
            <p className={styles.copyRightBlock}>© 2022, All Rights Reserved.</p>
            <ul>
                {items.map((e, i) => <li key={i}><a href={e.href} target="_blank" rel="noreferrer">{e.title}</a></li>)}
            </ul>
        </div>
    );
}

export default Footer;