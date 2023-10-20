//Juan José Pérez Buriticá 






document.getElementById('submit-comment').addEventListener('click', function () {
  const commentText = document.getElementById('comment').value.trim();
  if (commentText !== '') {
    const commentList = document.querySelector('.comment-box ul');
    const newComment = document.createElement('li');
    const comment = document.createElement('p');

    const toUppercase = document.getElementById('submit-uppercase').classList.contains('active');
    const toLowercase = document.getElementById('submit-lowercase').classList.contains('active');

    if (toUppercase) {
      comment.innerText = `Usuario x: ${commentText.toUpperCase()}`;
    } else if (toLowercase) {
      comment.innerText = `Usuario x: ${commentText.toLowerCase()}`;
    } else {
      comment.innerText = `Usuario x: ${commentText}`;
    }

    comment.style.color = 'green';
    comment.style.fontWeight = 'bold';

    newComment.appendChild(comment);
    commentList.appendChild(newComment);

    document.getElementById('comment').value = '';

    document.getElementById('submit-uppercase').classList.remove('active');
    document.getElementById('submit-lowercase').classList.remove('active');
  }
});

document.getElementById('submit-uppercase').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('submit-lowercase').classList.remove('active');
});

document.getElementById('submit-lowercase').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('submit-uppercase').classList.remove('active');
});

document.getElementById('comment').addEventListener('input', function () {
  const maxCharacters = 255;
  const comment = this.value;
  const counter = document.getElementById('counter');
  const remainingCharacters = maxCharacters - comment.length;

  if (remainingCharacters >= 0) {
    counter.innerText = remainingCharacters;
  } else {
    this.value = comment.slice(0, maxCharacters);
    counter.innerText = 0;
  }
});


