import React from 'react';
import CountDownBanner from '@/components/CountDownBanner/CountDownBanner';

import styles from './HeadingListProduct.module.scss';
import classNames from 'classnames/bind';
import ProductItem from '@/components/ProductItem/ProductItem';

const cx = classNames.bind(styles);

const HeadingListProduct = () => {
    return (
        <div className={cx('heading-list-product')}>
            <CountDownBanner />
            <div className={cx('product_right')}>
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    );
};

export default HeadingListProduct;
