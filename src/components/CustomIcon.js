import React from "react";
import { Colors, Metrics } from "../constants";

export default (props) => {
  let { color, icon: Icon, sm, rg, md, lg, xl, xxl, size, onClick, style } = props;
  let iconStyle = {
    fontSize: size
      ? size
      : sm
      ? Metrics.icon.sm
      : rg
      ? Metrics.icon.rg
      : md
      ? Metrics.icon.md
      : lg
      ? Metrics.icon.lg
      : xl
      ? Metrics.icon.xl
      : xxl
      ? Metrics.icon.xxl
      : Metrics.icon.xs,
    color: color ? color : 'primary',
  };

  return (
    <div>
      <Icon style={{...iconStyle, ...style}} onClick={onClick} />
    </div>
  );
};
