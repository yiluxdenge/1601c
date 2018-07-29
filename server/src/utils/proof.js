import {getAesHex, getDeAesUtf} from './crypto';
let e = 5;
let sTime;
let eTime;
export default (req,res,next)=>{
  const {token}=req.headers;
  //首次请求非登录接口
  if(!token&& req.url!=='/api/checkUser'){
        res.send({
            code:0,
            msg:"无权限访问"
        })
  }
  else if(!token&&req.url=='/api/checkUser'){
      sTime = new Date().getTime/1000;
        next();
    }
    else if(token && req.url!=='/api/checkUser'){
        eTime = new Date().getTime()
        const user=getDeAesUtf(token,'1601B');
        console.log(!user);
        if(!user){
            res.send({
                code:0,
                msg:'无权限访问'
            })
        }else if((eTime-sTime)>e){
            res.send({
                code:0,
                msg:'登录超时重新登录'
            })
        }
        else{
            next()
        }
     
    }
    else if(token && req.url=="/api/checkUser"){
        const user = getDeAesUtf(token,'1601B')
        if(!user ||(eTime-sTime)>e){
            next()
        }
        else{
            console.log(11111);
            res.send({
                code:1,
                msg:"登录成功--->token"
            })
        }
    }
}