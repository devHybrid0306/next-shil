import React from "react";
import styled from "styled-components";

const TotalShilledValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .shilled-title {
    color: #000;
    font-size: 16px;
    line-height: 18px;
    text-transform: capitalize;
  }

  .shilled-value {
    color: #000;
    font-size: 64px;
    font-weight: bold;
  }
`;

interface TotalShilledValueProps {
  title: string;
  value: number;
}

const TotalShilledValue = ({ title, value }: TotalShilledValueProps) => {
  return (
    <TotalShilledValueContainer>
      <div className="shilled-title">{title}</div>
      <div className="shilled-value">{`${value}M`}</div>
    </TotalShilledValueContainer>
  );
};

export default TotalShilledValue;
