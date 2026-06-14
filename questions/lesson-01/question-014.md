# L01-Q014

**Difficulty:** Hard
**Domain:** Security Operations
**Objective:** 4.1 Given a scenario, apply common security techniques to computing resources
**Security+ Objective Mapping:** SY0-701 Objective 4.1 - Network security controls and secure remote access

## Scenario
Remote contractors access a corporate VPN from unmanaged home networks. The security team wants to reduce the risk of network-based attacks without blocking remote work. Which control should be implemented first?

## Choices
A. Block all VPN access from home networks
B. Require device health checks and endpoint compliance before VPN access is granted
C. Disable split tunneling for all remote users
D. Allow only site-to-site VPN connections for contractors

## Correct Answer
B

## Detailed Explanation
Implementing endpoint compliance checks ensures devices meet security requirements before connecting. This reduces risk from unmanaged networks while still allowing remote work, making it a strong first control.

## Why the Incorrect Options Are Wrong
- A: Blocking VPN access from home networks prevents remote work and may not be necessary if devices are compliant.
- C: Disabling split tunneling can improve security, but it does not verify the security posture of the connecting device.
- D: Site-to-site VPNs may not be feasible for contractors and do not address the actual device compliance issue.

## Exam Tip
When remote access from unmanaged networks is the concern, start with verifying device health and compliance rather than immediately blocking connectivity.
