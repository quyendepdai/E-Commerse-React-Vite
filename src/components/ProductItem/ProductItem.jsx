import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faEye, faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const ProductItem = () => {
    return (
        <div className={cx('product-item')}>
            <div className={cx('product-item__image')}>
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg"
                    alt=""
                />
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg"
                    alt=""
                    className={cx('show-image-when-hover')}
                />
            </div>
            <div className={cx('show-function')}>
                <FontAwesomeIcon icon={faClipboard} className={cx('icon-item')} />
                <FontAwesomeIcon icon={faHeart} className={cx('icon-item')} />
                <FontAwesomeIcon icon={faRotate} className={cx('icon-item')} />
                <FontAwesomeIcon icon={faEye} className={cx('icon-item')} />
            </div>
            <p className={cx('product-item__title')}>10K Yellow Gold</p>
            <p className={cx('product-item__price')}>$9.99</p>
        </div>
    );
};

export default ProductItem;
