import styled from "@emotion/styled";
import React from "react";
import { Typography } from "./Typography";
import { MDBIcon } from "mdb-react-ui-kit";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rtl: boolean;
  collapsed: boolean;
  handleCollapse: Function;
}

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div<{ rtl?: boolean }>`
  width: 45px;
  min-width: 45px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  background-color: #009fdb;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  ${({ rtl }) =>
    rtl
      ? `
      margin-left: 10px;
      margin-right: 4px;
      `
      : `
      margin-right: 10px;
      margin-left: 4px;
      `}
`;

const Bar = styled.div`
width: 35px;
height: 1px;
background-color: black;
margin: 6px 0;
}
`;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  rtl,
  collapsed,
  handleCollapse,
  ...rest
}) => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="m-2">
          {!collapsed ? (
            <MDBIcon
              fas
              icon="bars"
              onClick={handleCollapse}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <MDBIcon
              fas
              icon="times"
              onClick={handleCollapse}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        <StyledLogo rtl={rtl}>UCI</StyledLogo>
        <Typography variant="body1" fontWeight={700} color="#0098e5">
          Admin Dashboard
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};
