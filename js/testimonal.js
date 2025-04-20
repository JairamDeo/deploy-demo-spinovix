let currentParent = 1;

function handleNextClick() {
  currentParent = Math.min(currentParent + 1, 2);
  // here 2 is no, of testimonal we habve currentlyu we have 2 previously we have 4 
  updateTestimonial();
}

function handlePreviousClick() {
  currentParent = Math.max(currentParent - 1, 1);
  updateTestimonial();
}

function updateTestimonial() {
  const testimonials = document.querySelectorAll('#testimonial-1, #testimonial-2');
  // Selecting only #testimonial-1 and #testimonial-2 becuase  #testimonial-3, and #testimonial-4 are not present in index.html
  testimonials.forEach((testimonial, index) => {
    if (index + 1 === currentParent) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) { // Left arrow key
    handlePreviousClick();
  } else if (event.keyCode === 39) { // Right arrow key
    handleNextClick();
  }
});

// Initialize the testimonial section
updateTestimonial();