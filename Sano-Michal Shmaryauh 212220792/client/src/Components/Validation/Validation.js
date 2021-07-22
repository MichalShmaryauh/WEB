/**
 THIS COMPONENT CONTAIN FUNCTION THAT CHECK THE VALIDATION OF INPUT OF FORM
 */

export function ValidatePassword(Password){
    var validFormat = RegExp(/^[0-9A-Za-z]+$/)
    var ok = validFormat.exec(Password)
    if (!ok) {
        return "Password  is invalid!";
    }
    //VALIDETE CORECT INPUT
    if(Password.length<7||Password.length>10){
        return "Password long not in range!";
    }
    return "";
}

export function ValidateName(Name){
    //CHECK IF THE NAME LENGE SMALLER THAN 2 
    //(length FUNCTION COUNTER THE NULL VALUE SO I CHECK IF <= AND NOT <)
    //CHECK IF THE INPUT IS IN RANGE OF LETTERS IN EBROW OF ENGLISH
    var validFormat = RegExp(/^[A-za-zא-ת ]+$/)
    var ok = validFormat.exec(Name)
    if (!ok) {
        return "Not valid name!"
    }
    //VALIDETE CORECT INPUT
    if(Name.length<2){
        return "Too short name!"
    }
    return "";
}
export function ValidateMessage(Message){
    if(Message.length < 5){
        return "Too short message!";
    }
    return "";
}

export function ValidateEmail(Email){
    //CHECK IF THE INPUT IS SUTABLE TO EMAIL 
    var validFormat = RegExp(/^[0-9A-Za-z@._-]+$/)
    var ok = validFormat.exec(Email)
    if (!ok) {
        return "Email is not valid!"
    }
    //VALIDETE CORECT INPUT
    if(Email.length<6){
        return "Email too short!"
    }
    //CHECK IF IT CORECT EMAIL :-NOT CONTAIN THE @ IN AT FIRS OF AT END OF          
    //                          -NOT CONTAIN @ OR CONTAIN MORE THAN 2@ 
    //                          -NOT CONTAIN .
    //                          -AND NOT HAVE A CHAR BERWEEN THE . AND @
    const shtrudel=Email.indexOf('@')
    if(shtrudel===-1||shtrudel!==Email.lastIndexOf('@')||shtrudel===Email.length-1||shtrudel===0)
    {   
        return "Email is not valid ,check the @!"
    }
    const point=Email.indexOf('.',Email.indexOf('@'))
    if (point===-1||point===0||point===Email.length-1||point-shtrudel<2 )
    {   
        return "Email is not valid ,check the .!"
    }
    return "";
} 

export function ValidateTelepon(Telepon){
    //CHECK IF THE INPUT IS IS NUMBER OF TELEPON AND NOT JUST A NUMBER
    var validFormat = RegExp(/^0?(([23489]{1}\d{7})|[5]{1}\d{8})$/)
    var ok = validFormat.exec(Telepon)
    if (!ok) {
        return "Telepon is not valid!";
    }
    //VALIDETE CORECT INPUT
    if(Telepon.length<7||Telepon.length>10){
        return "Too Short Telepon!"
    }
    return ""
}





