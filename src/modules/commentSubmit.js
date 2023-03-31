import { postComment, getComment } from './apiConfig';

const commentShow = async (id) => {
  const comments = await getComment(id);
  const userComments = document.querySelector('.user-comments');
  let commentsCount = 0;
  if (comments.length > 0) {
    commentsCount = comments.length;
  }
  userComments.innerHTML = ` 
  <h3> Comments(${commentsCount})</h3>
  <tr>
  <td><b>Date</b></td>
  <td><b>UserName</b></td>
  <td><b>Comment</b></td>
</tr>`;
  comments.forEach((comment) => {
    userComments.innerHTML += `
  <tr>
    <td>${comment.creation_date}</td>
    <td>${comment.username}</td>
    <td>${comment.comment}</td>
  </tr>`;
  });
};

const commentSubmit = async () => {
  const yourComment = document.querySelector('.your-comment');
  const yourName = document.querySelector('.your-name');
  const charID = document.querySelector('.character-id');
  postComment(charID.value, yourName.value, yourComment.value);
  await commentShow(charID.value);
  await commentShow(charID.value);
  yourComment.value = '';
  yourName.value = '';
  charID.value = '';
};

export { commentSubmit, commentShow };