# LeetCode Playground

This is a project for practicing LeetCode problems.

## Purpose

The purpose of this project is to provide a simple environment where you can quickly create files for new LeetCode problems, write solutions, and run tests.

## How to Use

### Generate a New Problem Template

You can use the `generate-problem.js` script to generate a new problem template.

```bash
node generate-problem.js "Your Problem Name"
```

For example:

```bash
node generate-problem.js "Two Sum"
```

This command will create a directory named `two-sum` containing:

- `solution.js`: You can write your solution here.
- `test.js`: You can write your test cases here.
- `README.md`: You can write the problem description and your approach here.

### Running Tests

This project uses Jest for testing. You can run the following command to test your solution:

```bash
pnpm test <file-path>
```

For example, to test the `two-sum` problem, you can run:

```bash
pnpm test two-sum/test.js
```
