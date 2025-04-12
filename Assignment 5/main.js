// Toggle visibility of the comments section
const toggleBtn = document.querySelector('.show-hide');
const commentSection = document.querySelector('.comment-wrapper');

if (toggleBtn && commentSection) {
  commentSection.style.display = 'none';

  toggleBtn.addEventListener('click', () => {
    const isHidden = commentSection.style.display === 'none';
    commentSection.style.display = isHidden ? 'block' : 'none';
    toggleBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
  });
}

// Handle comment form submission
const commentForm = document.querySelector('.comment-form');
const nameInput = document.querySelector('#name');
const commentInput = document.querySelector('#comment');
const commentList = document.querySelector('.comment-container');

if (commentForm) {
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment();
  });
}

function addComment() {
  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  if (!name || !comment) {
    alert('Please enter both your name and comment.');
    return;
  }

  const listItem = document.createElement('li');
  const nameEl = document.createElement('p');
  const commentEl = document.createElement('p');

  nameEl.textContent = name;
  commentEl.textContent = comment;

  listItem.appendChild(nameEl);
  listItem.appendChild(commentEl);
  commentList.appendChild(listItem);

  nameInput.value = '';
  commentInput.value = '';
}
