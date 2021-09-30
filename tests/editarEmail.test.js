import SitePage from '../pages/site.page';
import datosEdicion from'../datos/datosEdicion';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import profilePage from '../pages/profile.page';
import datosUsuario from '../datos/datosUsuario';




describe('Edita email:', () => {

  it('Abre web y aprieta Login', async () => {
    browser.url('/');
    await SitePage.clickearElemento(await SitePage.logIn);
    await browser.pause(1700); 
  });

  it('Ingresa a usuario existente y entra a Perfil', async () => {    
    await LoginPage.logPerfilPruebas();    
    await browser.pause(1700); 
    await HomePage.entrarPerfil();
    await browser.pause(1700);
  });

  
  it(`Editar mail a formato correcto`, async () => {
    let mail = datosEdicion.mailCor;
    await profilePage.editarEmail(mail);  
    await browser.pause(9000); 
  });

  it('Edita Email y lo deja vacío', async () => {    
    let mail = datosEdicion.mailVacio;
    await profilePage.editarEmail(mail);  
    await browser.pause(9000);
  });
  

  it('Edita Email a formato incorrecto', async () => {    
    let mail = datosEdicion.mailInc;
    await profilePage.editarEmail(mail);  
    await browser.pause(9000);
  });

  it('Restaura mail', async () => {    
    let mail = datosUsuario.email;
    await profilePage.editarEmail(mail);  
    await browser.pause(9000);
  });
    
  
});