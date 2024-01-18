const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`

export async function fetchWord(word: string) {
  try {
    const response = await fetch(`${URL}${word}`);
    const data = await response.json();

    // If no words are found
    if (response.status === 404) {
      return response.status;
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}
