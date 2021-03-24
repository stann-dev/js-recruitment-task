import { onReadLaterClick } from './onReadLaterClick';
import { readLaterStorage } from '../readLater/readLaterStorageController';

export function generateNewsList(newsList) {
  let articleList = document.getElementById('newsListContainer');
  articleList.innerHTML = '';

  if(newsList.length < 1){
    articleList.innerHTML = 'No news found...';
  }

  newsList.map((item) => {
    let articleLi = document.createElement('li');
    let article = document.createElement('article');
    let readLaterData = {
      id: item.id,
      title: item.webTitle,
      webUrl: item.webUrl
    };
    article.classList.add('news');

    let readLaterBtnHideClass = '';
    if(readLaterStorage.checkIfExists(readLaterData)){
      readLaterBtnHideClass = 'hide';
    }

    article.innerHTML = `
    <header>
      <h3>${item.webTitle}</h3>
    </header>
    
    <section class="newsDetails">
      <ul>
        <li>
          <strong>Section Name:</strong>
          ${item.sectionName}
        </li>
        <li>
          <strong>Publication Date:</strong>
          ${new Date(item.webPublicationDate).toISOString().substring(0,10)}
        </li>
      </ul>
    </section>
    <section class="newsActions">
      <a href="${item.webUrl}" target="_blank" class="button">Full article</a>
        <button class="button button-outline readLater ${readLaterBtnHideClass}" id="read_later_${item.id}">Read Later</button>
    </section>
    `;

    if(article.querySelector('.readLater'))
    article.querySelector('.readLater').addEventListener('click', (e) => {
      if(!e.target.classList.contains('hide')) {
        onReadLaterClick(readLaterData);
      }
    });

    articleLi.appendChild(article);
    articleList.appendChild(articleLi);
  });
}
