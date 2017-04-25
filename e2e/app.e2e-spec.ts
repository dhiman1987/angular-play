import { PlayPage } from './app.po';

describe('play App', () => {
  let page: PlayPage;

  beforeEach(() => {
    page = new PlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
