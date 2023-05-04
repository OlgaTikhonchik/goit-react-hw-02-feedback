import PropTypes from 'prop-types';
import { OptionsList, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => {
        return (
          <li key={option}>
            <OptionButton
              type="button"
              value={option}
              children={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </OptionButton>
          </li>
        );
      })}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

// <div>
//   <button className={css.button} type="button" name="Good">
//     Good
//   </button>
//   <button className={css.button} type="button" name="Neutral">
//     Neutral
//   </button>
//   <button className={css.button} type="button" name="Bad">
//     Bad
//   </button>
// </div>
