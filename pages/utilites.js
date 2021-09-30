import datosEdicion from "../datos/datosEdicion";

class Utilites {

  
  async randomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  
  async randomUser(num) {
    let nombre = await this.randomString(num);
    let apellido = await this.randomString(num);
    let usuario = await this.randomString(num);
    let email = await this.randomString(num) + '@' + await this.randomString(num);
    return {
      nombre,
      apellido,
      usuario,
      email,
      contrasenia: 'Oculow123',
      confContrasenia: 'Oculow123',
  
    }
  };


  async usuario(){
    let nombre = await datosEdicion.nombre();
    let apellido = await datosEdicion.apellido();
    let usuario= await datosEdicion.usuario();
    let email = await datosEdicion.email();
    let contrasenia = await datosEdicion.contrasenia();
    let confContrasenia = await datosEdicion.contrasenia();

    return {
      nombre ,
      apellido,
      usuario ,
      email,
      contrasenia,
      confContrasenia,
  
    }
  };
   
}
export default new Utilites();

