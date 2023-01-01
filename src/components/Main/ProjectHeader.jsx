import styled from "styled-components";
import ButtonContact from "../ButtonContact";

const ProjectHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;
const HeaderTitleStyle = styled.h1``;

function ProjectHeader() {
  return (
    <ProjectHeaderStyle>
      <HeaderTitleStyle>Projects</HeaderTitleStyle>
      <ButtonContact />
    </ProjectHeaderStyle>
  );
}

export default ProjectHeader;
