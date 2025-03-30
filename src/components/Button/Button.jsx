import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({ children, to, secondary, upperCase, small, disabled, classCustom, onClick, ...passProps }) => {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key?.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        Comp = Link;
        props.to = to;
    }

    const classes = cx('btn', { secondary, small, upperCase, [classCustom]: classCustom });

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
};

export default Button;
