import Header from '../Header/Header';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <main className={cx('wrapLayout')}>
            <div className={cx('container')}>
                <Header />
                {children}
            </div>
        </main>
    );
}

export default MainLayout;
