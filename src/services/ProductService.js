import axios from "axios";

export class ProductService {

    // baseUrl = "http://localhost:8080/api/products/";
    uriRailway = "https://backendmongodb-production.up.railway.app/api/products/";

    create(product){
        return axios.post(this.uriRailway+"product/", product).then(res => res.data);
    }

    readAll(){
        return axios.get(this.uriRailway).then(res => res.data);
    }

    update(product){
        return axios.put(this.uriRailway+"product/"+product._id, product).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.uriRailway+"product/"+id).then(res => res.data);
    }
}