import { InteractiveReaderPage } from './app.po';

describe('interactive-reader App', function() {
  let page: InteractiveReaderPage;

  beforeEach(() => {
    page = new InteractiveReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
