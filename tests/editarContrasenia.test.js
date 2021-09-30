import datosEdicion from '../datos/datosEdicion';
import datosUsuario from '../datos/datosUsuario';
import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';
import SitePage from '../pages/site.page';
import HomePage from '../pages/home.page';

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

  it(`Editar contraseña a formato correcto`, async () => {
    let contrasenia = datosEdicion.passCor;
    let confContrasenia = datosEdicion.passCor;
    let pass = datosUsuario.contrasenia;
    await ProfilePage.editarContrasenia(contrasenia, confContrasenia, pass);  
    await browser.pause(3000); 
  });

  it('Edita contraseña y deja confirmacion vacía', async () => {    
    let contrasenia = datosEdicion.passCor;
    let confContrasenia = datosEdicion.contVacia;
    let pass = datosUsuario.contrasenia;
    await ProfilePage.editarContrasenia(contrasenia, confContrasenia, pass);  
    await browser.pause(3000);
  });
  

  it('Restaura contraseña', async () => {    
    let contrasenia = datosUsuario.contrasenia;
    let confContrasenia = datosUsuario.contrasenia;
    let pass = datosEdicion.passCor;
    await ProfilePage.editarContrasenia(contrasenia, confContrasenia, pass);  
    await browser.pause(3000);
  });
    
  
});