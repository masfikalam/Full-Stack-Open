import { connect } from "react-redux";

const Notification = ({ notification }) => {
  const style = {
    padding: 10,
    marginTop: 50,
    borderWidth: 1,
    border: "solid",
    borderRadius: 8,
  };

  return notification ? <div style={style}>{notification}</div> : "";
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

export default connect(mapStateToProps)(Notification);
