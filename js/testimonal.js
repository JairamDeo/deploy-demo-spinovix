let currentParent = 1;

function handleNextClick() {
  currentParent = Math.min(currentParent + 1, 4);
  updateTestimonial();
}

function handlePreviousClick() {
  currentParent = Math.max(currentParent - 1, 1);
  updateTestimonial();
}

function updateTestimonial() {
  const testimonials = document.querySelectorAll('#testimonial-1, #testimonial-2, #testimonial-3, #testimonial-4');
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