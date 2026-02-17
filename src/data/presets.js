// Predefined questions to cycle through when adding nodes.
// Each has: category label, lucide icon name, question text.
export const PRESET_QUESTIONS = [
  {
    category: "Identity",
    icon: "UserCheck",
    question: "Can you confirm the patient's full legal name and date of birth?",
  },
  {
    category: "Insurance",
    icon: "Shield",
    question: "What is the active policy number and group ID for this patient?",
  },
  {
    category: "Coverage",
    icon: "Calendar",
    question: "What are the effective and termination dates of the current coverage?",
  },
  {
    category: "Benefits",
    icon: "DollarSign",
    question: "Can you outline the in-network deductible and out-of-pocket maximum?",
  },
  {
    category: "Auth",
    icon: "Key",
    question: "Is prior authorization required for the requested procedure code?",
  },
  {
    category: "Network",
    icon: "Network",
    question: "Is the referring provider in-network under the current plan?",
  },
  {
    category: "Claims",
    icon: "FileText",
    question: "Are there any outstanding claims or pending adjudications for this member?",
  },
  {
    category: "Escalation",
    icon: "PhoneCall",
    question: "If unresolved, what is the direct callback number for the claims department?",
  },
];
