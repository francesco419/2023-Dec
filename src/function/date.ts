let today = new Date();

let year = today.getFullYear().toString().slice(2); // 년도 마지막2자
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜

export const now = `${year}/${month}/${date}`;
