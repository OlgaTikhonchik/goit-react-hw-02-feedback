import PropTypes from 'prop-types';
import { SectionContainer, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};

Section.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
