let fs = require("fs");
let { execSync } = require("child_process");

let filesList = fs.readdirSync("entries_md");
filesList = filesList.filter(i => i.match(/.+?\.md$/));
//console.log(files);
let files = filesList.map(i => `"entries_md/${i}",`);
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

let templateLines = String(fs.readFileSync("per_page_template.html"));
templateLines = templateLines.split(/\r?\n/g);
let insertionLine = 0;
for (let i = 0; i < templateLines.length; i++) {
    if (templateLines[i].match(/insert markdown content here/)) {
        insertionLine = i;
    }
}
fs.rmdirSync("entries", { recursive: true });
fs.mkdirSync("entries");
for (let f of filesList) {
    let copy = JSON.parse(JSON.stringify(templateLines));
    let selectedFile = String(fs.readFileSync("entries_md/" + f)).split(/\r?\n/g);
    selectedFile.unshift(insertionLine + 1, 0);
    copy.splice.apply(copy, selectedFile);
    fs.mkdirSync(`entries/${f.slice(0, f.length - 3)}`);
    fs.writeFileSync(`entries/${f.slice(0, f.length - 3)}/index.html`, copy.join("\n"));
}
execSync("git add .")
execSync("git commit -m 'auto-blog-update'");
execSync("git push");
