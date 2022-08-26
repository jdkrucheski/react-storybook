import "./myLabel.css";

export interface MyLabelProps {
  /**
   * Message to display on the label
   */
  label: string;
  /**
   * Label size
   */
  size: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalized label
   */
  allCaps?: boolean;

  /**
   * Basic button colors
   */
  color?: "primary" | "secondary" | "tertiary";

  /**
   * Custom font color
   */
  fontColor?: string;

  /**
   * Custom font background color
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
