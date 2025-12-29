// index.js

const fs = require("fs");

const filePath = "./sample.txt";

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("ファイル読み込みエラー:", err);
        return;
    }
    console.log("ファイル内容:");
    console.log(data);
});
