import Head from 'next/head';

import Box from '@/components/layout/box/box';
import Container from '@/components/layout/container/container';
import Flex from '@/components/layout/flex/flex';
import Grid from '@/components/layout/grid/grid';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Flex
				display='flex'
				width='100%'
				height={'200px'}
				justifyContent='space-between'
			>
				<Box
					width='500px'
					height='100px'
					backGroundColor='beige'
					borderStyle='solid'
					borderWidth='1px'
					borderRadius='5px'
					borderColor='black'
					color='red'
					boxShadow='10px 10px 8px #888888'
					centerContent={true}
				>
					<h1>Is it working???</h1>
				</Box>
				<Box
					width='500px'
					height='100px'
					backGroundColor='beige'
					borderStyle='solid'
					borderWidth='1px'
					borderRadius='5px'
					borderColor='black'
					color='red'
					boxShadow='10px 10px 8px #888888'
					centerContent={true}
				>
					<h1>Is it working???</h1>
				</Box>
				<Box
					width='500px'
					height='100px'
					backGroundColor='beige'
					borderStyle='solid'
					borderWidth='1px'
					borderRadius='5px'
					borderColor='black'
					color='red'
					boxShadow='10px 10px 8px #888888'
					centerContent={true}
				>
					<h1>Is it working???</h1>
				</Box>
			</Flex>
			<Grid display='grid' gridTemplateColumns='1fr 1fr 1fr' gridGap='30px'>
				{[1, 2, 3, 4, 5].map((num, index) => (
					<Box
						key={index}
						width='500px'
						height='100px'
						backGroundColor='beige'
						borderStyle='solid'
						borderWidth='1px'
						borderRadius='5px'
						borderColor='black'
						color='red'
						boxShadow='10px 10px 8px #888888'
						centerContent={true}
					>
						<h1>Is it working???</h1>
					</Box>
				))}
			</Grid>
			<br />
			<br />
			<Container centerContent>
				<Box
					width='500px'
					height='100px'
					backGroundColor='beige'
					borderStyle='solid'
					borderWidth='1px'
					borderRadius='5px'
					borderColor='black'
					color='red'
					boxShadow='10px 10px 8px #888888'
					centerContent={true}
				>
					<h1>Is it working???</h1>
				</Box>
			</Container>
		</div>
	);
}
