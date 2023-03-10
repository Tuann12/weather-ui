import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation({ title, temperature }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>{title}</span>
            <FontAwesomeIcon className={cx('icon')} icon={faSun} />
            <span className={cx('temperature')}>{temperature}</span>
        </div>
    );
}

export default Navigation;
