import  axiosClient  from "./axiosClient";

const CategoryApi = {
  getAll() {
    const url = '/categories';
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
};

export default CategoryApi;
