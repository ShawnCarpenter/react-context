export const getCharacters = async(page = 1) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/?perPage=20&page=6`);
  
  if(!res.ok)  throw 'Uh-oh, something done broked!';

  const json = await res.json();

  return json.map(character => ({
    _id:character._id,
    name:character.name,
    photoUrl:character.photoUrl
  }));
};
