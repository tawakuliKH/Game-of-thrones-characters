
import { getLikes } from './apiConfig';
const likesCount = async (index) => {
  const likesJson = await getLikes();
  let likeTotal = 0;
  likesJson.forEach((likesss) => {
    if (likesss.item_id === index) likeTotal = likesss.likes;
  });
  return likeTotal;
};
export default likesCount;