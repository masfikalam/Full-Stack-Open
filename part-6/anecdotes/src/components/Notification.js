import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  const style = {
    padding: 10,
    marginTop: 50,
    borderWidth: 1,
    border: "solid",
    borderRadius: 8,
  };

  return notification ? (
    <>
      <div style={style}>{notification}</div>
    </>
  ) : (
    ""
  );
};

export default Notification;
