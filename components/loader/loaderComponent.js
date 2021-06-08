import { LoaderWrapper } from '@/components/loader/loaderStyles';
import Logo from '@/components/svg/logo';

const LoaderComponent = ({ height }) => {
	return (
		<LoaderWrapper height={height}>
			<Logo />
		</LoaderWrapper>
	);
};

export default LoaderComponent;
