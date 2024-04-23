/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
export const Suggestions = ({ data }) => {
  return (
    <ul>
      // eslint-disable-next-line react/prop-types
      {data && data.length
        ? data.map((item, index) => <li key={index}>{item}</li>)
        : null}
    </ul>
  );
};
