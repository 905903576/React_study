import PropTypes from "prop-types";

const DemoOne = function DemoOne(props) {
  let { title, x } = props;
  console.log(title, x);
  return (
    <div className="demoBox">
      <h2 className="title">{title}</h2>
    </div>
  );
};

/* 通过把函数当做对象，设置静态的私有属性方法，来给其设置属性的校验规则 */
DemoOne.defaultProps = {
  x: 0,
};
DemoOne.propTypes = {
  title: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DemoOne;
