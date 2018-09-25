import '../css/index.scss';

var currentItem = 0;

window.onload = function(){
	let direction = getParameterByName('direction');

	let twitterUsername = getParameterByName('twitter');
	let ytUsername = getParameterByName('youtube');
	let igUsername = getParameterByName('instagram');
	let scUsername = getParameterByName('snapchat');

	if(!twitterUsername){
		let twitter = document.getElementById('twitter-container');
		twitter.parentNode.removeChild(twitter);
	} else {
		document.getElementById('twitter-text').innerText = `@${twitterUsername}`;
	}

	if(!ytUsername){
		let youtube = document.getElementById('youtube-container');
		youtube.parentNode.removeChild(youtube);
	} else {
		document.getElementById('youtube-text').innerText = `@${ytUsername}`;
	}

	if(!igUsername){
		let instagram = document.getElementById('instagram-container');
		instagram.parentNode.removeChild(instagram);
	} else {
		document.getElementById('instagram-text').innerText = `@${igUsername}`;
	}

	if(!scUsername){
		let sc = document.getElementById('snapchat-container');
		sc.parentNode.removeChild(sc);
	} else {
		document.getElementById('snapchat-text').innerText = `@${scUsername}`;
	}


	var items = document.getElementsByClassName('item');
		//item cycle

	const ITEM_CYCLE_TIME = 8000;
	const CARD_IN_OUT_TIME = 300000;
	const CARD_ACTIVE_TIME = ITEM_CYCLE_TIME * items.length;



	if(direction !== 'left' && direction !== 'right') {
		direction = 'right';
	}

	//set first item to active
	items.item(currentItem).classList.add('active');
	setInterval(function(){
		this.item(currentItem).classList.remove('active');
		currentItem = (currentItem + 1) % (this.length);
		this.item(currentItem).classList.add('active');
	}.bind(items), ITEM_CYCLE_TIME);



	//card cycle
	var card = document.getElementsByClassName('slide-out-container')[0];
	card.classList.add(direction);
	var cardSetup = () => {
		card.classList.remove('in');
		card.classList.add('out');
		setTimeout(() => {
			card.classList.remove('out');
			card.classList.add('in');
		}, CARD_ACTIVE_TIME);
	};
	cardSetup();
	setInterval(cardSetup, CARD_IN_OUT_TIME);

}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
