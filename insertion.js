for ( let i = 1; i < Array.length; i++){
    let elem = array[i];
    j = i -1;
    while(j >=0 & array[j] >elem){
        array[j+1] = array[j]
        j = j -1;
    }
    array[j + 1] = key;
    return array
}