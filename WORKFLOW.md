\# Box Office Sync Workflow Documentation



\## Question 1: Code Walkthrough

\- \*\*Base Rounding\*\*: Added in Clone B during Task 2 (`tickets.js`) to round `quantity \* basePrice` to whole numbers instead of truncating.

\- \*\*10% Group Discount\*\*: Added in Clone A during Task 1 (`tickets.js`) to apply a 0.90 multiplier when `quantity >= 5`.

\- \*\*50% VIP Surcharge\*\*: Added in Clone C during Task 4 (`tickets.js`) to apply a 1.50 multiplier when `seatingType === 'premium'`.

\- \*\*$10 Flat Discount\*\*: Added in Clone A during Task 6 (`tickets.js`) to subtract 10 from the total ticket price.



\## Question 2: Two-Way vs. Three-Way Conflicts

Task 3 was a two-way conflict between Clone A and Clone B, requiring resolution between rounding and the group discount. Task 5 was a three-way conflict where Clone C's changes were merged on top of the already-merged Clone A and Clone B history. The three-way conflict was harder because it required verifying that all three distinct business logic rules (rounding, group discount, and VIP surcharge) remained intact in the correct sequence without overwriting any prior fixes.



\## Question 3: Ripple Effect of Flat Discount

The flat $10 discount modified the overall formula in `calculateTicketPrice`, which reduced calculated totals across all test cases. Because existing tests for group discount and VIP surcharge relied on previous expected output values, applying a flat discount broke those tests even though their specific logic wasn't directly changed. This shows that shared function modifications affect all dependent tests, requiring test suites to be updated to reflect total system behavior.



\## Question 4: Process Prevention

A strict branch integration and sync policy—such as requiring developers to run `git pull --rebase origin feature/group-pricing` before making changes, keeping feature branches short-lived, or using GitHub Pull Requests with continuous integration—would have prevented all three rejected pushes.



\---



\## Screenshot Evidence



\### Task 1: Group Discount Push

!\[Task 1](screenshots/task1.png)



\### Task 2: Clone B Push Rejection

!\[Task 2](screenshots/task%202.png)



\### Task 3: Task 3 Merge Conflict Resolution

!\[Task 3](screenshots/task%203.png)



\### Task 4: Clone C Push Rejection

!\[Task 4](screenshots/task%204.png)



\### Task 5: Three-Way Merge Conflict Resolution

!\[Task 5](screenshots/task%205.png)



\### Task 6: Flat Discount Rebase Resolution

!\[Task 6](screenshots/task%206.png)



\### Task 7: Main Merge and Release Tagging

!\[Task 7](screenshots/task%207.png)

