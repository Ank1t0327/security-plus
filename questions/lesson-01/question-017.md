# L01-Q017

**Difficulty:** Expert
**Domain:** Identity and Access Management
**Objective:** 4.6 Given a scenario, implement and maintain identity and access management
**Security+ Objective Mapping:** SY0-701 Objective 4.6 - Access reviews and group membership

## Scenario
A services company has many long-lived access groups, and quarterly access reviews are rarely completed. An audit finds several employees still have access to sensitive systems after changing roles. What is the best way to reduce this risk?

## Choices
A. Increase review frequency to monthly while keeping the same group structure
B. Implement role-based access control and automate group membership based on role changes
C. Remove all access groups and assign permissions individually
D. Require managers to sign an annual attestation for every access group

## Correct Answer
B

## Detailed Explanation
Automating group membership through RBAC based on role changes reduces stale access and improves accuracy. Frequent reviews help, but automation and role alignment are more effective for dynamic environments.

## Why the Incorrect Options Are Wrong
- A: Monthly reviews may still be manual and error-prone without better group management.
- C: Individual permissions scale poorly and increase the likelihood of mistakes.
- D: Annual attestations are too infrequent and do not prevent stale access after role changes.

## Exam Tip
If stale access results from role changes, prefer RBAC and automation over more frequent manual reviews.
