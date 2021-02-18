
import Header from '../components/header.js';
import footer from '../components/footer.js';
class blog { 
    render() {
        return `
        ${Header.render()}
        <h2> Đây là trang blog</h2>
        ${footer.render()}
        `
    }
}
export default blog;