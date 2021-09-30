import datosUsuario from "../datos/datosUsuario";
import BasePage from "./base.page";
import SitePage from "./site.page";






class LoginPage extends BasePage {

    //Elementos Web
         
    get username(){ return $('#username'); }
    get passwd(){ return $('#password'); } 
    get botonSignIn(){ return $('[type=submit]'); } 
    get createNewAccount(){ return $('//*[text()="Create new account"]'); }
       
       


   //-------------------------------------------------------------------------------------------------------//
 
   /**
   * Llena datos con .datos para registrarse
   * 
   */
    
   
   async loguearse(user, pass) {  
        await SitePage.vaciarCampoYEnviarTexto(await this.username, user);
        await SitePage.vaciarCampoYEnviarTexto(await this.passwd, pass);
        await this.clickearElemento(await this.botonSignIn);        
    }

    async logPerfilPruebas() {  
        await SitePage.vaciarCampoYEnviarTexto(await this.username, datosUsuario.usuario);
        await SitePage.vaciarCampoYEnviarTexto(await this.passwd, datosUsuario.contrasenia);
        await this.clickearElemento(await this.botonSignIn);        
    }

    

}
export default new LoginPage();