import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  margin: 0px;
  padding: 0px;

  list-style: none;
  flex-direction: column;
`;

export const StatisticsItem = styled.li`
  color: #441d44;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 10px;
`;

export const Span = styled.span`
  margin-left: 10px;
`;
