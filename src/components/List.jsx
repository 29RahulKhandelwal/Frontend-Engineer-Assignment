import React, { useState, useEffect, useCallback, memo } from "react";
import PropTypes from "prop-types";
import SingleListItem from "./SingleList";

const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  if (items === null || items.length === 0) {
    return null;
  }

  console.log(items)

  return (
    <ul>
      {items.map((item, index) => (
        <SingleListItem
          key={item.id}
          onClickHandler={handleClick}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
};

WrappedListComponent.defaultProps = {
  items:
  [
    {
     text:"Here is text 1",
     id:"1"
    },
    {
     text:"Here is text 2",
     id:"2"
    },
    {
     text:"Here is text 3",
     id:"3"
    },
    {
     text:"Here is text 4",
     id:"4"
    },
    {
     text:"Here is text 5",
     id:"5"
    }
   ]
};

const List = memo(WrappedListComponent);

export default List;