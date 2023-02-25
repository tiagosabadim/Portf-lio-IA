window.onscroll = function() {
  if (window.pageYOffset > 0) {
      document.querySelector("header").classList.add("scrolled");
      document.querySelector("menu a").classList.add("menu-scrolled");
  } else {
      document.querySelector("header").classList.remove("scrolled");
      document.querySelector("menu a").classList.remove("menu-scrolled");
  }
}

  
  // Inicialização do Owl Carousel
  $('.owl-item-opacity').owlItemsOpacity({
  loop:true,
  margin:10,
  items:3,
  center: true,
  startPosition: 1,
  responsive:{
  0:{
  items:1
  },
  600:{
  items:3
  },
  1000:{
  items:3
  }
  }
  });
  
  // Adiciona ação de clique aos itens do carousel
  $(".owl-item-opacity").click(function() {
  moveToCenter(this);
  });
  
  // Ativa auto slide a cada 10 segundos
  setInterval(function() {
  var current = $(".center");
  var next = current.next();
  if (next.length) {
  moveToCenter(next);
  } else {
  moveToCenter(current.siblings().first());
  }
  }, 10000);
