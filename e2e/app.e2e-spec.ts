import { EditEverywherePage } from './app.po';

describe('edit-everywhere App', () => {
  let page: EditEverywherePage;

  beforeEach(() => {
    page = new EditEverywherePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
