const baseCardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: 16,
  padding: "16px 8px",
  width: 344,
  height: 100,
  transition: "border 0.6s ease, box-shadow 0.6s ease",
};

const restingCardStyle = {
  ...baseCardStyle,
  border: "1px solid #e2e8f0",
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
};

const highlightedCardStyle = {
  ...baseCardStyle,
  border: "2px solid #6ee7b7",
  boxShadow: "0 0 0 3px rgba(110, 231, 183, 0.2)",
};

const headerRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  width: "100%",
  marginLeft: -8, // bleeds to card edge to give border-bottom full width
  marginRight: -8, // bleeds to card edge to give border-bottom full width
  marginBottom: 12,
  paddingLeft: 8,
  paddingRight: 8,
  paddingBottom: 12,
  borderBottom: "1px solid #e2e8f0",
};

const iconWrapStyle = {
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#475569",
};

const labelStyle = {
  fontSize: 14,
  fontWeight: 600,
  color: "#0f172a",
};

const questionRowStyle = {
  paddingBottom: 12
};

export function NodeCard({ categoryLabel, Icon, question, isHighlighted }) {
  const cardStyle = isHighlighted ? highlightedCardStyle : restingCardStyle;
  return (
    <article style={cardStyle}>
      <div style={headerRowStyle}>
        <div style={iconWrapStyle} aria-hidden="true">
          {Icon ? <Icon size={24} strokeWidth={2} /> : null}
        </div>
        <h2 style={{ ...labelStyle, margin: 0 }}>{categoryLabel}</h2>
      </div>

      <div style={questionRowStyle}>
        <p style={{ margin: 0 }}>{question}</p>
      </div>
    </article>
  );
}
