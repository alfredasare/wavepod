import 'moment-duration-format';

import moment from 'moment';

const useFormatDate = date => {
	const today = moment(new Date());
	const uploaded = moment(new Date(date));
	const days = today.diff(uploaded, 'days');

	const daysLeft = days => {
		switch (days) {
			case days > 1:
				return `${days} days ago`;

			case days === 1:
				return `1 day ago`;

			default:
				return `Less than a day ago`;
		}
	};

	return {
		days: daysLeft(days),
	};
};

export default useFormatDate;
