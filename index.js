function receivesAFunction(chai){
    return chai();
}

function returnsANamedFunction(){
    return function fn(){

    }
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}
