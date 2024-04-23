/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
export const Suggestions = ({ data }) => {
  return <ul>{
    data && data.length ? data.map((item,index) => <li key={index}>()</li>)
    }</ul>;
};
