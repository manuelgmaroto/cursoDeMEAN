import { AplicacionPeliculasPage } from './app.po';

describe('aplicacion-peliculas App', function() {
  let page: AplicacionPeliculasPage;

  beforeEach(() => {
    page = new AplicacionPeliculasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
