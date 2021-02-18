import abouts from "../components/about.js";
import Header from '../components/header.js';
import footer from '../components/footer.js';
class about { 
    render() {
        return `
        ${Header.render()}
            ${abouts.render()}
            ${footer.render()}
        `
    }
}
export default about;