let abc: string;

abc = "hello typescript world";

export function randomStr(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }
    return randomString;
}

export function sum(a: number, b: number): number {
    return a+b;
}

console.log("Hi, ", abc);
console.log("Hi, process.env.SECRET_VALUE = ", process.env.SECRET_VALUE);
console.log("Random String =  ", randomStr());
console.log("sum(1,2) =  ", sum(1,2));