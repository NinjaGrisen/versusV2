(function() {
  let _competitors = document.querySelectorAll('.player--container');

  for(var i = 0; i < _competitors.length; i++) {
    _competitors[i].addEventListener('click', test);
      function test(e) {

        var _competitor = e.target;
        var wrapperChilds;
        var wld;
        
        while(!_competitor.classList.contains("player--container")) {
           _competitor = _competitor.parentElement;
        }
        _competitor.classList.toggle('challanger__player--active');

        var wrapperChilds = document.querySelector('.challanger__player__wrapper').children;


        for(var i = 0; i < wrapperChilds.length; i++) {
          if(wrapperChilds[i].classList.contains('wld')) {
            wld = wrapperChilds[i];
          }
        };

        let wldInterval = setInterval(() => wldAnimate('i'), 1000);
        function wldAnimate(i) {
          console.log(i);
        }
        setTimeout(() => { clearInterval(wldInterval);}, 5000);
     }
  }

})(); 