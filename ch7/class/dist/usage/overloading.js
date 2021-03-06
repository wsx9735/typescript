class SingleTypeChecker {
    constructor() { }
    typeCheck(value) {
        console.log(`${typeof value} : ${value}`);
    }
}
class UnionTypeChecker extends SingleTypeChecker {
    constructor() { super(); }
    typeCheck(value2) {
        if (typeof value2 === "number") {
            console.log("숫자 : ", value2);
        }
        else if (typeof value2 === "string") {
            console.log("문자열 : ", value2);
        }
        else {
            console.log("기타 : ", value2);
        }
    }
}
let unionTypeChecker = new UnionTypeChecker();
unionTypeChecker.typeCheck(123);
unionTypeChecker.typeCheck("happy");
