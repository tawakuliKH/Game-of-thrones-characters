const url = 'https://thronesapi.com/api/v2/Characters';

const getCharacters = async () => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export default getCharacters;