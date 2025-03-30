import Button from '../Button/Button';
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx('banner')}>
            <div className={cx('banner-content')}>
                <h1>XStore Marseille04 Demo</h1>
                <p>Make yours celebrations even more special this years with beautiful.</p>
                <Button classCustom={'btn-banner'}>Go to Shop</Button>
            </div>
        </div>
    );
};

export default Banner;
