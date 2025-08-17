let Car1 ={
    productnumber: 12345678,
    name : "ford"
}
let Car2 = {
    productnumber: 12345678,
    name : "ford"
}
function shallowEquality(object1,object2){
    const id1 = Object.keys(object1)
    const id2 = Object.keys(object2)
    if (id1.lenght !== id2.lenght){//โดยเริ่มเช็คจากตรงนี้ก่อนถ้าlenghtในkeyไม่เท่ากันก็จะเป็นเท็จทันทีแต่ถ้าเถ้ากันก็จะเข้าloop
        return false
    }
    for (key of id1){
        if(object1[key] !== object2[key]){//หลังจากloopแล้วเเล้วตัวkeyไม่เท่ากันก็จะเป็นfalseเหมือนกันแต่ถ้าเท่ากันก็จะเป็นtrue
            return false
        }

    }
    return true
}
console.log("shallowEquality:" + shallowEquality(Car1,Car2))

//สรุปshallowEqualityคือการเช็คkeyโดยทุกอย่างในkeyจะต้องเท่ากันแต่เป็นการเช็คแค่ระดับพื้นๆเท่านั้น