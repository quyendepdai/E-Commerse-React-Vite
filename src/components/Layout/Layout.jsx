import styles from './Layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <main className={cx('wrap-layout')}>
            <div className={cx('container')}>{children}</div>
        </main>
    );
}

export default MainLayout;
