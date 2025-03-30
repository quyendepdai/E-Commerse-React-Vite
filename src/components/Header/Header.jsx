import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import BoxIcon from '@/components/Header/Box/BoxIcon';

import { faCartShopping, faRotate } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('nav')}>
                    <BoxIcon icon={faFacebookF} href={'https://facebook.com'} />
                    <BoxIcon icon={faInstagram} href={'https://instagram.com'} />
                    <BoxIcon icon={faYoutube} href={'https://youtube.com'} />
                    <div className={cx('nav__item')}>
                        <a className={cx('nav__item__detail')} href={'#'}>
                            Elements
                        </a>
                        <a className={cx('nav__item__detail')} href={'#'}>
                            Our Shop
                        </a>
                        <a className={cx('nav__item__detail')} href={'#'}>
                            About Us
                        </a>
                    </div>
                </div>
                <div>
                    <a href="https://xstore.8theme.com/elementor2/marseille04">
                        <img
                            className={cx('header__logo')}
                            src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina.png"
                            alt="logo"
                            sizes="(max-width: 306px) 100vw, 306px"
                            data-src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina.png"
                            data-srcset="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina.png 306w, https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina-300x104.png 300w, https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina-10x3.png 10w, https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina-285x99.png 285w"
                            srcset="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina.png 306w, https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina-300x104.png 300w, https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina-10x3.png 10w, https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina-285x99.png 285w"
                        />
                    </a>
                </div>
                <div className={cx('nav')}>
                    <div className={cx('nav__item')}>
                        <a className={cx('nav__item__detail')} href={'#'}>
                            Contacts
                        </a>
                        <a className={cx('nav__item__detail')} href={'#'}>
                            Search
                        </a>
                        <a className={cx('nav__item__detail')} href={'#'}>
                            Sign In
                        </a>
                    </div>
                    <BoxIcon icon={faRotate} href={'https://facebook.com'} className={'icon__header__right'} />
                    <BoxIcon icon={faHeart} href={'https://instagram.com'} className={'icon__header__right'} />
                    <BoxIcon icon={faCartShopping} href={'https://youtube.com'} className={'icon__header__right'} />
                </div>
            </div>
        </header>
    );
}

export default Header;
