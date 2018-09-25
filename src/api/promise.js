
function apicloudAjax(url){
return new Promise((resolve,reject)=>{
    mui.ajax( url,{
        type: 'get',
       datatype:'json',
    success: function(ret) {
        if (ret) {
            resolve(ret);
            // api.alert({ msg: JSON.stringify(ret) });
        } 
    }});
})
}
export  default apicloudAjax;