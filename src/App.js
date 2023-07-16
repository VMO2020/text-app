import React, { useState } from 'react';

// Components
import { Share } from './components/Share';

// Icons
import { ReactComponent as Icon1 } from './assets/icons/copy.svg';
import { ReactComponent as Icon2 } from './assets/icons/delete.svg';

// Styles
import './app.scss';

const App = () => {
	const [textWrited, setTextWrited] = useState('');
	const [limit, setLimit] = useState(60);
	const [counter, setCounter] = useState(0);
	const [words, setwords] = useState(0);

	const handleCounter = (e) => {
		setTextWrited(e.target.value);
		setCounter(e.target.value.length);
		const wordsCount = countWords(e.target.value);
		setwords(wordsCount);
		const limitNumber = document.getElementById('limitNumber');
		counter >= limit
			? (limitNumber.style.color = '#FF0000')
			: (limitNumber.style.color = '#222831');
	};

	const handleReset = () => {
		setTextWrited('');
		setCounter(0);
		setwords(0);
		const limitNumber = document.getElementById('limitNumber');
		limitNumber.style.color = '#222831';
	};

	const handleCopyToClipboard = () => {
		navigator.clipboard
			.writeText(textWrited)
			.then(() => {
				alert('Content copied to clipboard');
			})
			.catch((error) => {
				alert('Failed to copy content to clipboard:', error);
			});
	};

	const countWords = (text) => {
		const words = text.trim().split(/\s+/);
		return words.length;
	};

	return (
		<div className="container">
			<div className="share-box">
				<Share url={'text-vmog.web.app/'} />
			</div>

			<div className="text">
				<h1>Word and character counter in text</h1>

				<div className="limit-selector">
					<label>SET CHARACTER LIMIT: </label>
					<select onChange={(e) => setLimit(e.target.value)}>
						<option value="60">Select</option>
						<option value="70">SERP Title</option>
						<option value="156">SERP Description</option>
						<option value="150">TIKTOK</option>
						<option value="160">SMS</option>
						<option value="200">MAP</option>
						<option value="280">Twitter</option>
						<option value="300">Twitch</option>
						<option value="1300">Linkedin</option>
						<option value="2200">Instagram</option>
						<option value="5000">YouTube</option>
						<option value="63205">Facebook</option>
					</select>
				</div>
				<textarea
					id="my-text"
					value={textWrited}
					rows="15"
					placeholder=" ✍🏽  Type or paste something here ..."
					onChange={handleCounter}
					style={
						counter <= limit
							? { border: '3px solid white' }
							: { border: '3px solid red' }
					}
				></textarea>
				<div className="counters-container">
					<p>
						Words: <span className="words">{words}</span>
					</p>
					<p>
						{`Characters: ${counter}/`}
						<span
							id="limitNumber"
							style={
								counter <= limit
									? { color: '$Dark' }
									: { color: 'red', fontWeight: '900' }
							}
						>{`${limit}`}</span>
					</p>
				</div>
				<div className="btn-box">
					<button className="btn__click" onClick={handleCopyToClipboard}>
						<Icon1 />
						<span>COPY</span>
					</button>
					<button className="btn__click delete" onClick={handleReset}>
						<Icon2 />
						<span>DELETE</span>
					</button>
				</div>
			</div>
			<a
				className="copyright"
				href="https://vmog.net/"
				target="_blank"
				rel="noreferrer"
			>
				Copyright and web design by © VMOG
			</a>
		</div>
	);
};

export default App;
