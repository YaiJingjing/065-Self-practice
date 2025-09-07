//สร้าง class ชื่อ book ที่มีคุณสมบัติดังนี้:
//title: ชื่อหนังสือ (เป็น String) 
//author: ชื่อผู้เขียน (เป็น String)
//pages: จำนวนหน้า (เป็น Number)
//isRead: สถานะว่าอ่านจบแล้วหรือยัง (เป็น Boolean) เช่น false
//เพิ่ม method ชื่อ getSummary ให้กับ Object book โดยเมื่อเรียกใช้แล้วจะคืนค่าเป็นข้อความสรุปข้อมูลหนังสือ เช่น "The Hitchhiker's Guide to the Galaxy by Douglas Adams, 224 pages. Not read yet." (ให้ใช้ this ในการเข้าถึง property ต่างๆ)
//แสดงผล (log) Object book และผลลัพธ์จาก method getSummary
//เปลี่ยนค่า isRead เป็น true และเรียกใช้ getSummary อีกครั้งเพื่อดูผลลัพธ์ที่เปลี่ยนแปลง crโจทย์by gemini
class book {
    constructor(title,author,pages,isRead){
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
        if (typeof title !== "string"){
            throw TypeError("not a string")
        }
        if (typeof author !== "string"){
            throw TypeError("not a string")
        }
        if(typeof pages !== "number"){
            throw TypeError("not a number")
        }
        if(typeof isRead !== "boolean"){
            throw TypeError("not boolean")
        }
    }
    getSummary(){
        if(this.isRead === true){
            return `Book: ${this.title} by ${this.author} is read.`
        }
       return `Book: ${this.title} by ${this.author} is not read.`;
    }
}

try {
    const a = new book(
    "dragonball super","akira toriyama",255,true
)

    console.log(a.getSummary())
} catch (error) {
    console.log("error :" + error.message)
}
try {
const b = new book(
    "dragonball gt","akira toriyama",255,false
)
    console.log(b.getSummary())
} catch (error) {
    console.log("error :" + error.message)
}
try {
const c = new book(
    "dragonball daima","akira toriyama","255",false
)
    console.log(c.getSummary())
} catch (error) {
    console.log("error :" + error.message)
}
try {
const d = new book(
    "dragonball z","akira toriyama",255,"14"
)
    console.log(d.getSummary())
} catch (error) {
    console.log("error :" + error.message)
}