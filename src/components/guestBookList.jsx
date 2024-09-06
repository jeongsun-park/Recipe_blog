import PropTypes from "prop-types";

export default function GuestBookList({ contents }) {
  return (
    <ul className="guestBookList-ul">
      {contents.map((content, index) => {
        return (
          <li key={index} className="guestBookList-li">
            {content}
          </li>
        );
      })}
    </ul>
  );
}

GuestBookList.propTypes = {
  contents: PropTypes.array.isRequired,
};
