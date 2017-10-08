import { MbrAppPage } from './app.po';

describe('mbr-app App', function() {
  let page: MbrAppPage;

  beforeEach(() => {
    page = new MbrAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
