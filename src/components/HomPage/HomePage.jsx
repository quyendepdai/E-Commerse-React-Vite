import styles from './HomePage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

import Header from '@/components/Header/Header';
import Banner from '@/components/Banner/Banner';
import Info from '@/components/Info/Info';
import ListProducts from '../ListProducts/ListProducts';
import MainLayout from '../Layout/Layout';

const HomePage = () => {
    return (
        <>
            <div className={cx('container-header')}>
                <Header />
                <Banner />
                <Info />
            </div>
            <MainLayout>
                <div className={cx('container-content')}></div>
                <div className={cx('advance--heading')}>
                    <p>don't miss super offers</p>
                    <h2>Our best products</h2>
                    <div className={cx('headline-left', 'headline')}></div>
                    <div className={cx('headline-right', 'headline')}></div>
                </div>
                <ListProducts />
            </MainLayout>
        </>
    );
};

export default HomePage;
