# L01-Q005

**Difficulty:** Hard
**Domain:** Security Operations
**Objective:** 4.1 Given a scenario, apply common security techniques to computing resources
**Security+ Objective Mapping:** SY0-701 Objective 1.1 and 4.1 - Compensating, preventive, and detective controls

## Scenario
A legacy manufacturing controller cannot support MFA or modern endpoint agents. It controls a critical production process and cannot be replaced for 18 months. Which control strategy best reduces risk while acknowledging the limitation?

## Choices
A. Accept the risk because the controller cannot run modern security tools
B. Place the controller on a segmented network with jump host access, monitoring, and strict change control
C. Disable all remote access and allow any engineer to log in locally when needed
D. Install antivirus from removable media during monthly maintenance windows

## Correct Answer
B

## Detailed Explanation
Segmentation, controlled jump host access, monitoring, and change control are compensating and detective/preventive measures that reduce exposure when the primary preferred controls cannot be installed directly.

## Why the Incorrect Options Are Wrong
- A: Risk acceptance may be a formal outcome, but there are practical compensating controls available.
- C: Local unrestricted access removes accountability and may create operational and insider risk.
- D: Antivirus alone is unlikely to be supported or sufficient for an unsupported industrial controller.

## Exam Tip
When a preferred control cannot be implemented, choose layered compensating controls that reduce exposure and improve monitoring.
