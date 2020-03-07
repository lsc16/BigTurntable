import axios from 'axios';

export default function request (config){
  window.console.log('测试数据:', config);
  const instace=axios.create({
    baseURL:'http://192.168.199.132:8080/',
    timeout:5000,
  });
  return instace(config);
}
