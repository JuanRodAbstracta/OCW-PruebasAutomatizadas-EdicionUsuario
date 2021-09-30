import BasePage from "./base.page";


class RegisterPage extends BasePage {

  //Elementos Web
        
  get nombre(){ return $('#first_name'); }
  get apellido(){ return $('#last_name'); } 
  get username(){ return $('#username'); }
  get email(){ return $('#email'); }
  get password(){ return $('#password'); }
  get conPassword(){ return $('#confirm_password'); }
  get privacyPolicy(){ return $('//span[text()="I agree with the "]'); }
  get createAccount(){ return $('//*[text()="Create account"]'); }
  get createNewAccount(){ return $('//*[text()="Create new account"]'); }
  get emailUsuario(){ return $('#session_email');} 
  get nombreUsuario(){ return $('#session_first_name');}
  get apellidoUsuario(){ return $('#session_last_name');}
    
      


  //-------------------------------------------------------------------------------------------------------//

  
  async registrarse(nombre, apellido, usuario, mail, contrasenia, confContrasenia) {  
    await this.clickearElemento(await this.createNewAccount);
    await this.vaciarCampoYEnviarTexto(await this.nombre, nombre);
    await this.vaciarCampoYEnviarTexto(await this.apellido, apellido);
    await this.vaciarCampoYEnviarTexto(await this.username, usuario);
    await this.vaciarCampoYEnviarTexto(await this.email, mail);
    await this.vaciarCampoYEnviarTexto(await this.password, contrasenia);
    await this.vaciarCampoYEnviarTexto(await this.conPassword, confContrasenia);
    await this.privacyPolicy.click(); 
    await this.createAccount.click();              
  }


  async editarEmail(email) {  
    await this.vaciarCampoYEnviarTexto(await this.emailUsuario, email);       
  }

  async editarNombre(nombre) {  
    await this.vaciarCampoYEnviarTexto(await this.nombreUsuario, nombre);       
  }

  async editarApellido(apellido) {  
    await this.vaciarCampoYEnviarTexto(await this.apellidoUsuario, apellido);       
  }

  

       
}
export default new RegisterPage();