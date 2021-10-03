import { connect } from "react-redux";
import { filterAnc } from "../reducers/filterReducer";

const AnecdoteFilter = (props) => {
  return (
    <>
      <h2>filter</h2>
      <input onChange={(e) => props.filterAnc(e.target.value)} />
    </>
  );
};

export default connect(null, { filterAnc })(AnecdoteFilter);
