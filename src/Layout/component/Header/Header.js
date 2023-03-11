import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Header.module.scss';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Today" to={config.routes.today} />
                <MenuItem title="Week" to={config.routes.week} />
            </Menu>

            <div className={cx('container')}>
                <button className={cx('temperature-btn')}>&deg;C</button>
                <button className={cx('temperature-btn')}>&deg;F</button>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/273544622_3047488055568466_7278172477705962968_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=r6BAeOoXNjQAX_93KUF&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfAejqX_H6lILBj8L-YvfIOFgUPAoEB_ejx9kfR8Sp-ayw&oe=64103E8B"
                    alt="avatar"
                />
            </div>
        </header>
    );
}

export default Header;
