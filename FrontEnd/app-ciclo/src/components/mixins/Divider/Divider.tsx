import PropTypes from "prop-types";

const Divider = (props: any) => {
  const {
    vertical,
    size,
    otherSize,
    color,
    className,
    inherit,
    style,
    colored,
  } = props;

  // const dividerClasses = cn({
  // [styles.colored]: colored,
  //  });

  const heightInherit = inherit ? "inherit" : `${size}px`;

  // Revisar size cuando maquetemos
  return (
    <div
      className={(className as string, `${colored}:`)}
      style={{
        width: vertical ? otherSize || "1px" : `${size}%`,
        // border: `1px solid ${color}`,
        height: vertical ? heightInherit : "1px",
        backgroundColor: colored ? "" : color,
        ...style,
      }}
    />
  );
};

Divider.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  otherSize: PropTypes.string,
  vertical: PropTypes.bool,
  inherit: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  colored: PropTypes.bool,
};

Divider.defaultProps = {
  size: 100,
  color: "var(--color-grey-light)",
  otherSize: "",
  vertical: false,
  inherit: false,
  className: "",
  style: {},
  colored: false,
};

export default Divider;
