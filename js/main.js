const doc = document;
const postEl = doc.querySelector ('.post');

const post = [
    {
    title: 'Заголовок',
    img: 'img1.jfif',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam vel ea exercitationem dicta, sint velit cumque nostrum accusamus labore voluptatem iusto quaerat vitae ratione corporis culpa voluptatibus quasi quod nobis.',
    },
]

const postItems = post.map(function(item) {
    return`
    <h1 class="post__title">${item.title}</h1>
        <div class="post__content">
          <img class="post__img" src="img/${item.img}" alt="">
          <p class="post__text">${item.text}</p>
        </div>
        <div class="post__button">
        <button onclick="myImg()" class="post__btn">
          Показати/Приховати зображення
          <i class="fa-solid fa-arrow-down"></i>
        </button>
      </div>
      <div  class="post__hidden">
        <img id="img_1" style="display:none;" src="img/images.png" alt="">
      </div`
}).join('');

postEl.innerHTML = postItems;

function myImg() {
  let elem = document.getElementById('img_1'); // отримуємо елемент по ID
  let style = getComputedStyle(elem); // отримуємо його стилі
  if (style.display === 'none') {
    document.getElementById('img_1').style.display='block';
    } else if (style.display !== 'none') {
    document.getElementById('img_1').style.display='none';
  }
}