import React, { useState } from 'react';

// Components
import { Share } from './components/Share';

// Icons
import { ReactComponent as Icon1 } from './icons/copy.svg';
import { ReactComponent as Icon2 } from './icons/delete.svg';

// Styles
import './app.scss';

const App = () => {
	const [limit, setLimit] = useState(60);
	const [counter, setCounter] = useState(0);

	const handleCounter = (e) => {
		const limitNumber = document.getElementById('limitNumber');
		setCounter(e.target.value.length);
		counter >= limit
			? (limitNumber.style.color = '#FF0000')
			: (limitNumber.style.color = '#222831');
	};

	const handleClick = () => {
		const textWrited = document.getElementById('my-text');
		const limitNumber = document.getElementById('limitNumber');
		textWrited.value = textWrited.defaultValue;
		setCounter(0);
		limitNumber.style.color = '#222831';
	};

	const handleCopy = (e) => {
		const copyText = document.getElementById('my-text');
		copyText.select();
		document.execCommand('copy');
	};

	return (
		<div className='container-text'>
			<div className='share-box'>
				<Share url={'text-vmog.web.app/'} />
			</div>

			<div className='text'>
				<h1>Character counter in text</h1>

				<div className='limit-selector'>
					<label>CHARACTERS LIMIT: </label>
					<select onChange={(e) => setLimit(e.target.value)}>
						<option value='60'>Select</option>
						<option value='70'>SERP Title</option>
						<option value='156'>SERP Description</option>
						<option value='150'>TIKTOK</option>
						<option value='160'>SMS</option>
						<option value='200'>MAP</option>
						<option value='280'>Twitter</option>
						<option value='300'>Twitch</option>
						<option value='1300'>Linkedin</option>
						<option value='2200'>Instagram</option>
						<option value='5000'>YouTube</option>
						<option value='63205'>Facebook</option>
					</select>
				</div>
				<textarea
					id='my-text'
					rows='15'
					placeholder=' ✍🏽  Type or paste something here ...'
					onChange={handleCounter}
					style={
						counter <= limit
							? { border: '3px solid white' }
							: { border: '3px solid red' }
					}
				></textarea>
				<p>
					{`${counter}/`}
					<span
						id='limitNumber'
						style={
							counter <= limit
								? { color: '$Dark' }
								: { color: 'red', fontWeight: '900' }
						}
					>{`${limit}`}</span>
				</p>
				<div className='btn-box'>
					<button className='btn-click' onClick={handleCopy}>
						<Icon1 />
						<span>COPY</span>
					</button>
					<button className='btn-click' onClick={handleClick}>
						<Icon2 />
						<span>DELETE</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
