import readline from "readline";

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
};

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the temperature in Celsius: ", function(tempInput){
    const temp  = parseFloat(tempInput);
    rl.question("Enter unit (C/F): ", function(unitInput){
        const unit = unitInput.trim().toUpperCase();
        let result;
        if (unit === "C") {     
            result = celsiusToFahrenheit(temp);
            console.log(`${temp}°C is equal to ${result.toFixed(2)}°F`);
        } else if (unit === "F") {
            result = fahrenheitToCelsius(temp);
            console.log(`${temp}°F is equal to ${result.toFixed(2)}°C`);
        } else {
            console.log("Invalid unit. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
        }
    rl.close();});
});


// โปรแกรมในไฟล์ my-example-program.js คือโปรแกรม "แปลงอุณหภูมิระหว่างเซลเซียสและฟาเรนไฮต์" โดยมีการรับค่าจากผู้ใช้ผ่านหน้า Terminal ครับ

// ผมขออธิบายการทำงานแบบละเอียดทีละขั้นตอน ดังนี้ครับ:

//   1. การนำเข้าเครื่องมือ (Import)
//    1 import readline from "readline";
//    * บรรทัดนี้เป็นการดึงโมดูล readline ของ Node.js มาใช้งาน เพื่อให้โปรแกรมสามารถ "อ่านสิ่งที่ผู้ใช้พิมพ์" เข้ามาจากคีย์บอร์ดได้

//   ---

//   2. ส่วนคำนวณ (Functions)
//   โปรแกรมมีการสร้างฟังก์ชันไว้ 2 อย่างเพื่อแยกส่วนตรรกะคณิตศาสตร์ออกจากส่วนรับค่า:
//    * celsiusToFahrenheit(celsius): ใช้สูตร (C * 9/5) + 32 เพื่อเปลี่ยนจากเซลเซียสเป็นฟาเรนไฮต์
//    * fahrenheitToCelsius(fahrenheit): ใช้สูตร (F - 32) * 5/9 เพื่อเปลี่ยนจากฟาเรนไฮต์เป็นเซลเซียส

//   ---

//   3. การสร้างช่องทางการรับข้อมูล (Interface)
//    1 const rl = readline.createInterface({
//    2     input: process.stdin,
//    3     output: process.stdout
//    4 })
//    * ขั้นตอนนี้คือการตั้งค่าช่องทาง โดยกำหนดให้ input มาจากคีย์บอร์ด (stdin) และ output แสดงผลที่หน้าจอ (stdout)

//   ---

//   4. การถามคำถามและรับข้อมูล (Input Flow)
//   โปรแกรมใช้วิธีการถามคำถามแบบซ้อนกัน (Nested Callback) ดังนี้:

//   ขั้นตอนที่ 4.1: ถามอุณหภูมิ
//    1 rl.question("Enter the temperature in Celsius: ", function(tempInput){
//    2     const temp = parseFloat(tempInput); // แปลงข้อความที่พิมพ์มาให้เป็นตัวเลขทศนิยม
//    3     ...
//    4 });
//    * โปรแกรมจะหยุดรอให้ผู้ใช้พิมพ์ตัวเลข เมื่อพิมพ์เสร็จจะเก็บค่าไว้ในตัวแปร temp (ใช้ parseFloat เพื่อให้คำนวณทศนิยมได้)

//   ขั้นตอนที่ 4.2: ถามหน่วยที่ต้องการ

//    1 rl.question("Enter unit (C/F): ", function(unitInput){
//    2     const unit = unitInput.trim().toUpperCase(); // ตัดช่องว่างออกและเปลี่ยนเป็นตัวพิมพ์ใหญ่
//    3     ...
//    4 });
//    * ถามต่อว่าค่าที่ใส่มาเมื่อกี้คือหน่วยอะไร (C หรือ F) และใช้ .toUpperCase() เพื่อป้องกันกรณีผู้ใช้พิมพ์ตัวพิมพ์เล็ก (เช่น พิมพ์ 'c' จะกลายเป็น 'C' ให้โดยอัตโนมัติ)

//   ---

//   5. การตัดสินใจและแสดงผล (Logic & Output)
//   เมื่อได้ทั้ง "ตัวเลข" และ "หน่วย" แล้ว โปรแกรมจะเข้าสู่เงื่อนไข if...else:

//    * ถ้าเลือก "C": จะเรียกใช้ฟังก์ชันแปลงเป็นฟาเรนไฮต์
//    * ถ้าเลือก "F": จะเรียกใช้ฟังก์ชันแปลงเป็นเซลเซียส
//    * การแสดงผล: ใช้ .toFixed(2) เพื่อจำกัดให้แสดงผลลัพธ์เป็น ทศนิยม 2 ตำแหน่ง เพื่อความสวยงาม

//   ---

//   6. การปิดโปรแกรม
//    1 rl.close();
//    * เมื่อทำงานเสร็จสิ้น ต้องสั่งปิด interface เพื่อคืนทรัพยากรให้ระบบและจบการทำงานของโปรแกรมครับ

//   สรุปหลักการเขียน:
//    1. Modular: แยกส่วนคำนวณ (Function) ออกจากส่วนแสดงผล ทำให้โค้ดอ่านง่าย
//    2. Input Validation: มีการแปลงประเภทข้อมูล (parseFloat) และปรับรูปแบบตัวอักษร (toUpperCase) เพื่อลดข้อผิดพลาด
//    3. Asynchronous: การใช้ Callback function ใน rl.question ทำให้โปรแกรมรู้ว่าต้องรอผู้ใช้พิมพ์ก่อนถึงจะทำขั้นต่อไปครับ