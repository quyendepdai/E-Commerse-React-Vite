import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './BoxIcon.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function BoxIcon({ icon, href, className }) {
    return (
        <a href={href} target="_blank" className={cx('icon__header', className)}>
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}

export default BoxIcon;
