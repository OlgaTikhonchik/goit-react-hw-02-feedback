import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              value={option}
              children={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
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
