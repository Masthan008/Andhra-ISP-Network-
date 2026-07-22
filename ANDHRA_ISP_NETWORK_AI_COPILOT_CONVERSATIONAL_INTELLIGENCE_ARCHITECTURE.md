# ANDHRA ISP NETWORK
## Master AI Copilot, Conversational Intelligence & Knowledge Assistant Architecture
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 11 — Conversational AI & Copilot Architecture (Prompt 2)  
**Classification:** Conversational AI, Knowledge Retrieval, RAG & Natural Language Systems  
**Author:** Principal AI Solutions Architect, Conversational AI Architect, & Prompt Engineering Specialist  
**Target Platform:** Production Systems (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & AI Copilot Vision

The **Andhra ISP Network Master AI Copilot, Conversational Intelligence & Knowledge Assistant Architecture** defines the conversation state managers, 13-stage message processing lifecycles, multilingual NLU engines, role-aware decision support cards, hallucination guardrails, and conversation telemetry pipelines.

Engineered to assist **citizens, ISP managers, and platform administrators through natural language interactions across 26 districts of Andhra Pradesh**, the AI Copilot guarantees role-isolated responses, sub-1.2s response latency, and complete explainability.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                     ENTERPRISE AI COPILOT PLATFORM ARCHITECTURE                   |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Subsystem Domain  | Architecture & Engineering Standard                           |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| Conversational UI | Floating Glassmorphic Copilot Drawer / Modal + Speech Audio   |
| Message Pipeline  | 13-Stage Engine (Safety Check -> NLU -> Context -> RAG -> HITL)|
| Role Awareness    | Strict Role Isolation (`SUPER_ADMIN`, `DISTRICT_ADMIN`, `USER`)|
| Multilingual      | Auto-Language Detection (English, Telugu, Hindi Support)      |
| Hallucination Guard| Confidence Threshold (> 0.85 Direct, 0.60-0.85 Clarify, < 0.60)|
| Feedback System   | Thumbs Up/Down Rating + Correction Audit Queue for Low Scores |
| Privacy & Memory  | Ephemeral Chat Memory + User-Initiated Data Erasure Workflow  |
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 2. The 13-Stage End-to-End Conversation Workflow

```
[ 1. User Message ] -> [ 2. Input Validation ] -> [ 3. Safety Evaluation ] -> [ 4. Intent Classify ]
                                                                                       │
                                                                                       ▼
[ 8. Response Plan ] <- [ 7. Policy Check ] <- [ 6. RAG Retrieval ] <- [ 5. Context Collect ]
        │
        ▼
[ 9. Generation ] -> [ 10. Confidence Score ] -> [ 11. Delivery ] -> [ 12. Feedback ] -> [ 13. Audit Log ]
```

---

## 3. Confidence Threshold & Hallucination Defense Strategy

```
+-----------------------------------------------------------------------------------+
|                        CONFIDENCE SCORE RESPONSE MATRIX                           |
+-------------------+----------------------------+----------------------------------+
| Confidence Range  | System Decision            | Output Behavior Example          |
+-------------------+----------------------------+----------------------------------+
| High (> 0.85)     | Direct Authoritative Answer| "ACT Fibernet offers 500Mbps FTTH|
|                   |                            | in Visakhapatnam for ₹999/mo."   |
+-------------------+----------------------------+----------------------------------+
| Medium (0.60-0.85)| Clarification Request      | "Did you mean Gajuwaka Mandal in |
|                   |                            | Visakhapatnam District?"         |
+-------------------+----------------------------+----------------------------------+
| Low (< 0.60)      | Graceful Fallback          | "I couldn't verify that data.    |
|                   |                            | Click here for Verified Providers|
+-------------------+----------------------------+----------------------------------+
```

---

## 4. Role-Aware Admin Copilot & Decision Support Cards

```
+-----------------------------------------------------------------------------------+
|                      ROLE-AWARE ADMIN COPILOT CAPABILITY MATRIX                   |
+-------------------+----------------------------+----------------------------------+
| Role Type         | Allowed Assistant Scope    | Decision Support Output Example  |
+-------------------+----------------------------+----------------------------------+
| `SUPER_ADMIN`     | Full Platform Telemetry    | "Search volume in Vizag increased|
|                   | & Provider Verifications   | 24% this week. 3 ISPs pending."  |
+-------------------+----------------------------+----------------------------------+
| `DISTRICT_ADMIN`  | Assigned District Scope    | "Guntur Mandal 4 coverage data   |
|                   | & Mandal Summaries         | is 95% complete. 2 villages left"|
+-------------------+----------------------------+----------------------------------+
| `CITIZEN_USER`    | Public ISP Discovery       | "Top 3 rated FTTH providers near |
|                   | & Saved Search Updates     | your saved PIN code 530026."     |
+-------------------+----------------------------+----------------------------------+
```

---

## 5. Modular Copilot Architecture (`apps/api/src/modules/copilot/`)

```
apps/api/src/modules/copilot/
├── conversations/
│   ├── conversation-manager.service.ts  # Session state & chat thread coordinator
│   └── ephemeral-memory-store.ts        # Redis sliding-window chat history
├── intents/
│   └── intent-classifier.service.ts     # Natural language intent detection engine
├── context/
│   └── user-context-resolver.ts         # User role, active district & search state
├── responses/
│   ├── confidence-evaluator.service.ts  # Hallucination threshold validator
│   └── response-planner.service.ts      # Direct answer vs clarification router
├── safety/
│   └── prompt-injection-guard.ts        # Input sanitization & safety filter
└── copilot.module.ts                    # NestJS Copilot Injection Module
```

---
**[END OF MASTER AI COPILOT, CONVERSATIONAL INTELLIGENCE & KNOWLEDGE ASSISTANT ARCHITECTURE SPECIFICATION]**
