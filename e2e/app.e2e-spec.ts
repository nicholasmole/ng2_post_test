import { CustomerTestPage } from './app.po';

describe('customer-test App', function() {
  let page: CustomerTestPage;

  beforeEach(() => {
    page = new CustomerTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
