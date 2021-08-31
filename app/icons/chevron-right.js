import { number, string } from 'prop-types';

const ChevronRight = ({ className, size, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

ChevronRight.propTypes = {
  className: string,
  size: number,
  stroke: number,
};

ChevronRight.defaultProps = {
  className: null,
  size: 44,
  stroke: 2,
};

export default ChevronRight;
