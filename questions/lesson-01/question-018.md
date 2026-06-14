# L01-Q018

**Difficulty:** Medium
**Domain:** Security Architecture
**Objective:** 4.6 Given a scenario, implement and maintain identity and access management
**Security+ Objective Mapping:** SY0-701 Objective 4.6 - Federated identity and single sign-on

## Scenario
A multinational enterprise uses separate usernames and passwords for each regional cloud service. Users complain about password fatigue and help desk lockout calls. What is the most appropriate security improvement?

## Choices
A. Implement single sign-on with a centralized identity provider and strong MFA
B. Require unique passwords for each service and rotate them monthly
C. Disable remote access for all regional cloud services
D. Move all services to a single region to simplify credentials

## Correct Answer
A

## Detailed Explanation
Single sign-on with a centralized identity provider and strong MFA reduces password fatigue while maintaining security. It also improves access management and reduces help desk burden compared to managing separate credentials for every service.

## Why the Incorrect Options Are Wrong
- B: Unique passwords for each service increase complexity and do not solve the lockout issue.
- C: Disabling remote access is overly restrictive and may break business operations.
- D: Moving services to a single region is not a credential management solution and may create other risks.

## Exam Tip
When users manage multiple separate credentials, centralized identity and SSO with MFA is usually a better security and usability choice.
