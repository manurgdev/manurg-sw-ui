import { VMCharacter, VMCharactersList } from './CharactersList.vm';
import {
  Card,
  CharacterCardInfo,
  CharacterCardInfoText,
  CharacterLink,
  CharactersWrapper,
  Grid,
  Loader,
  LoadMoreCharacters,
} from './CharactersList.styles';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function CharactersList({
  characters,
  totalCharacters,
  loadMoreCharacters,
}: {
  characters: VMCharacter[];
  totalCharacters: number;
  loadMoreCharacters: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleLoadMoreCharacters = () => {
    setLoading(true);

    loadMoreCharacters();
  };

  useEffect(() => {
    setLoading(false);
  }, [characters]);
  return (
    <CharactersWrapper>
      <Grid>
        {characters.map((character) => (
          <Card key={character.name}>
            <Link href={`/character/${character.id}`} passHref>
              <CharacterLink>{character.name}</CharacterLink>
            </Link>
            <CharacterCardInfo>
              <CharacterCardInfoText>{character.films.length} films</CharacterCardInfoText>
              <CharacterCardInfoText>birth year: {character.birthYear}</CharacterCardInfoText>
            </CharacterCardInfo>
          </Card>
        ))}
      </Grid>
      {loading ? (
        <Loader />
      ) : (
        characters.length !== totalCharacters && (
          <LoadMoreCharacters onClick={handleLoadMoreCharacters}>Load more</LoadMoreCharacters>
        )
      )}
    </CharactersWrapper>
  );
}
