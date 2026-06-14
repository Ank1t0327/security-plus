# L01-Q004

**Difficulty:** Hard
**Domain:** Security Architecture
**Objective:** 4.6 Given a scenario, implement and maintain identity and access management
**Security+ Objective Mapping:** SY0-701 Objective 4.6 - IAM, least privilege, authorization, and accounting

## Scenario
A SaaS company has developers who occasionally need production database access during incidents. Auditors found several standing privileged accounts that were not disabled after emergencies. The company wants to reduce risk while preserving rapid incident response. Which design is best?

## Choices
A. Shared administrator credentials stored in a secure password vault
B. Permanent read-only access for all developers and manual approval for write access
C. Just-in-time privileged access with approval workflow, session logging, and automatic expiration
D. Local database accounts assigned to each developer and reviewed annually

## Correct Answer
C

## Detailed Explanation
Just-in-time privileged access grants elevated rights only when needed, requires approval, records activity for accountability, and automatically removes access. This balances incident response speed with least privilege and auditability.

## Why the Incorrect Options Are Wrong
- A: Shared credentials weaken accountability and do not prevent lingering privilege.
- B: Permanent access still violates least privilege and may expose sensitive production data.
- D: Local standing accounts with annual review are too slow and do not address emergency privilege expiration.

## Exam Tip
For emergency admin access, favor just-in-time access plus logging and expiration over standing privilege.
