import './style.css';
import popup from './modules/comments_pop';
import render from './modules/render';

render();
popup();

// const renderAPI = async () => {
//   const cardRender = [];
//   const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
//   const data = await response.json();
//   data.forEach((element) => {
//     cardRender.push(`
//           <div class="col-6 col-md-4">
//             <div class="card" style="width: 18rem;">
//               <img src="${element.categories.strCategoryThumb}" class="card-img-top" alt="...">
//               <div class="card-body">
//                 <h5 class="card-title">${element.categories.strCategory}</h5>
//                 <p class="card-text">
//                   <button type="button" class="btn btn-outline-info btn-sm">🤍</button>
//                   <br>
//                   <span class="badge text-bg-secondary ms-2">4</span>
//                   Likes
//                 </p>
//                 <div class="description-buttons justify-content-center">
//                   <a href="#" class="btn btn-primary btn-sm">comments</a>
//                   <br>
//                   <a href="#" class="btn btn-primary btn-sm">Reservations</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         `);
//   });
//   document.getElementById('card-row').innerHTML += cardRender.join('');
// };

// document.getElementById('show-API').addEventListener('click', renderAPI);