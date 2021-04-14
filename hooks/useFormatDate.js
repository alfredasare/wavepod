import 'moment-duration-format';

import moment from 'moment';
import { useEffect, useState } from 'react';

const useFormatDate = date => {
	const today = moment(new Date());
	const uploaded = moment(new Date(date));

	const [days, setDays] = useState('----');

	useEffect(() => {
		const daysBetween = today.diff(uploaded, 'days');

		if (daysBetween > 1) {
			setDays(`${daysBetween} days ago`);
		} else if (daysBetween === 1) {
			setDays(`1 day ago`);
		} else {
			setDays(`Less than a day ago`);
		}
	}, [date]);

	return {
		days,
	};
};

export default useFormatDate;
