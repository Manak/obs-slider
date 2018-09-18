import '../css/index.scss';

var currentItem = 0;

window.onload = function(){
	//item cycle
	var items = document.getElementsByClassName('item');

	const ITEM_CYCLE_TIME = 8000;
	const CARD_IN_OUT_TIME = 300000;
	const CARD_ACTIVE_TIME = ITEM_CYCLE_TIME * items.length;

	//set first item to active
	items.item(currentItem).classList.add('active');
	setInterval(function(){
		this.item(currentItem).classList.remove('active');
		currentItem = (currentItem + 1) % (this.length);
		this.item(currentItem).classList.add('active');
	}.bind(items), ITEM_CYCLE_TIME);



	var cardSetup = () => {
		card.classList.remove('in');
		card.classList.add('out');
		setTimeout(() => {
			card.classList.remove('out');
			card.classList.add('in');
		}, CARD_ACTIVE_TIME);
	};

	//card cycle
	var card = document.getElementsByClassName('slide-out-container')[0];

	cardSetup();
	setInterval(cardSetup, CARD_IN_OUT_TIME);

}
