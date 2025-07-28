import PropTypes from "prop-types";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        Urgent: { backgroundColor: "#ff4d4d" }, // bright red
        High: { backgroundColor: "#ff944d" }, // orange red
        Medium: { backgroundColor: "#ffd24d" }, // yellow
        Low: { backgroundColor: "#4dff88" }, // green
        default: { backgroundColor: "#f9f9f9" },
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

Tag.propTypes = {
    tagName: PropTypes.string.isRequired,
    selectTag: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
};

export default Tag;
