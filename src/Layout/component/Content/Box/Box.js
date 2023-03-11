import classNames from 'classnames/bind';
import styles from './Box.module.scss';

const cx = classNames.bind(styles);

function Box({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Box;
