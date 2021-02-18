import CategoriApi from '../api/CategoriApi.js';
const cate ={
    render(){
        const {data:categories}=CategoryApi.getAll();
      console.log('xin chào');
        return /*html*/`
      <ul>
          <li>oke</li>
          <li>oke</li>
      </ul>
        `
    }

}
export default cate;