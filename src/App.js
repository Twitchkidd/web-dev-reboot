import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import railgunImage from './railgun.jpg';
import HTMLComment from './components/HTMLComment';
import img006 from './006.jpg';
import './App.css';
import bigscreen from './bigscreen.jpg';
import tablet from './tablet.png';
import phone from './phone.jpg';

const Headers = () => (
	<React.Fragment>
		<div style={{ backgroundImage: `url('${img006}')` }}>
			<h1>This is an h1.</h1>
			<h2>This is an h2.</h2>
			<h3 id='headers-3'>This is an h3 with id!</h3>
			<h4 style={{ fontFamily: 'bembo' }}>This is an h4 in the Bembo font!</h4>
			<h5 style={{ color: '#ff66fa' }}>This is a pink h5.</h5>
			<h6 style={{ fontSize: '70px', marginBlockStart: '.1em', marginBlockEnd: '.1em' }}>
				This is an h6 with a font-size of 70px :)
			</h6>
		</div>
	</React.Fragment>
);

function App() {
	const [ toggled, setToggled ] = useState(false);
	const toggle = () => {
		setToggled(!toggled);
	};
	const LinksIFrameDemo = () => (
		<React.Fragment>
			<span style={toggled ? {} : { display: 'none' }}>
				<a style={{ display: 'block' }} href='https://www.garethfield.com' target='eyeFrame'>
					This is a link to GarethField.com!
				</a>
				<br />
				<a href='https://www.garethfield.com/bounce' target='eyeFrame'>
					This is a link to GarethField.com/Bounce!
				</a>
				<h2>iFrame Magic! (h2)</h2>
				<iframe height='200px' width='500px' name='eyeFrame' title='Test i-frame' style={{ border: 'none' }} />
			</span>
		</React.Fragment>
	);
	return (
		<div className='App' style={{ backgroundColor: '#C4EEC4' }}>
			<img
				title='I&#39;m from the anime A Certain Scientific Railgun!'
				src={railgunImage}
				height='200px'
				width='auto'
				alt='a simple sheild logo from the A Certain Scientific Railgun anime series'
				style={{ padding: '20px' }}
			/>
			<table style={{ width: '100%' }}>
				<caption>Starbucks Hot Drink Formulas</caption>
				<tr>
					<th>Drink</th>
					<th>Shots (S/T/G/V) [Hot]</th>
					<th>Pumps (S/T/G/V) [Hot]</th>
				</tr>
				<tr>
					<td>Latte</td>
					<td>1/1/2/2</td>
					<td>2/3/4/5</td>
				</tr>
				<tr>
					<td>Cappuccino</td>
					<td>1/1/2/2</td>
					<td>1/2/3/4</td>
				</tr>
				<tr>
					<td>Americano</td>
					<td>1/2/3/4</td>
					<td>2/3/4/5</td>
				</tr>
				<tr>
					<td>Latte Macchiato</td>
					<td>2/2/3/3</td>
					<td>2/3/4/5</td>
				</tr>
				<tr>
					<td>Caramel Macchiato</td>
					<td>1/1/2/2</td>
					<td>1/2/3/4</td>
				</tr>
			</table>
			<ul style={{ listStyleType: 'circle', textAlign: 'left' }}>
				<li>Butter Croissant</li>
				<li>Chocolate Croissant</li>
				<li>Almond Croissant</li>
				<li>Old-fashioned Doughnut</li>
				<li>Chocolate Brownie</li>
			</ul>
			<dl>
				<dt>Regular</dt>
				<dd>Normal extraction time: 18-23s</dd>
				<dt>Ristretto</dt>
				<dd>Short extraction time: 12-16s</dd>
				<dt>Long</dt>
				<dd>Extraction time: 14 years</dd>
			</dl>
			<Headers />
			<p>
				<small>My life</small>
				<br />
				<em>you electrify my life</em>
				<br />
				<strong>let's conspire to reignite</strong>
				<br />
				<del>all the souls that would die just to feel alive!</del>
				<br />
				<mark>~Muse (Black Holes and Revelations)</mark>
				<br />
				<sub>P.S. This is how to use break tags to start new lines in a p tag!</sub>
			</p>
			<pre
				style={{
					border: '4px solid mediumpurple',
					maxWidth: `calc(100vw - 240px)`,
					marginLeft: '120px',
					marginVertical: '12px',
					padding: '12px'
				}}>
				{`Here's some preformatted text!
		Are we tabbed over?
		Tabs? ...       ... Those a thing?
		Taaabs!`}
			</pre>
			<p>
				For a short quote, I described the Burundi Long Miles as,{' '}
				<q>getting face-****ed by an entire orchard of fruit.</q>
			</p>
			<blockquote cite='https://www.garethfield.com/fakeCitations'>
				And for a longer quote I think I'll ramble for a bit. Hard to say this isn't a quote from me, really, as I'm the
				one typing it and not looking at anything or thinking of anything specifically. Thinking it'd be nice if my code
				formatter worked like it used to. Surely all this will make sense when it's put together, when it's on my big
				screen and in the context of everything being aligned center, it looks like another splotch of text. It's a
				blockquote, though, I swear!
			</blockquote>
			<p>
				And while we're attributing things, if you use any abbreviations like{' '}
				<abbr title='National Aeronautics and Space Administration'>NASA</abbr> use an abbr tag.
			</p>
			<p>
				And if we're to cite things like <cite>Fight Club</cite> by Chuck Palahniuk, please use a cite tag
			</p>
			<ol className='classy' type='I'>
				<HTMLComment text='could not figure out why class was not being applied, className, and then I only applied in light mode lol' />
				<li>This is a list.</li>
				<li>A what?</li>
				<li>A list.</li>
				<li>A what?</li>
				<li>A list.</li>
				<li>Oh, they kissed!</li>
			</ol>
			<picture>
				<source media='(min-width: 960px)' srcset={bigscreen} />
				<source media='(min-width: 640px)' srcset={tablet} />
				<img src={phone} alt='electronic device' style={{ width: 'auto', maxWidth: '100%' }} />
			</picture>
			<Link to='/dark'>Dark Mode!</Link>
			<button style={{ display: 'block', margin: 'auto', marginBottom: '12px' }} onClick={() => toggle()}>
				Show/Hide Links, iFrame Demo (button)
			</button>
			<LinksIFrameDemo />
			<hr />
			<p>Now for contact information for the owner/author of a document, we have an address tag:</p>
			<address>
				Web page authored by Gareth Field<br />
				Please don't mail me at:<br />
				86 Wooby-Wooby Dr<br />
				New Largess, Vermont<br />
				US
			</address>
			<HTMLComment text='Lesson learned, that HTML quotes are non-trivial in React!' />
		</div>
	);
}

