import BasePage from './base.page';

class SitePage extends BasePage {

  //Elementos Web

  get dashboard(){ return $('//*[text()="Dashboard"]'); }
  get documentation(){ return $('//*[text()="Documentation"]'); } 
  get blog(){ return $('//*[text()="Blog"]'); } 
  get contatUs () { return $('//*[text()="Contact Us"]'); }   
  get logIn (){ return $('//*[text()="Login"]'); }
  get logOut () { return $('//*[text()="Logout"]'); }  
  get earlyAcces () { return $('//*[text()="Request early access"]'); }



  //-------------------------------------------------------------------------------------------------------//
 
   
}
export default new SitePage();