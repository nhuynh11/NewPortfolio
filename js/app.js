document.addEventListener('DOMContentLoaded', () => {


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const animated = entry.target.querySelectorAll('.animated');
      console.log(animated);
      if (entry.isIntersecting) {
        for (let i = 0; i < animated.length; i++) {
          animated[i].classList.add('fadeInUp');
        }
      return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      for (let i = 0; i < animated.length; i++) {
        animated[i].classList.remove('fadeInUp');
      }
    });
  });

  observer.observe(document.querySelector('.landing'));
  observer.observe(document.querySelector('.projects'));
  observer.observe(document.querySelector('.about'));
  observer.observe(document.querySelector('.contact'));





})