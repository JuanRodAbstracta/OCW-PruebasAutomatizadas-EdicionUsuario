import BasePage from './base.page';

class HomePage extends BasePage {

    //Elementos Web
         
    get mensajeBienvenida(){ return $('.info-account'); }
    get orderHistDetails(){ return $('.icon-list-ol'); } 
    get creditSlips(){ return $('.Credit slips'); } 
    get myAdresses () { return $('.icon-building'); }   
    get personalInformation () { return $('.Information'); }  
    get myWishlist () { return $('.myaccount-link-list'); }
    get perfil () { return $('//span[text()="Profile"]'); }
    


   //-------------------------------------------------------------------------------------------------------//
 
   async entrarPerfil() {
    await this.clickearElemento(await this.perfil);        
}

}
export default new HomePage();