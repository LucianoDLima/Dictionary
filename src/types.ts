export type FetchedDataType = Promise<void | number>

interface Definition {
  definition: string;
  example: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export type DictionaryType = {
  word: string;
  phonetic: string;
  meanings: Meaning[];
}