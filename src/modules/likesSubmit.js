import { postLikes } from './apiConfig';
import likesCount from './likesCount';
const likes = async () => {
  const likeBtn = document.querySelectorAll('.btn-like');
  const badge = document.querySelectorAll('.badge');
  likeBtn.forEach(async (btn, index) => {
    btn.addEventListener('click', async () => {
      await postLikes(index);
      const likeTotal = await likesCount(index);
      badge[index].innerHTML = likeTotal;
    });
  });
};
export default likes;