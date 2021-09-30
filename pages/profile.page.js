import datosUsuario from "../datos/datosUsuario";
import BasePage from "./base.page";

class ProfilePage extends BasePage {

  //Elementos Web
        
 
  get emailUsuario(){ return $('#session_email');} 
  get nombreUsuario(){ return $('#session_first_name');}
  get apellidoUsuario(){ return $('#session_last_name');}
  get btnSalvarCambios(){ return $('#btn_basic_info_save_changes');}
  get confContrasenia(){ return $('.form_change_personal_information > div > input');} 
  get btnSalvarCambios2(){ return $('.form_change_personal_information > button');}
  get nuevaContrasenia(){ return $('#password');}
  get confNuevaContrasenia(){ return $('#confirm_password');}
  get btnChangePassword(){ return $('#btn_change_password');}
  get confContrasenia2(){ return $('form > div > [type="password"]')}
  get btnSalvarCambios3(){ return $('.sweet-modal-content > form >  [type="submit"]')}
  

  //-------------------------------------------------------------------------------------------------------//

  
  async editarEmail(email) {  
    await this.vaciarCampoYEnviarTexto(await this.emailUsuario, email);
    await this.clickearElemento(await this.btnSalvarCambios);    
    await this.vaciarCampoYEnviarTexto(await this.confContrasenia, datosUsuario.contrasenia);
    await this.clickearElemento(await this.btnSalvarCambios2);
    await browser.pause(3000);
    
  }

  async editarNombre(nombre) {  
    await this.vaciarCampoYEnviarTexto(await this.nombreUsuario, nombre);
    await this.clickearElemento(await this.btnSalvarCambios);    
    await this.vaciarCampoYEnviarTexto(await this.confContrasenia, datosUsuario.contrasenia);
    await this.clickearElemento(await this.btnSalvarCambios2);
    await browser.pause(3000);       
  }

  async editarApellido(apellido) {  
    await this.vaciarCampoYEnviarTexto(await this.apellidoUsuario, apellido);
    await this.clickearElemento(await this.btnSalvarCambios);    
    await this.vaciarCampoYEnviarTexto(await this.confContrasenia, datosUsuario.contrasenia);
    await this.clickearElemento(await this.btnSalvarCambios2);
    await browser.pause(3000);       
  }

  async editarContrasenia(contrasenia, confContrasenia, pass) {  
    await this.vaciarCampoYEnviarTexto(await this.nuevaContrasenia, contrasenia);
    await this.vaciarCampoYEnviarTexto(await this.confNuevaContrasenia, confContrasenia);
    await this.clickearElemento(await this.btnChangePassword);    
    await this.vaciarCampoYEnviarTexto(await this.confContrasenia2, pass);
    await this.clickearElemento(await this.btnSalvarCambios3);
    await browser.pause(3000);       
  }

  

       
}
export default new ProfilePage();


