import { useEffect, useState } from 'react';

import styles from './CountDownTimer.module.scss';
import classNames from 'classnames/bind';
import { calculateTimeLeft } from '@/utils/countDown';
import { formatNumber, capitalizeFirstLetter } from '@/utils/formatters';

const cx = classNames.bind(styles);

const CountDownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] !== undefined) {
            timerComponents.push(
                <span key={interval} className={cx('item')}>
                    <span className={cx('item__number')}>{formatNumber(timeLeft[interval])}</span>
                    <span className={cx('item__desc')}>{capitalizeFirstLetter(interval)}</span>
                </span>,
            );
        }
    });
    return <div>{timerComponents}</div>;
};

export default CountDownTimer;
