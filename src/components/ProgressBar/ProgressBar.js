/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <div
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar style={{ "--width": value + "%" }} />
    </div>
  );
};

const Bar = styled.div`
  width: var(--width);
  height: 8px;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
