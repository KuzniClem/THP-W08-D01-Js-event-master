// Feature number 1 and 1-bis
let clickerFooter = document.getElementsByTagName('footer');
let clickCount = 0;
clickerFooter[0].addEventListener('click', function() {
  console.log('clique');
  console.log(`clic numéro ${clickCount}`);
  clickCount++;
});

// Feature number 2
let hamburgerMenu = document.getElementById('navbarHeader');
let hamburgerMenuButton = document.getElementsByClassName('navbar-toggler')[0];
let hamburgerMenuStatus = false;
hamburgerMenuButton.addEventListener('click', function() {
	if (!hamburgerMenuStatus) {
		hamburgerMenu.classList.remove('collapse');
		hamburgerMenuStatus = true;
	} else {
		hamburgerMenu.classList.add('collapse');
		hamburgerMenuStatus = false;
	}
});

// Feature number 3
let elementCardsText = document.getElementsByClassName('card-text');
let editButtons = document.getElementsByClassName('btn-outline-secondary');
editButtons[0].addEventListener('click', function() {
	elementCardsText[0].style.color = 'red';
});

// Feature number 4
let cardTextIsGreen = false;
editButtons[1].addEventListener('click', function() {
	if (!cardTextIsGreen) {
		elementCardsText[1].style.color = 'green';
		cardTextIsGreen = true;
	} else {
		elementCardsText[1].style.color = 'black';
		cardTextIsGreen = false;
	};
});

// Feature number 5
let bootstrapLink = document.getElementsByTagName('link')[0];
let bootstrapHref = bootstrapLink.href;
let hasBootstrap = true;
hamburgerMenu.addEventListener('dblclick', function() {
	if (hasBootstrap) {
		bootstrapLink.href = 'javascript:;';
		hasBootstrap = false;
	} else {
		bootstrapLink.href = bootstrapHref;
		hasBootstrap = true;
	};
});

// Feature number 6
let elementCards = document.getElementsByClassName('card');
let elementCardsImg = document.getElementsByClassName('card-img-top');
let viewButtons = document.getElementsByClassName('btn-success');
let cards = [];
for (let i = 0; i < elementCards.length; i++) {
	cards.push({
		card: elementCards[i],
		image: elementCardsImg[i],
		text: elementCardsText[i],
		viewButton: viewButtons[i],
		isShortened: false
	});
	cards[i].viewButton.addEventListener('mouseenter', function() {
		if (!cards[i].isShortened) {
			cards[i].text.innerHTML = '';
			cards[i].image.style.width = '20%';
			cards[i].image.style.height = 'auto';
			cards[i].isShortened = true
		} else {
			cards[i].text.innerHTML = 'aoeuaoenushtaoesuao';
			cards[i].image.style.width = '100%';
			cards[i].image.style.height = 'auto';
			cards[i].isShortened = false
		};
	});
};
