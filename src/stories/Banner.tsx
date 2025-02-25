import React, { PropsWithChildren } from "react";

interface BannerProps {
  variant: "info" | "congrats" | "documentation" | "danger";
}
const Banner: React.FC<PropsWithChildren<BannerProps>> = ({
  children,
}) => {
  return <aside> {children} </aside>;
};

export default Banner;
