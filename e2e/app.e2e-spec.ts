import { PiwowarPage } from './app.po';

describe('piwowar App', () => {
  let page: PiwowarPage;

  beforeEach(() => {
    page = new PiwowarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pw works!');
  });
});
