const testimonials = [
  {
    id: 1,
    username: "Sophia Morgan",
    imageUrl: "images/user-1.jpg",
    testimonial:
      "Absolutely loved the experience from start to finish. Everything felt smooth, simple, and beautifully designed.",
  },
  {
    id: 2,
    username: "Liam Carter",
    imageUrl: "images/user-2.jpg",
    testimonial:
      "The attention to detail really stood out to me. It feels polished, modern, and incredibly easy to use.",
  },
  {
    id: 3,
    username: "Olivia Chen",
    imageUrl: "images/user-3.jpg",
    testimonial:
      "Exactly what I was looking for without any unnecessary complexity. Clean design, fast performance, and a great overall experience.",
  },
  {
    id: 4,
    username: "Emma Wilson",
    imageUrl: "images/user-4.jpg",
    testimonial:
      "I was impressed by how intuitive everything felt. A thoughtful experience that makes every interaction enjoyable.",
  },
];

const imgEl = document.getElementById("img");
const testimonialTextEl = document.getElementById("testimonial");
const usernameEl = document.getElementById("username");
const leftBtnEl = document.getElementById("left-btn");
const rightBtnEl = document.getElementById("right-btn");

let idx = 0;
let autoAdvanceTimer = null;

renderTestimonial();
startAutoAdvance();

function renderTestimonial() {
  const { username, imageUrl, testimonial } = testimonials[idx];
  imgEl.src = imageUrl;
  testimonialTextEl.textContent = testimonial;
  usernameEl.textContent = username;
}

function startAutoAdvance() {
  clearTimeout(autoAdvanceTimer);
  autoAdvanceTimer = setTimeout(nextTestimonial, 7000);
}

function prevTestimonial() {
  idx = (idx - 1 + testimonials.length) % testimonials.length;
  renderTestimonial();
  startAutoAdvance();
}

function nextTestimonial() {
  idx = (idx + 1) % testimonials.length;
  renderTestimonial();
  startAutoAdvance();
}

leftBtnEl.addEventListener("click", prevTestimonial);
rightBtnEl.addEventListener("click", nextTestimonial);
