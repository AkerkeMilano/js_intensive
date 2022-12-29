Array.prototype.myFilter = function(callbackFn, thisArg) {
    let context = thisArg ?? this;
    let callback = callbackFn.bind(context);
    let resultArr = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            resultArr.push(this[i]);
        }
    } return resultArr;
};
