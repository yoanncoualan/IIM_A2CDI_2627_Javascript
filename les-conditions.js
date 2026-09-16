function get_msg(note){
    if(note < 5){
        return "Cours à revoir";
    }
    else if(note <= 10){
        return "Il vous manque des notions";
    }
    else if(note <= 14){
        return "Bon travail";
    }
    else if(note <= 20){
        return "Très bon travail";
    }
    else{
        return "Hors barème";
    }
}

console.log(get_msg(11));