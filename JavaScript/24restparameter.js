//      speard = expands an array into sep  erate elements
//      rest = bundles seperate elements into an array

function foods(...fooods){
    console.log(fooods);
}

const food = "pizza";
const food1 = "hambur";
const food2 = "fruit";
const food3 = "hôtdog";
const food4 = "sushi";
foods(food, food1,food2,food3,food4);
function sum(...numbers){
    let bill = 0;
    for (const num of numbers){
        bill += num;
    }
    console.log(bill);
}
sum(3,65,64,7); 



const name = ["bill", "son", "cao"];
console.log(name.join(" "));


const user = {
    id: 1,
    username: "billnguyen",
    password: "123", // Cần giấu cái này
    role: "Admin",
    email: "bill@gmail.com"
};

// Cú pháp Destructuring kết hợp Rest
// Ý nghĩa: "Lấy cái password ra riêng, TẤT CẢ NHỮNG CÁI CÒN LẠI gom vào biến otherInfo"
const { password, ...otherInfo } = user;

console.log(password);  // "123"
console.log(otherInfo); 
// Output: { id: 1, username: "billnguyen", role: "Admin", email: "..." }
// (Mất tiêu cái password rồi -> An toàn)