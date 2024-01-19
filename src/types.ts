export type FetchedDataType = Promise<void | number>;

interface DefinitionInterface {
  definition: string;
  example: string;
}

interface MeaningInterface {
  partOfSpeech: string;
  definitions: DefinitionInterface[];
  synonyms: string[];
  antonyms: string[];
}

export interface PhoneticsInterface {
  text: string;
  audio: string;
}

export type DictionaryType = {
  word: string;
  meanings: MeaningInterface[];
  phonetics: PhoneticsInterface[];
};
