
function expandCard(cardId) {
  const cards = document.querySelectorAll('.choice');
  cards.forEach(card => {
    if (card.id === cardId) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

 AOS.init();
// let content = document.getElementsByClassName("hidden_container");

// function text(data) {
//   for (let item of content) {
//     if (item.id === data) {
//       item.classList.add("card_content");
//     } else {
//       item.classList.remove("card_content");
//     }
//   }
// }
