import classNames from 'classnames/bind';
import styles from './Box.module.scss';

const cx = classNames.bind(styles);

function BoxItem({ title, value, level, icon }) {
    return (
        <div className={cx('box-item')}>
            <span className={cx('title')}>{title}</span>
            <span className={cx('value')}>{value}</span>
            <span className={cx('level')}>{level}</span>
            <span className={cx('icon')}>{icon}</span>
        </div>
    );
}

export default BoxItem;
