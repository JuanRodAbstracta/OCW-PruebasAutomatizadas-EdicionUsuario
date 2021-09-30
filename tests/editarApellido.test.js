import datosEdicion from '../datos/datosEdicion';
import datosUsuario from '../datos/datosUsuario';
import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';
import SitePage from '../pages/site.page';


describe('Edita email:', () => {

  it('Abre web y aprieta Login', async () => {
    browser.url('/');
    await SitePage.clickearElemento(await SitePage.logIn);
    await browser.pause(1700); 
  });

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

  
  it(`Editar apellido a formato correcto`, async () => {
    let apellido = datosEdicion.apellidoCor;
    await ProfilePage.editarApellido(apellido);  
    await browser.pause(9000); 
  });

  it('Edita Email y lo deja vacío', async () => {    
    let apellido = datosEdicion.apellidoVacio;
    await ProfilePage.editarApellido(apellido); 
    await browser.pause(9000);
  });
  

  it('Edita Email a formato incorrecto', async () => {    
    let apellido = datosEdicion.apellidoInc;
    await ProfilePage.editarApellido(apellido);  
    await browser.pause(9000);
  });

  it('Restaura apellido', async () => {    
    let apellido = datosUsuario.apellido;
    await ProfilePage.editarApellido(apellido);  
    await browser.pause(9000);
  });


  

    
});