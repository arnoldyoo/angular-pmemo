import { AngularFirebaseMemoPage } from './app.po';

describe('angular-firebase-memo App', function() {
  let page: AngularFirebaseMemoPage;

  beforeEach(() => {
    page = new AngularFirebaseMemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
