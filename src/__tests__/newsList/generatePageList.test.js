import { generatePageList } from '../../app/newsList/generatePageList';

describe('Selector for pages', () => {
  test('it should return DOM select element with option list', () => {
    document.body.innerHTML = '<select id="activePageSelect"></select>';
    generatePageList(3);

    const output = '<select id="activePageSelect"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select>';

    expect(document.body.innerHTML).toBe(output);
  });
});
