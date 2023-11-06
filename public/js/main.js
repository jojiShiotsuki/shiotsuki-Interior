const currentPath = window.location.pathname;

  // Find all elements with the class 'nav-link'
  const navLinks = document.querySelectorAll('#nav-link');

  // Iterate through each link and toggle the class based on the current path
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('data-page');
    if (currentPath === `/${linkPage}`) {
      link.classList.add('bg-gray-900', 'text-white');
    } else {
      link.classList.remove('bg-gray-900', 'text-white');
      link.classList.add('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
    }
});

document.addEventListener('DOMContentLoaded', function () {
  // Your Swiper initialization code here
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
