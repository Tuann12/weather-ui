import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faIcicles, faTemperatureFull, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Box, { BoxItem } from './Box';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <span>Today's Highlights</span>
            </div>
            <Box>
                <BoxItem
                    title="Wind Status"
                    value="7.70 Km/h"
                    level="WSW"
                    icon={<FontAwesomeIcon icon={faCompass} />}
                />
                <BoxItem
                    title="Humidity"
                    value="12 %"
                    level="Normal"
                    icon={<FontAwesomeIcon icon={faTemperatureFull} />}
                />
                <BoxItem
                    title="Visibility"
                    value="5.2 Km"
                    level="Average"
                    icon={<FontAwesomeIcon icon={faIcicles} />}
                />
                <BoxItem title="Air Quality" value="105" level="Unhealthy" icon={<FontAwesomeIcon icon={faWind} />} />
            </Box>
        </div>
    );
}

export default Content;
