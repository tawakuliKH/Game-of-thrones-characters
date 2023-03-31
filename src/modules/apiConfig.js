const url = 'https://thronesapi.com/api/v2/Characters';
const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JeJYjxsBuodV8OXPFd0e/comments';
const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JeJYjxsBuodV8OXPFd0e/likes';

const getCharacters = async () => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const getSpecificCharacter = async (id) => {
  const response = await fetch(`${url}/${id}`);
  const result = await response.json();
  return result;
};

const postComment = async (charId, yourName, yourComment) => {
  const body = {
    item_id: charId,
    username: yourName,
    comment: yourComment,
  };
  await fetch(involvementUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getComment = async (id) => {
  const link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JeJYjxsBuodV8OXPFd0e/comments?item_id=${id}`;
  const response = await fetch(link);
  const result = await response.json();
  return result;
};

const postLikes = async (id) => {
  const response = await fetch(likeUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
  const data = await response.text();
  return data;
};

const getLikes = async () => {
  const response = await fetch(likeUrl);
  const result = await response.json();
  return result;
};

export {
  getCharacters, getSpecificCharacter, postComment, getComment, postLikes, getLikes,
};