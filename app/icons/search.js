import { number, string } from 'prop-types';

const Search = ({ className, color, size, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="10" cy="10" r="7" />
    <line x1="21" y1="21" x2="15" y2="15" />
  </svg>
);

Search.propTypes = {
  className: string,
  color: string,
  size: number,
  stroke: number,
};

Search.defaultProps = {
  className: null,
  color: '#000000',
  size: 24,
  stroke: 2,
};

export default Search;
