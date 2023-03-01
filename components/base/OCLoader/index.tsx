import * as React from "react";
import styled, { useTheme } from "styled-components";
import { ClimbingBoxLoader } from "react-spinners";

function GBLoader(): React.ReactElement {
  const theme = useTheme();

  return (
    <Container>
      <ClimbingBoxLoader color={theme.colors.main} />
    </Container>
  );
}

export default React.memo(GBLoader);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
