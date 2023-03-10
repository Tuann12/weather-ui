import Search from '~/Layout/component/Search';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-top')}>
                <Search />
                <div className="weather-info">
                    <FontAwesomeIcon className={cx('weather-icon')} icon={faCloud} />
                    <h1 className={cx('temperature')}>12*C</h1>
                    <div className={cx('infoToday')}>
                        <span>Monday,</span>
                        <span className={cx('time')}> 16:00</span>
                    </div>
                    <span className={cx('crossbar')}></span>
                </div>
            </div>
            <div className={cx('content-bottom')}>
                <div className={cx('weather')}>
                    <FontAwesomeIcon className={cx('icon-bottom')} icon={faCloud} />
                    <span>Mostly cloudy</span>
                </div>
                <div className={cx('weather')}>
                    <FontAwesomeIcon className={cx('icon-bottom')} icon={faCloud} />
                    <span>Mostly cloudy</span>
                </div>
                <div className={cx('place')}>
                    <img
                        className={cx('img-place')}
                        src="https://kenh14cdn.com/thumb_w/660/2019/4/24/empire1-15560761422951284289898.jpg"
                        alt="newyork"
                    />
                    <span className={cx('name-place')}>New York</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
