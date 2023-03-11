import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Mon</span>
            <FontAwesomeIcon className={cx('icon')} icon={faSun} />
            <span className={cx('temperature')}>15&deg;</span>
        </div>
    );
}

export default Navigation;
