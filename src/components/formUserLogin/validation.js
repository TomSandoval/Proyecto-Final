export default function Validation (input,setErrors,errors,e) {
    let isValid = true;
    switch (e.target.name) {
        case 'nickName':
            if(!input.nickName)setErrors({...errors, nickName:'Campo Vacio'});
            else{
                if(isValid){
                    setErrors({...errors, nickName:''});
                }
            }
        break;
        case 'password':
            if(!input.password)setErrors({...errors, password:'Campo Vacio'});
            else{
                if(isValid){
                    setErrors({...errors, password:''});
                }
            }
        break;
    
        default:
        break;
    }
}