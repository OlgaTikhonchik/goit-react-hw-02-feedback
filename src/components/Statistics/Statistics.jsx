import PropTypes from 'prop-types';
// import { Notification } from 'components/Notification';
import { StatisticsList, StatisticsItem, Span } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        Good: <Span>{good}</Span>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <Span>{neutral}</Span>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <Span>{bad}</Span>
      </StatisticsItem>
      <StatisticsItem>
        Total: <Span>{total}</Span>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback: <Span>{positivePercentage}%</Span>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
