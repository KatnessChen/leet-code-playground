// Usage: node generate-problem.js <problem-name>
const fs = require("fs");
const path = require("path");

function toFileName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

function toCamelCase(name) {
  return name.replace(/-(\w)/g, (_, c) => c.toUpperCase());
}

function createTemplateFiles(problemName) {
  const base = toFileName(problemName);
  const dir = path.join(process.cwd(), base);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  } else {
    console.log("Directory already exists, skipping creation.");
    return;
  }
  const jsFile = path.join(dir, "solution.js");
  const testFile = path.join(dir, "test.js");
  const mdFile = path.join(dir, "README.md");
  const functionName = toCamelCase(base);

  fs.writeFileSync(
    jsFile,
    `// ${problemName}\n// Write your solution here\nfunction ${functionName}(/* parameters */) {\n  // ...\n}\n\nmodule.exports = ${functionName};\n`
  );

  fs.writeFileSync(
    testFile,
    `const fn = require('./solution');\n\ntest('${problemName}', () => {\n  // Example test\n  // expect(fn(/* input */)).toBe(/* expected output */);\n});\n`
  );

  fs.writeFileSync(
    mdFile,
    `# ${problemName}\n\n## Description\n\n(Please write the problem description here)\n\n## Approach\n\n(Please write your approach here)\n`
  );

  console.log(`Created: ${jsFile}, ${testFile}, ${mdFile}`);
}

const [, , problemName] = process.argv;
if (!problemName) {
  console.log(
    "Please provide a problem name, e.g.: node generate-problem.js two-sum"
  );
  process.exit(1);
}
createTemplateFiles(problemName);
