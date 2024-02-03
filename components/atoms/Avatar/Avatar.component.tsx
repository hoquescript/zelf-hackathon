import React from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
  size?: Size;
  className?: string;
  status?: "hidden" | "online" | "offline";
}

const Avatar = (props: AvatarProps) => {
  const { src, size = "4rem", status = "hidden", className } = props;
  return (
    <figure
      className={`${styles.avatar} ${status !== "hidden" ? styles[status] : ""} ${className ?? ""}`}
      style={{ height: size, width: size, minWidth: size }}
    >
      <img className={styles.avatar__img} src={src && src !== "" ? src : "/default-user.jpg"} alt="Blending101 Logo" />
    </figure>
  );
};

export default Avatar;
