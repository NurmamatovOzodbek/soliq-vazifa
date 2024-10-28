import PropTypes from "prop-types";
export function Button({ title, icon, btnClass, titleClass }) {
  return (
    <button
      className={`flex items-center justify-between gap-x-2 border-0 ${btnClass}`}
    >
      <span className={titleClass}>{title}</span>
      <div>{icon}</div>
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.node,
};
