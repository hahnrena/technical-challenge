import { ArrowDown } from "lucide-react";

const arrowStyle = {
  display: "flex",
  justifyContent: "center",
  color: "#94a3b8",
  margin: "16px 0",
};

export function Arrow() {
  return (
    <div style={arrowStyle} aria-hidden="true">
      <ArrowDown size={40} strokeWidth={2} />
    </div>
  );
}
