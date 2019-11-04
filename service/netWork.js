export default function request(option){
  return new Promise((resolve,reject)=>{
    wx.request({
      url:option.url,
      data:option.data,
      success(res){
        resolve(res);
      },
      fail(err){
        reject(err);
      }
    })
  })
}