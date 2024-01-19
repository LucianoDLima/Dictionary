import { Dispatch, SetStateAction } from 'react';
import { FetchedDataType } from '../types';

const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

async function fetchData(word: string): FetchedDataType {
  try {
    const response = await fetch(`${URL}${word}`);
    const data = await response.json();

    // If any errors occur
    if (!response.ok) {
      return response.status;
    }
    
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function handleFetchedData(
  inputValue: string, 
  setDictionary: Dispatch<SetStateAction<number>>
  ):FetchedDataType {

  try {
    const fetchedData = await fetchData(inputValue);

    const noWord = fetchedData === 404;
    const unkownError = !fetchedData && fetchedData !== 200;

    if (noWord) {
      return fetchedData;
    }

    if(unkownError) {
      throw new Error('Unkown error');
    }

    setDictionary(fetchedData);
  } catch (error) {
    console.log(error);
  }
}
