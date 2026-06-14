export const lessons = [
  {
    id: "lesson-01",
    title: "Lesson 1: Fundamental Security Concepts",
    topics: [
      "CIA Triad",
      "Cybersecurity Frameworks",
      "Gap Analysis",
      "Access Control",
      "IAM",
      "AAA",
      "Security Control Categories",
      "Security Control Functions",
      "Information Security Roles",
      "Security Business Units"
    ]
  }
,
  {
    id: "lesson-02",
    title: "Lesson 2: Threats, Attack Surface, and Social Engineering",
    topics: [
    "Threat Actors",
    "Attack Surface",
    "Vulnerability, Threat, and Risk",
    "Threat Actor Attributes",
    "Threat Actor Motivation",
    "Hackers and Hacktivists",
    "Nation-State Actors",
    "Organized Crime and Competitors",
    "Internal Threat Actors",
    "Social Engineering"
]
  }];

export const questions = [
  {
    id: "L01-Q001",
    difficulty: "Medium",
    domain: "General Security Concepts",
    objective: "1.1 Compare and contrast various types of security controls",
    mapping: "SY0-701 Objective 1.1 - Security control categories and control types",
    scenario:
      "A regional clinic stores patient records in a cloud application. During a review, the security analyst finds that access reviews are documented quarterly, badge readers protect the records office, and endpoint detection alerts on suspicious activity. However, there is no documented policy assigning record owners or approval authority for access changes. Which control gap should be addressed first?",
    choices: [
      "A. Add another detective technical control to the endpoints",
      "B. Establish a managerial control defining ownership and approval responsibilities",
      "C. Replace badge readers with biometric locks at the records office",
      "D. Increase logging retention for the cloud application"
    ],
    correctAnswer: "B",
    explanation:
      "The immediate gap is governance: no one is formally accountable for approving or owning access. A managerial control, such as a policy or standard defining data ownership and approval authority, enables consistent access decisions and supports later technical enforcement.",
    incorrect: {
      A: "Endpoint detection does not solve the missing authority for access decisions.",
      C: "Physical controls protect a location, but the problem involves ownership and approval of cloud application access.",
      D: "Longer logs may help investigations, but they do not determine who should approve access."
    },
    examTip:
      "When the scenario lacks ownership, policy, or authority, look for a managerial control before adding more technology."
  },
  {
    id: "L01-Q002",
    difficulty: "Medium",
    domain: "General Security Concepts",
    objective: "1.2 Summarize fundamental security concepts",
    mapping: "SY0-701 Objective 1.2 - CIA triad and business impact",
    scenario:
      "An online payment processor is selecting controls after a risk assessment. The most damaging realistic event is unauthorized modification of settlement files before funds are transferred. Which security objective should be prioritized when selecting controls?",
    choices: [
      "A. Availability, because payment systems must remain online",
      "B. Integrity, because unauthorized file changes would alter financial outcomes",
      "C. Confidentiality, because payment data may contain sensitive information",
      "D. Non-repudiation, because users should not deny transactions"
    ],
    correctAnswer: "B",
    explanation:
      "The scenario centers on unauthorized modification of settlement files. Integrity protects data from improper alteration and is the primary security objective for preventing incorrect financial transfers.",
    incorrect: {
      A: "Availability matters, but the stated highest-impact event is changed data, not outage.",
      C: "Confidentiality matters for payment data, but disclosure is not the main risk described.",
      D: "Non-repudiation can support accountability, but it does not directly prevent or detect settlement file tampering."
    },
    examTip:
      "Map the business harm to the CIA objective. Altered data usually points to integrity."
  },
  {
    id: "L01-Q003",
    difficulty: "Medium",
    domain: "Security Program Management",
    objective: "5.1 Summarize elements of effective security governance",
    mapping: "SY0-701 Objective 5.1 - Frameworks, policies, standards, and procedures",
    scenario:
      "A startup has ad hoc security practices and must demonstrate a repeatable security program to enterprise customers. Leadership wants a flexible framework that helps identify current capability, target capability, and improvement priorities without immediately requiring formal certification. Which approach best fits?",
    choices: [
      "A. Use the NIST Cybersecurity Framework to establish current and target profiles",
      "B. Use a penetration test report as the complete security roadmap",
      "C. Implement only ISO 27001 certification controls before any gap analysis",
      "D. Replace all policies with technical configuration baselines"
    ],
    correctAnswer: "A",
    explanation:
      "The NIST Cybersecurity Framework is commonly used to organize security outcomes, compare current and target profiles, and prioritize gaps. It is well suited for building a repeatable program without starting with certification as the main driver.",
    incorrect: {
      B: "A penetration test identifies exploitable weaknesses, but it is not a complete governance framework.",
      C: "ISO 27001 can be valuable, but the scenario asks for a flexible profile-based improvement approach rather than immediate certification.",
      D: "Configuration baselines are standards or technical controls, not a replacement for governance."
    },
    examTip:
      "Current profile, target profile, and prioritized gaps are strong clues for NIST CSF."
  },
  {
    id: "L01-Q004",
    difficulty: "Hard",
    domain: "Security Architecture",
    objective: "4.6 Given a scenario, implement and maintain identity and access management",
    mapping: "SY0-701 Objective 4.6 - IAM, least privilege, authorization, and accounting",
    scenario:
      "A SaaS company has developers who occasionally need production database access during incidents. Auditors found several standing privileged accounts that were not disabled after emergencies. The company wants to reduce risk while preserving rapid incident response. Which design is best?",
    choices: [
      "A. Shared administrator credentials stored in a secure password vault",
      "B. Permanent read-only access for all developers and manual approval for write access",
      "C. Just-in-time privileged access with approval workflow, session logging, and automatic expiration",
      "D. Local database accounts assigned to each developer and reviewed annually"
    ],
    correctAnswer: "C",
    explanation:
      "Just-in-time privileged access grants elevated rights only when needed, requires approval, records activity for accountability, and automatically removes access. This balances incident response speed with least privilege and auditability.",
    incorrect: {
      A: "Shared credentials weaken accountability and do not prevent lingering privilege.",
      B: "Permanent access still violates least privilege and may expose sensitive production data.",
      D: "Local standing accounts with annual review are too slow and do not address emergency privilege expiration."
    },
    examTip:
      "For emergency admin access, favor just-in-time access plus logging and expiration over standing privilege."
  },
  {
    id: "L01-Q005",
    difficulty: "Hard",
    domain: "Security Operations",
    objective: "4.1 Given a scenario, apply common security techniques to computing resources",
    mapping: "SY0-701 Objective 1.1 and 4.1 - Compensating, preventive, and detective controls",
    scenario:
      "A legacy manufacturing controller cannot support MFA or modern endpoint agents. It controls a critical production process and cannot be replaced for 18 months. Which control strategy best reduces risk while acknowledging the limitation?",
    choices: [
      "A. Accept the risk because the controller cannot run modern security tools",
      "B. Place the controller on a segmented network with jump host access, monitoring, and strict change control",
      "C. Disable all remote access and allow any engineer to log in locally when needed",
      "D. Install antivirus from removable media during monthly maintenance windows"
    ],
    correctAnswer: "B",
    explanation:
      "Segmentation, controlled jump host access, monitoring, and change control are compensating and detective/preventive measures that reduce exposure when the primary preferred controls cannot be installed directly.",
    incorrect: {
      A: "Risk acceptance may be a formal outcome, but there are practical compensating controls available.",
      C: "Local unrestricted access removes accountability and may create operational and insider risk.",
      D: "Antivirus alone is unlikely to be supported or sufficient for an unsupported industrial controller."
    },
    examTip:
      "When a preferred control cannot be implemented, choose layered compensating controls that reduce exposure and improve monitoring."
  },
  {
    id: "L01-Q006",
    difficulty: "Hard",
    domain: "Security Governance",
    objective: "5.1 Summarize elements of effective security governance",
    mapping: "SY0-701 Objective 5.1 - Roles, responsibilities, and segregation of duties",
    scenario:
      "A small company lets the same administrator request privileged access, approve the request, implement the change, and review the logs. A recent incident involved unauthorized changes that were difficult to investigate. Which governance issue is the primary concern?",
    choices: [
      "A. Lack of segregation of duties creates a conflict of interest and weak accountability",
      "B. Lack of physical security allows unauthorized data center access",
      "C. Lack of encryption prevents confidentiality of administrator actions",
      "D. Lack of availability controls prevents systems from staying online"
    ],
    correctAnswer: "A",
    explanation:
      "The same person controls request, approval, implementation, and review. This violates segregation of duties and undermines independent oversight, making unauthorized or inappropriate changes harder to prevent and investigate.",
    incorrect: {
      B: "No physical access issue is described.",
      C: "Encryption does not solve approval and oversight conflicts.",
      D: "The issue is unauthorized change accountability, not system uptime."
    },
    examTip:
      "If one person can approve, perform, and review their own sensitive action, think segregation of duties."
  },
  {
    id: "L01-Q007",
    difficulty: "Hard",
    domain: "Identity and Access Management",
    objective: "4.6 Given a scenario, implement and maintain identity and access management",
    mapping: "SY0-701 Objective 4.6 - Authentication, authorization, and accounting",
    scenario:
      "After a contractor leaves, their VPN account is disabled, but the security team finds API calls made with an old service token tied to the contractor's project. Which IAM process failed most directly?",
    choices: [
      "A. Authentication, because the VPN password was no longer valid",
      "B. Authorization, because the token retained access after the business need ended",
      "C. Accounting, because the API calls were logged",
      "D. Federation, because the contractor used an external identity provider"
    ],
    correctAnswer: "B",
    explanation:
      "The token still had permission after the contractor's need ended. This is an authorization lifecycle failure: access was not revoked for a related credential or service token when the business relationship ended.",
    incorrect: {
      A: "The VPN account was disabled, so the main failure was not VPN authentication.",
      C: "Logging worked well enough to reveal the API calls; accounting is not the failed process.",
      D: "The scenario does not indicate a federation problem."
    },
    examTip:
      "Offboarding must include human accounts, service accounts, API keys, tokens, groups, and delegated access."
  },
  {
    id: "L01-Q008",
    difficulty: "Expert",
    domain: "Risk Management",
    objective: "5.2 Explain elements of the risk management process",
    mapping: "SY0-701 Objective 5.2 - Gap analysis and prioritization",
    scenario:
      "A gap analysis compares the current security program with a target framework. The largest gaps are: no incident response tabletop exercises, inconsistent privileged access review, no formal vendor risk tiering, and incomplete asset ownership records. The business has limited budget and recently had delayed containment during a phishing incident because teams did not know who could approve emergency actions. What should be prioritized first?",
    choices: [
      "A. Formal incident response roles, authority, and tabletop exercises",
      "B. A new vendor questionnaire for all suppliers",
      "C. A full replacement of the asset management platform",
      "D. Quarterly executive dashboards about all open gaps"
    ],
    correctAnswer: "A",
    explanation:
      "The recent business impact involved delayed containment because roles and emergency authority were unclear. Prioritizing incident response roles and tabletop exercises directly addresses the observed failure and improves decision making during future incidents.",
    incorrect: {
      B: "Vendor tiering matters, but it is not tied to the recent containment failure.",
      C: "Asset ownership gaps are important, but a full platform replacement may be costly and less directly tied to the urgent issue.",
      D: "Dashboards communicate gaps but do not remediate the operational problem."
    },
    examTip:
      "Gap priority should consider business impact, recent incidents, and risk reduction, not just the number of gaps."
  },
  {
    id: "L01-Q009",
    difficulty: "Expert",
    domain: "Security Architecture",
    objective: "1.1 Compare and contrast various types of security controls",
    mapping: "SY0-701 Objective 1.1 - Control function selection",
    scenario:
      "A company is repeatedly hit by employees submitting credentials to convincing phishing pages. Current controls include annual security awareness training and email filtering. Leadership wants a control that most directly prevents stolen passwords from being useful to attackers. Which option is best?",
    choices: [
      "A. Increase security awareness training from annual to quarterly",
      "B. Add a login banner warning users not to share passwords",
      "C. Require phishing-resistant MFA for remote and cloud application access",
      "D. Send monthly reports naming departments with the highest click rates"
    ],
    correctAnswer: "C",
    explanation:
      "Phishing-resistant MFA is a preventive technical control that reduces the usefulness of captured passwords. It directly addresses the attack path rather than relying only on user behavior or reporting.",
    incorrect: {
      A: "Training is useful but does not prevent a stolen password from being used.",
      B: "A banner is directive or deterrent at best and weak against credential phishing.",
      D: "Reports may influence behavior, but they do not block attacker authentication."
    },
    examTip:
      "When users keep falling for phishing, the best control often reduces reliance on passwords rather than only increasing reminders."
  },
  {
    id: "L01-Q010",
    difficulty: "Expert",
    domain: "Security Governance",
    objective: "5.1 Summarize elements of effective security governance",
    mapping: "SY0-701 Objective 5.1 - Security roles, business units, and accountability",
    scenario:
      "A business unit launches a customer analytics platform without involving security until one week before go-live. Security discovers excessive data access, unclear data ownership, and no monitoring requirements. The business argues that security is blocking revenue. Which response best aligns security responsibilities with business objectives?",
    choices: [
      "A. Security should reject the launch until every possible risk is eliminated",
      "B. Security should approve the launch because the business owns revenue risk",
      "C. Assign a data owner, document risk acceptance for unresolved issues, implement minimum access controls and monitoring before go-live, and add security review to future project gates",
      "D. Transfer all platform administration to the security team so the business cannot change access"
    ],
    correctAnswer: "C",
    explanation:
      "This balances business enablement and risk management. It establishes ownership, implements critical controls, documents residual risk through the right authority, and improves the process so security is engaged earlier next time.",
    incorrect: {
      A: "Eliminating every possible risk is unrealistic and may not align with business priorities.",
      B: "Approving without minimum controls ignores security's governance and advisory responsibilities.",
      D: "Security should not automatically own business platform administration; ownership and accountability should be clearly assigned."
    },
    examTip:
      "Security governance supports business decisions by clarifying ownership, controls, and risk acceptance."
  },
  {
    id: "L01-Q011",
    difficulty: "Medium",
    domain: "Security Operations",
    objective: "1.1 Compare and contrast various types of security controls",
    mapping: "SY0-701 Objective 1.1 - Control categories and control functions",
    scenario:
      "A mid-size software company uses layered defenses for its development systems. They have network segmentation, antivirus, and strong user training, but they still struggle to detect insider misuse of privileged credentials. Which control function should be strengthened first?",
    choices: [
      "A. Preventive controls, because they block all insider actions",
      "B. Detective controls, because they identify misuse after it happens",
      "C. Corrective controls, because they automatically restore compromised data",
      "D. Compensating controls, because they replace existing defenses"
    ],
    correctAnswer: "B",
    explanation:
      "Insider misuse with valid credentials is often not blocked by preventive controls alone. Strengthening detective controls like behavior analytics, logging, and real-time alerts helps identify suspicious privileged use and supports timely response.",
    incorrect: {
      A: "Preventive controls are important, but valid privileged credentials can bypass them when insiders misuse access.",
      C: "Corrective controls help recover after an incident, but they do not improve the ability to detect misuse.",
      D: "Compensating controls are alternatives when preferred controls are unavailable; the key need here is better detection."
    },
    examTip:
      "For misuse by authorized users, prioritize detective controls that reveal suspicious actions rather than only adding more preventive barriers."
  },
  {
    id: "L01-Q012",
    difficulty: "Medium",
    domain: "Identity and Access Management",
    objective: "4.6 Given a scenario, implement and maintain identity and access management",
    mapping: "SY0-701 Objective 4.6 - Authentication factors and secure access methods",
    scenario:
      "A financial services firm is updating its login policy. They need an authentication method that resists credential theft and replay attacks while still being usable for remote employees. Which option meets that requirement best?",
    choices: [
      "A. Password complexity rules and 90-day expiration",
      "B. SMS one-time codes sent to a mobile phone",
      "C. FIDO2 passwordless authentication with a hardware security key",
      "D. Single sign-on with the same password reused across apps"
    ],
    correctAnswer: "C",
    explanation:
      "FIDO2 hardware-based passwordless authentication resists credential theft and replay attacks because it uses public-key cryptography tied to a device. It is more secure than passwords and SMS codes, and it supports remote usage without reusing passwords.",
    incorrect: {
      A: "Complex passwords and expiration can still be phished or replayed and are less effective than phishing-resistant factors.",
      B: "SMS codes are vulnerable to interception, SIM swap, and social engineering.",
      D: "Reusing the same password across apps increases risk if any single credential is compromised."
    },
    examTip:
      "When the goal is to resist stolen credentials and replay attacks, choose phishing-resistant hardware or cryptographic authenticators over passwords or SMS."
  },
  {
    id: "L01-Q013",
    difficulty: "Hard",
    domain: "Security Governance",
    objective: "5.1 Summarize elements of effective security governance",
    mapping: "SY0-701 Objective 5.1 - Policies, standards, and procedures",
    scenario:
      "A healthcare provider has a written password policy that is not enforced by technical controls. Users still share credentials and use weak passwords. What is the primary program deficiency?",
    choices: [
      "A. Lack of training about the policy",
      "B. Policy exists, but enforcement and monitoring are missing",
      "C. Policy is too strict and causing user resistance",
      "D. Policy should be replaced with a separate acceptable use policy"
    ],
    correctAnswer: "B",
    explanation:
      "A policy alone is not sufficient. The organization needs technical enforcement, monitoring, and consequences to make the policy effective. Otherwise users may ignore the written guidance.",
    incorrect: {
      A: "Training may help, but the key issue is the lack of enforcement for the existing policy.",
      C: "There is no evidence the policy is too strict; the problem is noncompliance.",
      D: "An acceptable use policy does not replace the need for enforcing password requirements."
    },
    examTip:
      "If a policy exists but users continue insecure behavior, look for missing enforcement, monitoring, or governance accountability."
  },
  {
    id: "L01-Q014",
    difficulty: "Hard",
    domain: "Security Operations",
    objective: "4.1 Given a scenario, apply common security techniques to computing resources",
    mapping: "SY0-701 Objective 4.1 - Network security controls and secure remote access",
    scenario:
      "Remote contractors access a corporate VPN from unmanaged home networks. The security team wants to reduce the risk of network-based attacks without blocking remote work. Which control should be implemented first?",
    choices: [
      "A. Block all VPN access from home networks",
      "B. Require device health checks and endpoint compliance before VPN access is granted",
      "C. Disable split tunneling for all remote users",
      "D. Allow only site-to-site VPN connections for contractors"
    ],
    correctAnswer: "B",
    explanation:
      "Implementing endpoint compliance checks ensures devices meet security requirements before connecting. This reduces risk from unmanaged networks while still allowing remote work, making it a strong first control.",
    incorrect: {
      A: "Blocking VPN access from home networks prevents remote work and may not be necessary if devices are compliant.",
      C: "Disabling split tunneling can improve security, but it does not verify the security posture of the connecting device.",
      D: "Site-to-site VPNs may not be feasible for contractors and do not address the actual device compliance issue."
    },
    examTip:
      "When remote access from unmanaged networks is the concern, start with verifying device health and compliance rather than immediately blocking connectivity."
  },
  {
    id: "L01-Q015",
    difficulty: "Hard",
    domain: "General Security Concepts",
    objective: "1.1 Compare and contrast various types of security controls",
    mapping: "SY0-701 Objective 1.1 - Administrative, physical, and technical controls",
    scenario:
      "A university deploys door access cards, user training, and data loss prevention software. It still experiences recurring unauthorized access to research data. Which additional control type most directly improves protection of the data itself?",
    choices: [
      "A. Administrative control, such as a new acceptable use policy",
      "B. Physical control, such as cameras in the research lab",
      "C. Technical control, such as encryption for the research data",
      "D. Detective control, such as file integrity monitoring"
    ],
    correctAnswer: "C",
    explanation:
      "Protecting the data itself requires a technical control like encryption. This ensures that even if someone gains unauthorized access, the data remains difficult to read or tamper with without proper keys.",
    incorrect: {
      A: "Administrative policies help govern behavior but do not directly protect the data.",
      B: "Physical controls protect the location, but they do not secure the data in use or at rest.",
      D: "Detective controls help identify misuse after it occurs, but encryption prevents exposure before detection."
    },
    examTip:
      "To protect data directly, choose technical controls like encryption or access enforcement rather than relying only on training or physical barriers."
  },
  {
    id: "L01-Q016",
    difficulty: "Expert",
    domain: "Risk Management",
    objective: "5.2 Explain elements of the risk management process",
    mapping: "SY0-701 Objective 5.2 - Risk assessment and residual risk",
    scenario:
      "A retail company has identified risks from third-party payment integrations, shadow IT, and inconsistent backup practices. The security team needs to recommend which risk should be formally accepted, mitigated, or avoided. Which decision aligns best with risk management principles?",
    choices: [
      "A. Accept the risk of inconsistent backups because recovery is expensive",
      "B. Mitigate the third-party payment integration risk with stronger vendor controls and monitoring",
      "C. Avoid shadow IT by immediately blocking all unsanctioned applications without review",
      "D. Accept all risks until a full security program is funded"
    ],
    correctAnswer: "B",
    explanation:
      "Third-party payment integrations expose sensitive financial data and should be mitigated with vendor controls, contract requirements, and monitoring. Accepting inconsistent backups or all risks is too broad; avoiding shadow IT without review may disrupt business and should be handled through governance and process.",
    incorrect: {
      A: "Risk acceptance requires that the risk is understood and the impact is acceptable; inconsistent backups are usually better mitigated with improved processes.",
      C: "Immediate avoidance of all shadow IT is disruptive; a risk-based review and remediation strategy is more appropriate.",
      D: "Accepting all risks is not aligned with proper risk management."
    },
    examTip:
      "Prioritize mitigation when the risk involves sensitive data exposure and business processes that can be improved through controls, rather than blanket acceptance or avoidance."
  },
  {
    id: "L01-Q017",
    difficulty: "Expert",
    domain: "Identity and Access Management",
    objective: "4.6 Given a scenario, implement and maintain identity and access management",
    mapping: "SY0-701 Objective 4.6 - Access reviews and group membership",
    scenario:
      "A services company has many long-lived access groups, and quarterly access reviews are rarely completed. An audit finds several employees still have access to sensitive systems after changing roles. What is the best way to reduce this risk?",
    choices: [
      "A. Increase review frequency to monthly while keeping the same group structure",
      "B. Implement role-based access control and automate group membership based on role changes",
      "C. Remove all access groups and assign permissions individually",
      "D. Require managers to sign an annual attestation for every access group"
    ],
    correctAnswer: "B",
    explanation:
      "Automating group membership through RBAC based on role changes reduces stale access and improves accuracy. Frequent reviews help, but automation and role alignment are more effective for dynamic environments.",
    incorrect: {
      A: "Monthly reviews may still be manual and error-prone without better group management.",
      C: "Individual permissions scale poorly and increase the likelihood of mistakes.",
      D: "Annual attestations are too infrequent and do not prevent stale access after role changes."
    },
    examTip:
      "If stale access results from role changes, prefer RBAC and automation over more frequent manual reviews."
  },
  {
    id: "L01-Q018",
    difficulty: "Medium",
    domain: "Security Architecture",
    objective: "4.6 Given a scenario, implement and maintain identity and access management",
    mapping: "SY0-701 Objective 4.6 - Federated identity and single sign-on",
    scenario:
      "A multinational enterprise uses separate usernames and passwords for each regional cloud service. Users complain about password fatigue and help desk lockout calls. What is the most appropriate security improvement?",
    choices: [
      "A. Implement single sign-on with a centralized identity provider and strong MFA",
      "B. Require unique passwords for each service and rotate them monthly",
      "C. Disable remote access for all regional cloud services",
      "D. Move all services to a single region to simplify credentials"
    ],
    correctAnswer: "A",
    explanation:
      "Single sign-on with a centralized identity provider and strong MFA reduces password fatigue while maintaining security. It also improves access management and reduces help desk burden compared to managing separate credentials for every service.",
    incorrect: {
      B: "Unique passwords for each service increase complexity and do not solve the lockout issue.",
      C: "Disabling remote access is overly restrictive and may break business operations.",
      D: "Moving services to a single region is not a credential management solution and may create other risks."
    },
    examTip:
      "When users manage multiple separate credentials, centralized identity and SSO with MFA is usually a better security and usability choice."
  },
  {
    id: "L01-Q019",
    difficulty: "Hard",
    domain: "Security Governance",
    objective: "5.1 Summarize elements of effective security governance",
    mapping: "SY0-701 Objective 5.1 - Risk acceptance and decision authority",
    scenario:
      "An organization has a documented risk acceptance process, but project teams routinely bypass it and proceed with deployments. Which governance improvement will most directly address this issue?",
    choices: [
      "A. Create a separate risk acceptance policy for projects",
      "B. Require sign-off from the appointed risk acceptance authority before deployment",
      "C. Add risk acceptance training to all onboarding materials",
      "D. Publish quarterly risk acceptance statistics to executives"
    ],
    correctAnswer: "B",
    explanation:
      "Requiring sign-off from the authorized decision-maker ensures the process is followed and residual risk is accepted by the right party. Training and metrics are useful, but the direct control is enforcing approval before deployment.",
    incorrect: {
      A: "A separate policy may duplicate requirements but does not enforce the existing process.",
      C: "Training alone does not stop teams from bypassing the process.",
      D: "Metrics help awareness but do not prevent unauthorized deployments."
    },
    examTip:
      "If teams bypass formal risk acceptance, the strongest fix is usually enforcing the required approval step with the proper authority."
  },
  {
    id: "L01-Q020",
    difficulty: "Expert",
    domain: "Risk Management",
    objective: "5.2 Explain elements of the risk management process",
    mapping: "SY0-701 Objective 5.2 - Risk prioritization and mitigation strategies",
    scenario:
      "A manufacturing firm must prioritize remediation for these findings: high-risk unencrypted intellectual property on network shares, medium-risk outdated firewall rules, and low-risk missing training records. The board wants the initiative that most reduces business exposure quickly. Which should be addressed first?",
    choices: [
      "A. Update firewall rules to limit access to the network shares",
      "B. Encrypt the intellectual property at rest and in transit",
      "C. Complete training records for all employees",
      "D. Accept the missing training records as a low-priority issue"
    ],
    correctAnswer: "B",
    explanation:
      "Encrypting the intellectual property protects the most sensitive asset and reduces business exposure directly. While firewall rules and training are important, the highest-risk finding involving unprotected sensitive data should be remediated first.",
    incorrect: {
      A: "Updating firewall rules helps, but encryption provides stronger protection for the data itself.",
      C: "Training records are lower risk and do not immediately reduce exposure of the sensitive IP.",
      D: "Accepting a low-risk issue may be okay, but it does not address the urgent high-risk exposure."
    },
    examTip:
      "Prioritize remediation based on the greatest business impact and likelihood of exposure; high-risk data protections usually come before administrative cleanup."
  }
,
  {
    id: "L02-Q001",
    difficulty: "Medium",
    domain: "Threat Intelligence",
    objective: "2.1 Compare vulnerability, threat, and risk concepts",
    mapping: "SY0-701 Objective 2.1 - Vulnerability, threat, risk definitions",
    scenario: "A manufacturing firm has an unpatched Internet-facing web server, a known exploit exists, and executives are concerned about potential data loss. Which statement best describes risk in this situation?",
    choices: [
      "A. The unpatched server is the risk because it has a flaw",
      "B. The known exploit is the risk because it enables compromise",
      "C. The possibility of data loss from the exploit is the risk",
      "D. The server owner is the risk because they must decide what to do"
],
    correctAnswer: "C",
    explanation: "Risk is the potential for loss or damage when a vulnerability is exploited by a threat. The unpatched server is the vulnerability, the exploit is the threat, and data loss is the risk.",
    incorrect: {
      "A": "The server is the vulnerability, not the risk itself.",
      "B": "The exploit is a threat event, not the actual potential loss.",
      "D": "The owner is responsible for decisions, but risk is the potential impact."
},
    examTip: "Risk describes the potential loss; threats and vulnerabilities are the contributing factors."},
  {
    id: "L02-Q002",
    difficulty: "Medium",
    domain: "Threat Intelligence",
    objective: "2.1 Compare vulnerability, threat, and risk concepts",
    mapping: "SY0-701 Objective 2.1 - Vulnerability, threat, risk definitions",
    scenario: "A security assessment reports that a missing patch is a weakness, a hacker scanning the network is a threat, and the possible theft of customer records is a concern. Which term best matches the missing patch?",
    choices: [
      "A. Risk",
      "B. Vulnerability",
      "C. Control",
      "D. Incident"
],
    correctAnswer: "B",
    explanation: "A missing patch is a vulnerability, which is a weakness that can be exploited by a threat.",
    incorrect: {
      "A": "Risk is the potential loss, not the weakness itself.",
      "C": "A control mitigates vulnerabilities, it is not the weakness.",
      "D": "An incident is a realized event, not the condition of missing a patch."
},
    examTip: "Vulnerabilities are weaknesses; threats are actors or events; risk is what happens when they combine."},
  {
    id: "L02-Q003",
    difficulty: "Hard",
    domain: "Threat Actor Analysis",
    objective: "2.2 Describe attributes of threat actors",
    mapping: "SY0-701 Objective 2.2 - Threat actor characteristics",
    scenario: "A security team categorizes attackers by their skill, resources, and intent. Which attribute most clearly distinguishes a nation-state actor from a casual hacker?",
    choices: [
      "A. Capability",
      "B. Control",
      "C. Confidentiality",
      "D. Availability"
],
    correctAnswer: "A",
    explanation: "Capability, including technical skill and resources, distinguishes a well-funded nation-state actor from a low-skill casual hacker.",
    incorrect: {
      "B": "Control is a mitigation, not an attacker attribute.",
      "C": "Confidentiality is a security goal, not a threat actor attribute.",
      "D": "Availability is also a goal, not an actor attribute."
},
    examTip: "Threat actor attributes usually include capability, intent, and targeting profile."},
  {
    id: "L02-Q004",
    difficulty: "Medium",
    domain: "Threat Actor Analysis",
    objective: "2.2 Describe attributes of threat actors",
    mapping: "SY0-701 Objective 2.2 - Threat actor characteristics",
    scenario: "A group is identified as using custom tools, long-term persistence, and stealthy lateral movement in a critical infrastructure network. Which attribute is most consistent with this description?",
    choices: [
      "A. Motivation",
      "B. Capability",
      "C. Vulnerability",
      "D. Compliance"
],
    correctAnswer: "B",
    explanation: "Custom tools and stealthy persistence indicate high capability, a distinguishing attribute of advanced threat actors.",
    incorrect: {
      "A": "Motivation is not directly inferred from technical behavior.",
      "C": "Vulnerability is what the attacker exploits, not the attacker attribute.",
      "D": "Compliance is unrelated to attacker characteristics."
},
    examTip: "Advanced actors are often identified by their capability and persistence."},
  {
    id: "L02-Q005",
    difficulty: "Medium",
    domain: "Threat Motivations",
    objective: "2.3 Explain motivations of threat actors",
    mapping: "SY0-701 Objective 2.3 - Threat actor motivations",
    scenario: "An attacker steals confidential customer data and sells it on the dark web. Which motivation best describes this actor?",
    choices: [
      "A. Ideology",
      "B. Financial gain",
      "C. Espionage",
      "D. Reputation"
],
    correctAnswer: "B",
    explanation: "Selling stolen data is motivated by financial gain, a common driver for organized crime groups.",
    incorrect: {
      "A": "Ideology is more aligned with hacktivists than data theft for sale.",
      "C": "Espionage is intelligence gathering, not immediate profit from sales.",
      "D": "Reputation is not the primary driver here."
},
    examTip: "Financially motivated actors usually target data or systems they can monetize."},
  {
    id: "L02-Q006",
    difficulty: "Hard",
    domain: "Threat Motivations",
    objective: "2.3 Explain motivations of threat actors",
    mapping: "SY0-701 Objective 2.3 - Threat actor motivations",
    scenario: "A group defaces a government website and posts a manifesto about climate policy. Which motivation best fits this attack?",
    choices: [
      "A. Financial gain",
      "B. Competitor advantage",
      "C. Ideology",
      "D. Accidental disclosure"
],
    correctAnswer: "C",
    explanation: "Defacing a website for political protest indicates ideological motivation, typical of hacktivists.",
    incorrect: {
      "A": "No financial motive is described.",
      "B": "This does not appear to be business competition.",
      "D": "The attack is intentional, not accidental."
},
    examTip: "Hacktivists are often motivated by ideology, social causes, or political statements."},
  {
    id: "L02-Q007",
    difficulty: "Hard",
    domain: "Hackers and Hacktivists",
    objective: "2.4 Compare hackers and hacktivists",
    mapping: "SY0-701 Objective 2.4 - Hacker categories and motivations",
    scenario: "A website outage is caused by an attacker who claimed credit on social media for protesting a controversial law. The attack used common DDoS tools. Which label fits this actor best?",
    choices: [
      "A. Nation-state",
      "B. Hacktivist",
      "C. Insider",
      "D. Competitor"
],
    correctAnswer: "B",
    explanation: "A social protest using publicly claimed DDoS tools aligns with hacktivist behavior.",
    incorrect: {
      "A": "Nation-state actors usually operate covertly and strategically, not for public protest.",
      "C": "No internal access is indicated.",
      "D": "There is no business competition motive."
},
    examTip: "Hacktivists often use visible tactics to further ideological goals."},
  {
    id: "L02-Q008",
    difficulty: "Expert",
    domain: "Nation-State Actors",
    objective: "2.5 Describe nation-state actor characteristics",
    mapping: "SY0-701 Objective 2.5 - Nation-state and advanced actors",
    scenario: "A defense contractor finds that its supply chain partners were targeted with custom malware and long-term credential harvesting. Which characteristic strongly suggests a nation-state actor?",
    choices: [
      "A. Use of commodity ransomware",
      "B. Short-lived opportunistic attacks",
      "C. Strategic, custom tooling aimed at sensitive targets",
      "D. Random scanning of internet hosts"
],
    correctAnswer: "C",
    explanation: "Custom tooling and targeting of sensitive defense supply chain partners are hallmarks of nation-state actors.",
    incorrect: {
      "A": "Commodity ransomware is more common with criminal groups.",
      "B": "Nation-state activity is usually persistent and strategic, not opportunistic.",
      "D": "Random scanning is typical of low-level attackers, not nation-states."
},
    examTip: "Long-term, strategic targeting of high-value assets suggests advanced nation-state capability."},
  {
    id: "L02-Q009",
    difficulty: "Hard",
    domain: "Organized Crime and Competitors",
    objective: "2.6 Differentiate organized crime and competitor threats",
    mapping: "SY0-701 Objective 2.6 - Organized crime and competitor tactics",
    scenario: "A competitor pays an insider to copy confidential pricing models for market advantage. Which threat actor type does this describe?",
    choices: [
      "A. Nation-state",
      "B. Hacktivist",
      "C. Competitor-sponsored insider",
      "D. Accidental insider"
],
    correctAnswer: "C",
    explanation: "A competitor-sponsored insider is an internal actor working on behalf of a business rival, distinct from organized crime or nation-state motives.",
    incorrect: {
      "A": "A nation-state is unlikely to be involved in industrial pricing theft.",
      "B": "Hacktivists are ideologically motivated, not financially motivated by competitors.",
      "D": "This is intentional insider theft, not accidental."
},
    examTip: "Competitor threats often involve economic espionage or insiders selling proprietary data."},
  {
    id: "L02-Q010",
    difficulty: "Medium",
    domain: "Internal Threats",
    objective: "2.7 Describe internal threat actors and risks",
    mapping: "SY0-701 Objective 2.7 - Insider threats and controls",
    scenario: "A departing employee copies customer lists and emails a personal account, claiming they need the data for a job search. Which type of threat actor is this?",
    choices: [
      "A. Malicious insider",
      "B. Hacktivist",
      "C. Nation-state agent",
      "D. Social engineer"
],
    correctAnswer: "A",
    explanation: "A departing employee misusing access for personal gain fits the malicious insider category.",
    incorrect: {
      "B": "There is no ideological motivation.",
      "C": "No foreign state sponsorship is present.",
      "D": "This is not a social engineering attack by an external actor."
},
    examTip: "Internal threats come from employees or contractors with legitimate access who abuse it."},
  {
    id: "L02-Q011",
    difficulty: "Medium",
    domain: "Attack Surface",
    objective: "3.1 Explain vulnerable software attack vectors",
    mapping: "SY0-701 Objective 3.1 - Software vulnerabilities and attack vectors",
    scenario: "A web application uses an outdated library with a publicly disclosed remote code execution flaw. Which attack surface is exposed?",
    choices: [
      "A. Network vector",
      "B. Vulnerable software vector",
      "C. Human vector",
      "D. Supply chain vector"
],
    correctAnswer: "B",
    explanation: "An outdated software library with an exploitable flaw exposes a vulnerable software vector.",
    incorrect: {
      "A": "This issue is primarily software vulnerability, not network exposure.",
      "C": "A human vector targets people, not software configuration.",
      "D": "Supply chain involves third-party components broadly, but the immediate issue is the software vulnerability."
},
    examTip: "Vulnerable software attack surface includes unpatched apps and insecure components."},
  {
    id: "L02-Q012",
    difficulty: "Medium",
    domain: "Attack Surface",
    objective: "3.2 Explain network attack vectors",
    mapping: "SY0-701 Objective 3.2 - Network attack surfaces",
    scenario: "A remote administration port is open on a firewall and uses a legacy protocol without encryption. Which attack surface does this primarily expose?",
    choices: [
      "A. Message-based vector",
      "B. Supply chain vector",
      "C. Network vector",
      "D. Human vector"
],
    correctAnswer: "C",
    explanation: "An exposed remote management port with a weak protocol is a network attack surface.",
    incorrect: {
      "A": "This is not a message-based attack.",
      "B": "Supply chain is unrelated to exposed network services.",
      "D": "It is not primarily a human-targeted attack vector."
},
    examTip: "Network attack surface often includes exposed ports, insecure services, and weak remote access."},
  {
    id: "L02-Q013",
    difficulty: "Medium",
    domain: "Attack Surface",
    objective: "3.3 Explain lure-based attack vectors",
    mapping: "SY0-701 Objective 3.3 - Lure-based attack surfaces",
    scenario: "An employee finds a USB drive labeled \"Salary Bonuses\" in the parking lot and inserts it into their workstation. What type of attack surface is this?",
    choices: [
      "A. Lure-based vector",
      "B. Supply chain vector",
      "C. Network vector",
      "D. Message-based vector"
],
    correctAnswer: "A",
    explanation: "This is a lure-based vector: a physical bait designed to entice the victim into executing malicious content.",
    incorrect: {
      "B": "This is not a supply chain issue.",
      "C": "It is not a network-based attack.",
      "D": "No message or email is involved."
},
    examTip: "Lure-based attacks use enticing items like USB drives or offers to trigger user interaction."},
  {
    id: "L02-Q014",
    difficulty: "Medium",
    domain: "Attack Surface",
    objective: "3.4 Explain message-based attack vectors",
    mapping: "SY0-701 Objective 3.4 - Email and messaging attack surfaces",
    scenario: "Employees receive an email claiming to be from IT that asks them to click a link to reset their password. Which attack surface is being exploited?",
    choices: [
      "A. Network vector",
      "B. Message-based vector",
      "C. Supply chain vector",
      "D. Physical vector"
],
    correctAnswer: "B",
    explanation: "A malicious email asking users to click a link exploits a message-based vector.",
    incorrect: {
      "A": "This attack uses a message channel, not a network service directly.",
      "C": "Supply chain relates to third-party components, not an email lure.",
      "D": "Physical vector is unrelated to email attacks."
},
    examTip: "Message-based attacks commonly use email, SMS, and chat as delivery mechanisms."},
  {
    id: "L02-Q015",
    difficulty: "Hard",
    domain: "Attack Surface",
    objective: "3.5 Explain supply chain attack surface",
    mapping: "SY0-701 Objective 3.5 - Supply chain security",
    scenario: "A popular software update distribution channel is compromised and pushes malware to many customers. Which attack surface does this reflect?",
    choices: [
      "A. Lure-based vector",
      "B. Supply chain attack surface",
      "C. Human vector",
      "D. Network sniffing"
],
    correctAnswer: "B",
    explanation: "A compromised update channel is a supply chain attack surface issue because the malicious code is delivered through a trusted vendor process.",
    incorrect: {
      "A": "This is not a lure or bait scenario.",
      "C": "The attack is delivered through the supply chain, not directly through human manipulation.",
      "D": "Network sniffing is not the primary issue here."
},
    examTip: "Supply chain attacks exploit third-party components or distribution processes."},
  {
    id: "L02-Q016",
    difficulty: "Hard",
    domain: "Attack Surface",
    objective: "3.1 Explain vulnerable software attack vectors",
    mapping: "SY0-701 Objective 3.1 - Software vulnerabilities and attack vectors",
    scenario: "A cloud service exposes several APIs with weak authentication and known security flaws. Which mitigation most directly reduces this attack surface?",
    choices: [
      "A. Disable the exposed APIs until secure access is implemented",
      "B. Provide developer security awareness training",
      "C. Increase workstation antivirus coverage",
      "D. Encrypt email traffic"
],
    correctAnswer: "A",
    explanation: "Removing or disabling insecure, exposed APIs reduces the attack surface immediately.",
    incorrect: {
      "B": "Training is useful, but it does not immediately remove the insecure API.",
      "C": "Antivirus does not protect exposed API endpoints.",
      "D": "Email encryption is unrelated to API security."
},
    examTip: "If an exposed service is vulnerable, taking it offline until it is secured is often the best immediate control."},
  {
    id: "L02-Q017",
    difficulty: "Medium",
    domain: "Attack Surface",
    objective: "3.2 Explain network attack vectors",
    mapping: "SY0-701 Objective 3.2 - Network attack surfaces",
    scenario: "An enterprise router allows remote management over the internet with default credentials. What should be changed first to reduce this network attack surface?",
    choices: [
      "A. Update the default credentials and restrict remote management to a VPN",
      "B. Conduct phishing training for remote users",
      "C. Disable USB ports on the router",
      "D. Install a new web application firewall"
],
    correctAnswer: "A",
    explanation: "Securing remote management and removing default credentials reduces the exposed network attack surface.",
    incorrect: {
      "B": "Training does not address the exposed router management interface.",
      "C": "USB ports are not the main issue for remote network management.",
      "D": "A WAF is not the first fix for an insecure router interface."
},
    examTip: "Network exposure is reduced by tightening access to management interfaces and removing insecure defaults."},
  {
    id: "L02-Q018",
    difficulty: "Medium",
    domain: "Attack Surface",
    objective: "3.4 Explain message-based attack vectors",
    mapping: "SY0-701 Objective 3.4 - Email and messaging attack surfaces",
    scenario: "A company is hit by an attack that starts with a text message containing a malicious link to a fake login page. What vector is this?",
    choices: [
      "A. Network vector",
      "B. Message-based vector",
      "C. Supply chain vector",
      "D. Physical vector"
],
    correctAnswer: "B",
    explanation: "A malicious SMS message is a message-based vector, similar to phishing via email.",
    incorrect: {
      "A": "This attack uses messaging, not direct network exploitation.",
      "C": "Supply chain is not involved in the SMS lure.",
      "D": "Physical vector is unrelated to SMS messages."
},
    examTip: "Message-based vectors include phishing via email, SMS, and instant messaging."},
  {
    id: "L02-Q019",
    difficulty: "Hard",
    domain: "Attack Surface",
    objective: "3.5 Explain supply chain attack surface",
    mapping: "SY0-701 Objective 3.5 - Supply chain security",
    scenario: "A hardware vendor ships devices with preinstalled firmware from a subcontractor, and that firmware contains a hidden backdoor. Which surface is compromised?",
    choices: [
      "A. Human vector",
      "B. Supply chain attack surface",
      "C. Lure-based vector",
      "D. Message-based vector"
],
    correctAnswer: "B",
    explanation: "Preinstalled malicious firmware from a subcontractor reflects a supply chain attack surface compromise.",
    incorrect: {
      "A": "This issue is about the supplier, not human interaction.",
      "C": "No bait or lure is used directly.",
      "D": "No messaging channel is part of this scenario."
},
    examTip: "Supply chain risk can come from hardware, firmware, or software acquired from third parties."},
  {
    id: "L02-Q020",
    difficulty: "Expert",
    domain: "Attack Surface",
    objective: "3.1 Explain vulnerable software attack vectors",
    mapping: "SY0-701 Objective 3.1 - Software vulnerabilities and attack vectors",
    scenario: "A SaaS provider has multiple integrations with third-party plugins, one of which is outdated and exploitable. Which control best reduces the attack surface?",
    choices: [
      "A. Disable or update the vulnerable plugin",
      "B. Increase password complexity for administrators",
      "C. Add more user training on phishing",
      "D. Publish service availability metrics"
],
    correctAnswer: "A",
    explanation: "Removing or updating the vulnerable plugin removes the software attack surface caused by the third-party component.",
    incorrect: {
      "B": "Password complexity does not address the vulnerable plugin.",
      "C": "Training does not fix the plugin vulnerability.",
      "D": "Metrics do not reduce the attack surface."
},
    examTip: "When a third-party software component is vulnerable, patching or removing it is the most direct attack surface reduction."},
  {
    id: "L02-Q021",
    difficulty: "Medium",
    domain: "Social Engineering",
    objective: "4.1 Describe human attack vectors",
    mapping: "SY0-701 Objective 4.1 - Human attack vectors and social engineering",
    scenario: "An employee is observed entering their password in a shared workspace and later the same credentials are used by an unauthorized person. What human attack vector was exploited?",
    choices: [
      "A. Tailgating",
      "B. Shoulder surfing",
      "C. Pharming",
      "D. Typosquatting"
],
    correctAnswer: "B",
    explanation: "Shoulder surfing involves observing sensitive information as it is entered, such as a password in a public area.",
    incorrect: {
      "A": "Tailgating involves following someone through a door.",
      "C": "Pharming involves DNS redirection to fake sites.",
      "D": "Typosquatting uses misspelled domains."
},
    examTip: "Human vectors often rely on direct observation or manipulation rather than technical exploits."},
  {
    id: "L02-Q022",
    difficulty: "Hard",
    domain: "Social Engineering",
    objective: "4.2 Explain impersonation and pretexting",
    mapping: "SY0-701 Objective 4.2 - Impersonation and pretexting",
    scenario: "An attacker calls the help desk pretending to be a manager with a fake maintenance emergency and asks for password reset assistance. What technique is this?",
    choices: [
      "A. Pretexting",
      "B. Phishing",
      "C. Baiting",
      "D. Pharming"
],
    correctAnswer: "A",
    explanation: "Pretexting involves creating a false identity and story to persuade someone to reveal information or grant access.",
    incorrect: {
      "B": "Phishing typically uses electronic messages rather than a phone-based story.",
      "C": "Baiting uses a physical lure, not a fabricated role.",
      "D": "Pharming manipulates DNS or web traffic, not phone impersonation."
},
    examTip: "Pretexting combines impersonation with a believable story to manipulate victims."},
  {
    id: "L02-Q023",
    difficulty: "Medium",
    domain: "Social Engineering",
    objective: "4.3 Explain phishing and pharming",
    mapping: "SY0-701 Objective 4.3 - Phishing and pharming techniques",
    scenario: "A user receives an email from what appears to be their bank asking them to click a link and confirm account details. Which attack is this?",
    choices: [
      "A. Pharming",
      "B. Phishing",
      "C. Typosquatting",
      "D. Vishing"
],
    correctAnswer: "B",
    explanation: "This is phishing: a deceptive email guiding the user to a fraudulent site to capture credentials.",
    incorrect: {
      "A": "Pharming involves DNS redirection or corrupted hosts, not just a malicious email link.",
      "C": "Typosquatting depends on misspelled domains, not the email lure itself.",
      "D": "Vishing is voice phishing over the phone."
},
    examTip: "Phishing uses deceptive messages and links to trick users into revealing data."},
  {
    id: "L02-Q024",
    difficulty: "Medium",
    domain: "Social Engineering",
    objective: "4.4 Explain typosquatting",
    mapping: "SY0-701 Objective 4.4 - Typosquatting and malicious domains",
    scenario: "A user types \"securebank.com\" but lands on \"securbank.com\" and enters login credentials. Which technique is this?",
    choices: [
      "A. Pharming",
      "B. Typosquatting",
      "C. Pretexting",
      "D. Tailgating"
],
    correctAnswer: "B",
    explanation: "Typosquatting relies on users mistyping domain names and landing on malicious lookalike sites.",
    incorrect: {
      "A": "Pharming manipulates DNS or routing, not necessarily typographical errors.",
      "C": "Pretexting uses a fabricated story or identity.",
      "D": "Tailgating is a physical access technique."
},
    examTip: "Typosquatting is a domain-based attack that exploits user typing mistakes."},
  {
    id: "L02-Q025",
    difficulty: "Hard",
    domain: "Social Engineering",
    objective: "4.5 Describe business email compromise",
    mapping: "SY0-701 Objective 4.5 - Business email compromise",
    scenario: "An employee receives an urgent invoice from a vendor asking to redirect payment to a new account. The email appears to come from a legitimate contact but the reply-to address is different. What is this attack?",
    choices: [
      "A. Phishing",
      "B. Business email compromise",
      "C. Watering hole",
      "D. Typosquatting"
],
    correctAnswer: "B",
    explanation: "This is business email compromise, where attackers spoof or compromise email to trick victims into changing payment details.",
    incorrect: {
      "A": "While related, BEC specifically targets business processes and payments.",
      "C": "Watering hole attacks compromise legitimate sites frequented by the target audience.",
      "D": "Typosquatting is about misspelled domains, not payment diversion emails."
},
    examTip: "BEC attacks impersonate trusted contacts and focus on fraudulent wire transfers or payment changes."},
  {
    id: "L02-Q026",
    difficulty: "Medium",
    domain: "Social Engineering",
    objective: "4.1 Describe human attack vectors",
    mapping: "SY0-701 Objective 4.1 - Human attack vectors and social engineering",
    scenario: "An attacker leaves a printed memo that says \"Free gift cards in the break room\" with a QR code leading to a sign-in page. Which type of social engineering is this?",
    choices: [
      "A. Pretexting",
      "B. Baiting",
      "C. Tailgating",
      "D. Pharming"
],
    correctAnswer: "B",
    explanation: "Baiting uses a tempting offer to lure victims into taking an unsafe action, such as scanning a QR code.",
    incorrect: {
      "A": "Pretexting involves a fabricated story or identity.",
      "C": "Tailgating involves following someone into a secure area.",
      "D": "Pharming involves DNS or routing attacks, not physical bait."
},
    examTip: "Baiting is a human vector that uses a physical or digital lure to trick victims."},
  {
    id: "L02-Q027",
    difficulty: "Hard",
    domain: "Social Engineering",
    objective: "4.2 Explain impersonation and pretexting",
    mapping: "SY0-701 Objective 4.2 - Impersonation and pretexting",
    scenario: "An attacker impersonates a senior executive and sends an urgent request to HR asking for employee salary details. What control most directly mitigates this type of attack?",
    choices: [
      "A. Strong spam filtering",
      "B. A verified request procedure for sensitive data",
      "C. Increased antivirus protection",
      "D. Domain whitelisting"
],
    correctAnswer: "B",
    explanation: "A verified request procedure ensures that sensitive data requests are validated through trusted channels before disclosure.",
    incorrect: {
      "A": "Spam filtering may not catch a credible impersonation email.",
      "C": "Antivirus does not prevent social engineering requests.",
      "D": "Whitelisting does not validate the authenticity of the request."
},
    examTip: "Impersonation attacks are best mitigated by processes that verify identity before fulfilling requests."},
  {
    id: "L02-Q028",
    difficulty: "Medium",
    domain: "Social Engineering",
    objective: "4.3 Explain phishing and pharming",
    mapping: "SY0-701 Objective 4.3 - Phishing and pharming techniques",
    scenario: "Users type the correct URL for their bank but are redirected to a fake site because DNS resolution has been altered. What attack is this?",
    choices: [
      "A. Phishing",
      "B. Pharming",
      "C. Typosquatting",
      "D. Vishing"
],
    correctAnswer: "B",
    explanation: "Pharming redirects users to malicious sites through DNS or routing manipulation even if the correct URL is entered.",
    incorrect: {
      "A": "Phishing usually involves deceptive messages or links.",
      "C": "Typosquatting relies on typed mistakes, not DNS manipulation.",
      "D": "Vishing is voice-based social engineering."
},
    examTip: "Pharming affects DNS or host resolution, sending users to fraudulent sites without requiring a wrong URL."},
  {
    id: "L02-Q029",
    difficulty: "Hard",
    domain: "Social Engineering",
    objective: "4.5 Describe business email compromise",
    mapping: "SY0-701 Objective 4.5 - Business email compromise",
    scenario: "An attacker compromises an executive email account and instructs finance to wire funds to a fraudulent account. What additional control would most reduce this risk?",
    choices: [
      "A. Multifactor authentication for email accounts",
      "B. Disabling external email",
      "C. Enforcing password changes every 30 days",
      "D. Installing a new firewall"
],
    correctAnswer: "A",
    explanation: "MFA makes it harder for attackers to use a compromised email account to send fraudulent payment requests.",
    incorrect: {
      "B": "Disabling external email is impractical for most businesses.",
      "C": "Frequent password changes do not stop account compromise as effectively as MFA.",
      "D": "A firewall does not prevent email account compromise."
},
    examTip: "MFA is a strong control for protecting email accounts from unauthorized access."},
  {
    id: "L02-Q030",
    difficulty: "Expert",
    domain: "Social Engineering",
    objective: "4.1 Describe human attack vectors",
    mapping: "SY0-701 Objective 4.1 - Human attack vectors and social engineering",
    scenario: "A contractor is greeted by someone claiming to be a delivery driver with a clipboard and asks them to sign for a package at the secure entrance. Which social engineering tactic was used?",
    choices: [
      "A. Pretexting",
      "B. Phishing",
      "C. Typosquatting",
      "D. Tailgating"
],
    correctAnswer: "A",
    explanation: "The attacker used a pretext of being a delivery driver to gain trust. They combined impersonation with a believable story.",
    incorrect: {
      "B": "Phishing is electronic, not a face-to-face deception.",
      "C": "Typosquatting relates to domains.",
      "D": "Tailgating is following someone through a door, but the underlying tactic here is pretexting by impersonation."
},
    examTip: "Pretexting uses a plausible scenario and identity to bypass normal verification procedures."}
];
