# Create New LeetCode Problem

This prompt scaffolds a new LeetCode problem in your workspace.

## User Input

Please provide the following information:

1.  **Problem Name:** The title of the LeetCode problem (e.g., "Two Sum").
2.  **Problem Description:** (Optional) A brief description of the problem.

## Action

1.  The `generate-problem.js` script will be called with the problem name to create the necessary files (`solution.js`, `test.js`, and `README.md`).

    ```bash
    node generate-problem.js "{{Problem Name}}"
    ```

2.  **If a description is provided by the user:**

    - The generated `README.md` inside the new problem's directory will be updated with the provided description.

3.  **If no description is provided:**
    - I will infer the problem description based on the problem name.
    - I will present the description to you for confirmation.
    - If you confirm, the `README.md` will be updated
