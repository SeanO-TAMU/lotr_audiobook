
export function isAlphaNumeric(char) {
    return /^[a-zA-Z0-9]$/.test(char);
  }

export function isNumber(char){
    return /^[0-9]$/.test(char);
}

export function titleText(title){
    var capital = true;
    var newTitle = '';
    for(var i = 0; i < title.length; i++){
        if(isAlphaNumeric(title.at(i))){
            if(capital){
                newTitle += title.at(i).toUpperCase();
                capital = false;
            }
            else{
                newTitle += title.at(i).toLowerCase(); //can also just do title[i]
            }
        }
        else if(title.at(i) == '_'){
            newTitle += ' '
            capital = true;
        }
        else if (title.at(i) == '-'){
            newTitle += '-';
            capital = true;
        }
        else if (title.at(i) == '#'){
            newTitle += '#';
        }
        else if (title.at(i) == '&'){
            newTitle += '&';
        }
    }

    return newTitle;
}

export function chapText(title){
    var capital = true;
    var start = true;
    var newTitle = '';
    for(var i = 0; i < title.length; i++){
        if(isNumber(title.at(i))){
            if(title.at(i) == '0' && start){
                continue;
            }
            else{
                newTitle += title.at(i)
            }
        }
        else if(isAlphaNumeric(title.at(i))){
            if(capital){
                newTitle += title.at(i).toUpperCase();
                capital = false;
            }
            else{
                newTitle += title.at(i).toLowerCase(); //can also just do title[i]
            }
        }
        else if(title.at(i) == '_'){
            newTitle += ' '
            capital = true;
        }
        else if(title.at(i) == '.'){
            return newTitle;
        }
        else if (title.at(i) == '-'){
            newTitle += '-';
        }
        else if (title.at(i) == '#'){
            newTitle += '#';
        }
        else if (title.at(i) == '&'){
            newTitle += '&';
        }
    }

    return newTitle;
}