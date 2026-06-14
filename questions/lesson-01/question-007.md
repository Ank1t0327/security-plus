# L01-Q007

**Difficulty:** Hard
**Domain:** Identity and Access Management
**Objective:** 4.6 Given a scenario, implement and maintain identity and access management
**Security+ Objective Mapping:** SY0-701 Objective 4.6 - Authentication, authorization, and accounting

## Scenario
After a contractor leaves, their VPN account is disabled, but the security team finds API calls made with an old service token tied to the contractor's project. Which IAM process failed most directly?

## Choices
A. Authentication, because the VPN password was no longer valid
B. Authorization, because the token retained access after the business need ended
C. Accounting, because the API calls were logged
D. Federation, because the contractor used an external identity provider

## Correct Answer
B

## Detailed Explanation
The token still had permission after the contractor's need ended. This is an authorization lifecycle failure: access was not revoked for a related credential or service token when the business relationship ended.

## Why the Incorrect Options Are Wrong
- A: The VPN account was disabled, so the main failure was not VPN authentication.
- C: Logging worked well enough to reveal the API calls; accounting is not the failed process.
- D: The scenario does not indicate a federation problem.

## Exam Tip
Offboarding must include human accounts, service accounts, API keys, tokens, groups, and delegated access.
