import request from "./netWork.js"


export {get_listData};

function get_listData(page){
  return request({
          url:"http://job.dongdongidea.com/index/Position/index",
          data:{
            pageno:page
          }
  })
}