function AppInDarkMode() {
	const [ toggled, setToggled ] = useState(false);
	const toggle = () => {
		setToggled(!toggled);
	};
	const LinksIFrameDemo = () => (
		<React.Fragment>
			<span style={toggled ? {} : { display: 'none' }}>
				<a style={{ display: 'block' }} href='https://www.garethfield.com' target='eyeFrame'>
					This is a link to GarethField.com!
				</a>
				<br />
				<a href='https://www.garethfield.com/bounce' target='eyeFrame'>
					This is a link to GarethField.com/Bounce!
				</a>
				<h2>iFrame Magic! (h2)</h2>
				<iframe height='200px' width='500px' name='eyeFrame' title='Test i-frame' style={{ border: 'none' }} />
			</span>
		</React.Fragment>
	);
	return (
		<div className='App' style={{ color: '#c4eec4', backgroundColor: '#16161d' }}>
			<img
				title='I&#39;m from the anime A Certain Scientific Railgun!'
				src={railgunImage}
				height='200px'
				width='auto'
				alt='a simple sheild logo from the A Certain Scientific Railgun anime series'
				style={{ padding: '20px' }}
			/>
			<a className='buttonlink' href='https://www.google.com/' target='_blank' rel='noopener noreferrer'>
				Google!
			</a>
			<HTMLComment text='image as a link' />
			<a href='https://en.wikipedia.org/wiki/Sun_bear' target='_blank' rel='noopener noreferrer' title='sun bear wiki!'>
				<img
					src={logo}
					alt='React JS logo'
					style={{ height: '80px', width: 'auto', border: '1px solid #c4eec4' }}
					className='linkbutton'
				/>
			</a>
			<a className='buttonlink' href='#contact'>
				Jump To Contact Info
			</a>
			<img src={img006} style={{ width: '100px', height: '100px' }} alt='sunset' />
			<Headers />
			<p>
				<small>My life</small>
				<br />
				<em>you electrify my life</em>
				<br />
				<strong>let's conspire to reignite</strong>
				<br />
				<del>all the souls that would die just to feel alive!</del>
				<br />
				<mark>~Muse (Black Holes and Revelations)</mark>
				<br />
				<sub>P.S. This is how to use break tags to start new lines in a p tag!</sub>
			</p>
			<pre style={{ border: '4px solid mediumpurple' }}>
				{`Here's some preformatted text!
		Are we tabbed over?
		Tabs? ...       ... Those a thing?
		Taaabs!`}
			</pre>
			<p>
				For a short quote, I described the Burundi Long Miles as,{' '}
				<q>getting face-****ed by an entire orchard of fruit.</q>
			</p>
			<blockquote cite='https://www.garethfield.com/fakeCitations'>
				And for a longer quote I think I'll ramble for a bit. Hard to say this isn't a quote from me, really, as I'm the
				one typing it and not looking at anything or thinking of anything specifically. Thinking it'd be nice if my code
				formatter worked like it used to. Surely all this will make sense when it's put together, when it's on my big
				screen and in the context of everything being aligned center, it looks like another splotch of text. It's a
				blockquote, though, I swear! Oh actually though in the HTML spec it says how it should be used and this is not
				it.
			</blockquote>
			<a
				href='https://www.w3.org/TR/2011/WD-html5-author-20110705/the-blockquote-element.html'
				target='_blank'
				rel='noopener noreferrer'>
				The spec for blockquote tag.
			</a>
			<p>
				And while we're attributing things, if you use any abbreviations like{' '}
				<abbr title='National Aeronautics and Space Administration'>NASA</abbr> use an abbr tag.
			</p>
			<p>
				And if we're to cite things like <cite>Fight Club</cite> by Chuck Palahniuk, please use a cite tag
			</p>
			<ol>
				<li>This is a list.</li>
				<li>A what?</li>
				<li>A list.</li>
				<li>A what?</li>
				<li>A list.</li>
				<li>Oh, they kissed!</li>
			</ol>
			<Link to='/'>Light Mode!</Link>
			<button style={{ display: 'block', margin: 'auto', marginBottom: '12px' }} onClick={() => toggle()}>
				Show/Hide Links, iFrame Demo (button)
			</button>
			<LinksIFrameDemo />
			<hr />
			<p>Now for contact information for the owner/author of a document, we have an address tag:</p>
			<address id='contact'>
				Web page authored by Gareth Field<br />
				Please don't mail me at:<br />
				86 Wooby-Wooby Dr<br />
				New Largess, Vermont<br />
				US
			</address>
			<HTMLComment text='Lesson learned, that HTML quotes are non-trivial in React!' />
		</div>
	);
}

const AppWithRouting = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/dark' component={AppInDarkMode} />
		</Switch>
	</Router>
);

export default AppWithRouting;
