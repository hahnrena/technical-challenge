import { useState, useRef, useEffect } from "react";
import { Plus, Phone } from "lucide-react";
import {
  UserCheck,
  Shield,
  Calendar,
  DollarSign,
  Key,
  Network,
  FileText,
  PhoneCall,
} from "lucide-react";
import { Arrow } from "./Arrow";
import { NodeCard } from "./NodeCard";
import { PRESET_QUESTIONS } from "../data/presets";

const ICON_MAP = {
  UserCheck,
  Shield,
  Calendar,
  DollarSign,
  Key,
  Network,
  FileText,
  PhoneCall,
};

const initPillStyle = {
  display: "inline-block",
  padding: "6px 14px",
  borderRadius: 9999,
  fontSize: 13,
  fontWeight: 600,
  backgroundColor: "#dcfce7",
  color: "#166534",
};

const completePillStyle = {
  ...initPillStyle,
  backgroundColor: "#e2e8f0",
  color: "#475569",
};

const addButtonBaseStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 18px",
  backgroundColor: "#0f172a",
  color: "#f8fafc",
  border: "none",
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  opacity: 1,
};

const addButtonDisabledStyle = {
  cursor: "not-allowed",
  opacity: 0.4,
};


const headerStyle = {
  position: "sticky",
  top: 0,
  zIndex: 10,
  backgroundColor: "#f8fafc",
  borderBottom: "1px solid #e2e8f0",
  padding: "14px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const logoIconStyle = {
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: "#0f172a",
  color: "#f8fafc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const titleStyle = {
  fontSize: 18,
  fontWeight: 700,
  color: "#0f172a",
};

const flowStyle = {
  padding: "32px 24px 48px",
  backgroundColor: "#f8fafc",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
};

export function WorkflowBuilder() {
  const [nodes, setNodes] = useState(() =>
    PRESET_QUESTIONS.slice(0, 2).map((p, i) => ({ ...p, id: `node-${i}` }))
  );
  const [newNodeId, setNewNodeId] = useState(null);
  const nodeRefs = useRef({});
  const isMaxReached = nodes.length >= PRESET_QUESTIONS.length;
  const nextIndex = nodes.length;

  useEffect(() => {
    if (!newNodeId) return;
    const ref = nodeRefs.current[newNodeId];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollTimer = setTimeout(() => {
      if (ref) {
        ref.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" });
      }
    }, 50);
    const clearTimer = setTimeout(() => setNewNodeId(null), 600);
    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(clearTimer);
    };
  }, [newNodeId]);

  const addNode = () => {
    if (isMaxReached) return;
    const preset = PRESET_QUESTIONS[nextIndex];
    const newId = `node-${nodes.length}-${Date.now()}`;
    setNodes((prev) => [...prev, { ...preset, id: newId }]);
    setNewNodeId(newId);
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={logoStyle}>
          <div style={logoIconStyle} aria-hidden="true">
            <Phone size={22} strokeWidth={2} />
          </div>
          <h1 style={{ ...titleStyle, margin: 0 }}>Smarter Technologies</h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 14, color: "#64748b", fontWeight: 500 }}>
            {nodes.length} step{nodes.length !== 1 ? "s" : ""}
          </span>
          {isMaxReached && (
            <span style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>
              All steps added
            </span>
          )}
          <button
            type="button"
            style={{ ...addButtonBaseStyle, ...(isMaxReached ? addButtonDisabledStyle : {}) }}
            onClick={addNode}
            disabled={isMaxReached}
            aria-disabled={isMaxReached}
            aria-label="Add new question node"
          >
            <Plus size={18} strokeWidth={2.5} />
            Add Node
          </button>
        </div>
      </header>

      <main style={flowStyle} role="main">
        <span style={initPillStyle} aria-hidden="true">Call Initiated</span>
        <Arrow />

        <ol
          style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}
          
        >
          {nodes.map((node, index) => (
            <li
              key={node.id}
              ref={(el) => {
                nodeRefs.current[node.id] = el;
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 28,
              }}
              aria-label={`Step ${index + 1} of ${nodes.length}`}
            >
              <NodeCard
                categoryLabel={node.category}
                Icon={ICON_MAP[node.icon]}
                question={node.question}
                isHighlighted={node.id === newNodeId}
              />
              <Arrow />
            </li>
          ))}
        </ol>

        <span style={completePillStyle} aria-hidden="true">Call Complete</span>
      </main>
    </>
  );
}
