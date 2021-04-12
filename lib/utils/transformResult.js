export const transformChannelResult = result => {
	return result.data.map(doc => {
		// eslint-disable-next-line
		const { episodes, ...otherData } = doc;

		return {
			...otherData,
		};
	});
};
