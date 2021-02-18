import Header from '../components/header.js';
import Contact from "../components/contact.js";
class contact{
   render(){
      return  `
      ${Header.render()}
      ${Contact.render()}
      `
    }
}
export default contact;