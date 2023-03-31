const URL_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ac1wVv9uxkfsVgtjiJMM/likes';

export const addLikeToItem = async (itemId) => {
  const request = new Request(URL_API);
  const response = await fetch(request, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ item_id: `${itemId}` }),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const getLikesToItems = async () => {
  const response = await fetch(likesLink);
  const data = await response.json();
  return data;
};







// Get the item ID for which you want to retrieve the number of likes
// const likes = () => {

// const clicked = e.target.closest('.like-icon');
//     if (!clicked) return;
//     const item = clicked.getAttribute('id');

// const itemId = item;

// // Get the HTML elements for the like button and the like count
// const likeCount = document.getElementById('like-count');

// // Add an event listener to the like button
// likeIcon.addEventListener('click', async () => {
//   // Increase the like count by 1
//   const currentCount = parseInt(likeCount.textContent);
//   likeCount.textContent = currentCount + 1;

//   // Send a POST request to the API to update the number of likes for the item
//   await fetch(URL_API, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       item_id: itemId
//     })
//   });
// });

// // Get the number of likes for the item from the API
// (async () => {
//   const response = await fetch(`${URL_API}?item_id=${itemId}`);
//   const data = await response.json();
//   likeCount.textContent = data.likes;
// })();
// }

