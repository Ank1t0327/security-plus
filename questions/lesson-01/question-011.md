# L01-Q011

**Difficulty:** Medium
**Domain:** Security Operations
**Objective:** 1.1 Compare and contrast various types of security controls
**Security+ Objective Mapping:** SY0-701 Objective 1.1 - Control categories and control functions

## Scenario
A mid-size software company uses layered defenses for its development systems. They have network segmentation, antivirus, and strong user training, but they still struggle to detect insider misuse of privileged credentials. Which control function should be strengthened first?

## Choices
A. Preventive controls, because they block all insider actions
B. Detective controls, because they identify misuse after it happens
C. Corrective controls, because they automatically restore compromised data
D. Compensating controls, because they replace existing defenses

## Correct Answer
B

## Detailed Explanation
Insider misuse with valid credentials is often not blocked by preventive controls alone. Strengthening detective controls like behavior analytics, logging, and real-time alerts helps identify suspicious privileged use and supports timely response.

## Why the Incorrect Options Are Wrong
- A: Preventive controls are important, but valid privileged credentials can bypass them when insiders misuse access.
- C: Corrective controls help recover after an incident, but they do not improve the ability to detect misuse.
- D: Compensating controls are alternatives when preferred controls are unavailable; the key need here is better detection.

## Exam Tip
For misuse by authorized users, prioritize detective controls that reveal suspicious actions rather than only adding more preventive barriers.
