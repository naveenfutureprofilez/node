import Api from "./api";
class Common { 
    signup(e, fdata){
        return new Promise((resolve, reject)=>{
            Api.post(e, fdata).then((resp)=>{ 
                resolve(resp.data);
            }).catch((err)=>{ 
                reject(err)
            });
        });
    }
    login(e, fdata){
        return new Promise((resolve, reject)=>{
            Api.post(e, fdata).then((resp)=>{ 
                resolve(resp.data);
            }).catch((err)=>{ 
                reject(err)
            });
        });
    }
}
export default new Common;