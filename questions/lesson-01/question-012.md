# L01-Q012

**Difficulty:** Medium
**Domain:** Identity and Access Management
**Objective:** 4.6 Given a scenario, implement and maintain identity and access management
**Security+ Objective Mapping:** SY0-701 Objective 4.6 - Authentication factors and secure access methods

## Scenario
A financial services firm is updating its login policy. They need an authentication method that resists credential theft and replay attacks while still being usable for remote employees. Which option meets that requirement best?

## Choices
A. Password complexity rules and 90-day expiration
B. SMS one-time codes sent to a mobile phone
C. FIDO2 passwordless authentication with a hardware security key
D. Single sign-on with the same password reused across apps

## Correct Answer
C

## Detailed Explanation
FIDO2 hardware-based passwordless authentication resists credential theft and replay attacks because it uses public-key cryptography tied to a device. It is more secure than passwords and SMS codes, and it supports remote usage without reusing passwords.

## Why the Incorrect Options Are Wrong
- A: Complex passwords and expiration can still be phished or replayed and are less effective than phishing-resistant factors.
- B: SMS codes are vulnerable to interception, SIM swap, and social engineering.
- D: Reusing the same password across apps increases risk if any single credential is compromised.

## Exam Tip
When the goal is to resist stolen credentials and replay attacks, choose phishing-resistant hardware or cryptographic authenticators over passwords or SMS.
