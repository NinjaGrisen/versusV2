(function() {
  let menuButton = document.querySelector('.header__button');
  let content = document.querySelector('.content');
  let challengersButton = document.querySelector('.challengers__draggable');
  let challengersContainer = document.querySelector('.challengers-container');

  menuButton.addEventListener('click', toggleMenu);
  challengersButton.addEventListener('click', expandChallengersButton);
  

  function toggleMenu() {

    if(content.className.includes('--active')) {
       content.className="content";  
    } else {
      content.className="content" + "--active";
    }
  }

  function expandChallengersButton() {
    if(challengersContainer.className.includes('--active')) {
       challengersContainer.className="challengers-container";  
    } else {
      challengersContainer.className="challengers-container" + "--active";
    }
  }

})(); 