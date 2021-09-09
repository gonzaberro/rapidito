import { number, string } from 'prop-types';

const QuestionMark = ({ className, color, size, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
    <line x1="12" y1="19" x2="12" y2="19.01" />
  </svg>
);

QuestionMark.propTypes = {
  className: string,
  color: string,
  size: number,
  stroke: number,
};

QuestionMark.defaultProps = {
  className: null,
  color: '#000000',
  size: 60,
  stroke: 2,
};

export default QuestionMark;
