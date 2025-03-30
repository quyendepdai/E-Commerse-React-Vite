import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faCommentDots, faMoneyCheck, faTruckFast } from '@fortawesome/free-solid-svg-icons';

import styles from './Info.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Info = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('info__item')}>
                    <div className={cx('info__item__icon')}>
                        <FontAwesomeIcon icon={faTruckFast} />
                    </div>
                    <div className={cx('info__item__text')}>
                        <p className={cx('info__item__text__title')}>Fastest Shipping</p>
                        <p className={cx('info__item__text__desc')}>Order at $38 order</p>
                    </div>
                </div>
                <div className={cx('info__item')}>
                    <div className={cx('info__item__icon')}>
                        <FontAwesomeIcon icon={faMoneyCheck} />
                    </div>
                    <div className={cx('info__item__text')}>
                        <p className={cx('info__item__text__title')}>100% Safe Payments</p>
                        <p className={cx('info__item__text__desc')}>9 month installments</p>
                    </div>
                </div>
                <div className={cx('info__item')}>
                    <div className={cx('info__item__icon')}>
                        <FontAwesomeIcon icon={faClipboard} />
                    </div>
                    <div className={cx('info__item__text')}>
                        <p className={cx('info__item__text__title')}>14-Days Return</p>
                        <p className={cx('info__item__text__desc')}>Shop with confidence</p>
                    </div>
                </div>
                <div className={cx('info__item')}>
                    <div className={cx('info__item__icon')}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </div>
                    <div className={cx('info__item__text')}>
                        <p className={cx('info__item__text__title')}>24/7 Online Support</p>
                        <p className={cx('info__item__text__desc')}>Delivered to home</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
