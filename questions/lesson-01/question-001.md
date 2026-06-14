# L01-Q001

**Difficulty:** Medium
**Domain:** General Security Concepts
**Objective:** 1.1 Compare and contrast various types of security controls
**Security+ Objective Mapping:** SY0-701 Objective 1.1 - Security control categories and control types

## Scenario
A regional clinic stores patient records in a cloud application. During a review, the security analyst finds that access reviews are documented quarterly, badge readers protect the records office, and endpoint detection alerts on suspicious activity. However, there is no documented policy assigning record owners or approval authority for access changes. Which control gap should be addressed first?

## Choices
A. Add another detective technical control to the endpoints
B. Establish a managerial control defining ownership and approval responsibilities
C. Replace badge readers with biometric locks at the records office
D. Increase logging retention for the cloud application

## Correct Answer
B

## Detailed Explanation
The immediate gap is governance: no one is formally accountable for approving or owning access. A managerial control, such as a policy or standard defining data ownership and approval authority, enables consistent access decisions and supports later technical enforcement.

## Why the Incorrect Options Are Wrong
- A: Endpoint detection does not solve the missing authority for access decisions.
- C: Physical controls protect a location, but the problem involves ownership and approval of cloud application access.
- D: Longer logs may help investigations, but they do not determine who should approve access.

## Exam Tip
When the scenario lacks ownership, policy, or authority, look for a managerial control before adding more technology.
