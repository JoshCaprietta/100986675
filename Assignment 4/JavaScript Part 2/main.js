const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
for (let i = 1; i <= 5; i++) {
/* Declaring the alternative text for each image file */
    const altText = `Thumbnail image ${i}`;
/* Looping through images */
    const newImage = document.createElement('img');
    const imagePath = `images/${images[i - 1]}`;
    newImage.setAttribute('src', imagePath);
    newImage.setAttribute('alt', altText);

    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', this.getAttribute('src'));
        displayedImage.setAttribute('alt', this.getAttribute('alt'));
    });

    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

