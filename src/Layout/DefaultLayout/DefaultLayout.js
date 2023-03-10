import Header from '~/Layout/component/Header';
import Sidebar from '~/Layout/component/Sidebar';
import Content from '~/Layout/component/Content';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('weather-box')}>{children}</div>
                <Content />
            </div>
        </div>
    );
}

export default DefaultLayout;
