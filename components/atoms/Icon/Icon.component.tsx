/* eslint-disable @next/next/no-img-element */
import React, { HTMLAttributes } from "react";

//@ts-ignore
interface IconProps extends Partial<HTMLAttributes<HTMLImageElement>>, FontAwesomeIconProps {
  /** For accessibility and testing */
  title?: string;
  /** Fontawesome icon */
  size?: Size;
  /** Color for the icon; Must be in hexa code. i.e #eee | #333 */
  color?: "primary" | "secondary" | "white" | "gray" | `#${string}` | string;
  /** Custom styling for icon */
  style?: React.CSSProperties;
  /** Custom classname for icon */
  className?: string;
  /** If the Icon is an image element, then we need to pass it as children */
  children?: React.ReactNode;
  // handle onClick function
  onClick?: () => void;
}

function Icon(props: IconProps): JSX.Element {
  const { title, size, style, className, color, children, ...others } = props;
  return (
    <img
      src={`/icons/${children}.svg`}
      alt="icon"
      style={{
        width: size,
        height: size,
        ...style,
      }}
      className={className}
      {...(others as React.HTMLAttributes<HTMLImageElement>)}
    />
  );
}

export default Icon;
