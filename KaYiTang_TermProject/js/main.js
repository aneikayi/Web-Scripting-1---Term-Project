const menu = document.getElementById("mobile-menu");
const hamicon = document.getElementById("ham-icon");
const xicon = document.getElementById("x-icon");

function toggleMenu(){
  menu.classList.toggle("toggleMenu");
  hamicon.classList.toggle("hide");
  xicon.classList.toggle("hide");
}

jQuery(document).ready(function () {
		$('main').slidingDeck();
		})

$('main').slidingDeck({
cards:'section',
height:'full',// auto, PX
zIndexBase: 10,
classes: {
cardBase:'jsd-card',
cardActive:'jsd-card--active',
cardFixed:'jsd-card--fixed',
cardPrevious:'jsd-card--previous',
cardNext:'jsd-card--next',
cardGhost:'jsd-card--ghost',
}
});
