const Audio = ({ src }) => {
	// eslint-disable-next-line
	return <audio id='wavepod-audio' preload='metadata' src={src} />;
};

export default Audio;
