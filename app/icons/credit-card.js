import { number, string } from 'prop-types';

const CreditCard = ({ className, color, size, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="7" y1="15" x2="7.01" y2="15" />
    <line x1="11" y1="15" x2="13" y2="15" />
  </svg>
);

CreditCard.propTypes = {
  className: string,
  color: string,
  size: number,
  stroke: number,
};

CreditCard.defaultProps = {
  className: null,
  color: 'black',
  size: 16,
  stroke: 2,
};

export default CreditCard;
