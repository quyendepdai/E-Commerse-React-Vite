import CountDownTimer from '@/components/CountDownTimer/CountDownTimer';

import styles from './CountDownBanner.module.scss';
import classNames from 'classnames/bind';
import Button from '@/components/Button/Button';

const cx = classNames.bind(styles);

const CountDownBanner = () => {
    const targetDate = Date.now() + 3600 * 48 * 1000;

    return (
        <div className={cx('count-down-banner')}>
            <CountDownTimer targetDate={targetDate} />
            <p>The classics make a comeback</p>
            <Button classCustom={'count-down-banner-btn'}>Buy Now</Button>
        </div>
    );
};

export default CountDownBanner;
