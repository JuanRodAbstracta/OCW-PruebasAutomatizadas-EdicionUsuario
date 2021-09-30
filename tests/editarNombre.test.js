import datosEdicion from '../datos/datosEdicion';
import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';
import RegisterPage from '../pages/register.page';
import SitePage from '../pages/site.page';



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

  it(`Editar nombre a formato correcto`, async () => {
    let nombre = datosEdicion.nombreCor;
    await ProfilePage.editarNombre(nombre);  
    await browser.pause(9000); 
  });

  it('Edita nombre y lo deja vacío', async () => {    
    let nombre = datosEdicion.nombreVacio;
    await ProfilePage.editarNombre(nombre); 
    await browser.pause(9000);
  });
  

  it('Edita nombre a formato incorrecto', async () => {    
    let nombre = datosEdicion.nombreInc;
    await ProfilePage.editarNombre(nombre);  
    await browser.pause(9000);
  });

  it('Restaura nombre', async () => {    
    let nombre = datosUsuario.apellido;
    await ProfilePage.editarNombre(nombre);  
    await browser.pause(9000);
  });
    
  
});