/// O(n) - сложность

function makeObjectDeepCopy (obj) {
    if(obj === null) return null;
    const clonedObj = Object.assign({}, obj);
    Object.keys(clonedObj).forEach((key) => (
        clonedObj[key] = typeof obj[key] === 'object' ? makeObjectDeepCopy(obj[key]) : obj[key]
    ));
    if(Array.isArray(obj)){
        clonedObj.length = obj.length;
        return Array.from(clonedObj);
    }
    return clonedObj;
    
};
