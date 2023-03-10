import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsToDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
            <input className={cx('search-btn')} type="text" placeholder="Search for places ..." />
            <FontAwesomeIcon className={cx('result-icon')} icon={faArrowsToDot} />
        </div>
    );
}

export default Search;
