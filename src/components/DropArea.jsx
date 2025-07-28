import { useState } from 'react'
import PropTypes from 'prop-types';
import "./DropArea.css";

const DropArea = ({ onDrop }) => {
    const [ShowDrop, setShowDrop] = useState(false);
  return (
    <section 
    onDragEnter={() => setShowDrop(true)} 
    onDragLeave={() => setShowDrop(false)} 
    onDrop={(e) => {
        e.preventDefault();
        onDrop();
        setShowDrop(false)
    }}
    onDragOver={(e) => e.preventDefault()}
    className={ShowDrop ? 'drop_area' : 'hide_drop'}>
        Drop here
    </section>
  )
}

DropArea.propTypes = {
    onDrop: PropTypes.func.isRequired,
};

export default DropArea
