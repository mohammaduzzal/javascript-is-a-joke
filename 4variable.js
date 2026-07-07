// What are var, let, and const?
// var, let, এবং const হলো JavaScript-এ Variable Declare করার Keyword।
// Variable মানে এমন একটি Container যেখানে আমরা Data Store করি।

// | Feature         | var      | let   | const |
// | --------------- | -------- | ----- | ----- |
// | Scope           | Function | Block | Block |
// | Hoisted         | ✅        | ✅     | ✅     |
// | TDZ             | ❌        | ✅     | ✅     |
// | Re-declare      | ✅        | ❌     | ❌     |
// | Re-assign       | ✅        | ✅     | ❌     |
// | Must Initialize | ❌        | ❌     | ✅     |

// 🧠 Quick Revision
// ✅ var = পুরনো, Function Scope।
// ✅ let = Block Scope, Re-assign করা যায়।
// ✅ const = Block Scope, Re-assign করা যায় না।
// ✅ তিনটিই Hoist হয়।
// ✅ let ও const TDZ-এ থাকে।
// ✅ Modern JavaScript-এ const Default Choice।

// const country = "Bangladesh";
// country = "Japan";
// console.log(country); //typeError
