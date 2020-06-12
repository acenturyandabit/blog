let fs = require("fs");
let { execSync } = require("child_process");

fs.readdir("entries", (e, files) => {
    files = files.filter(i => i.match(/.+?\.md$/));
    console.log(files);
    files = files.map(i => `"entries/${i}",`);
    let lines = String(fs.readFileSync("template.html"));
    lines = lines.split(/\r?\n/g);
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/auto-list files here/)) {
            files.unshift(i + 1, 0);
            lines.splice.apply(lines, files);
        }
    }
    lines = lines.join("\n");
    fs.writeFileSync("index.html", lines);
    execSync("git add .")
    execSync("git commit -m 'auto-blog-update'");
    execSync("git push");
})