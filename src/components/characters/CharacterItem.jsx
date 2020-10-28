
import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, photoUrl }) => {
  return (
    <figure>
      <img src={photoUrl} alt={name} />
      <figcaption>
        {name}
      </figcaption>
    </figure>
  );
};

CharacterItem.propTypes = {
  name:PropTypes.string.isRequired,
  photoUrl:PropTypes.string.isRequired
};

export default CharacterItem;
