const Base_url='http://localhost:8000/api';
module.exports={
    register:Base_url+'/users',
    login:Base_url+'/users/login',
    imageUpload:Base_url+'/users/photo-upload',
    getcode:Base_url+'/users/get-code',
    getProfile:Base_url+'/users/get-profile',
    userList:Base_url+'/users/list'
}