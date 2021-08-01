import { ICharacterVM } from './Characters.vm';
import { Card, CharacterCardInfo, CharacterCardInfoText, CharactersWrapper, Grid } from './Characters.styles';
import { Films } from '../films/Films';

export function Characters({ character }: { character: ICharacterVM }) {
  return (
    <CharactersWrapper>
      <Grid>
        <Card>
          <CharacterCardInfo>
            <CharacterCardInfoText>
              Height: <span>{character.height}</span>
            </CharacterCardInfoText>
          </CharacterCardInfo>
        </Card>
        <Card>
          <CharacterCardInfo>
            <CharacterCardInfoText>
              Mass: <span>{character.mass}</span>
            </CharacterCardInfoText>
          </CharacterCardInfo>
        </Card>
        <Card>
          <CharacterCardInfo>
            <CharacterCardInfoText>
              Hair color: <span>{character.hairColor}</span>
            </CharacterCardInfoText>
          </CharacterCardInfo>
        </Card>
        <Card>
          <CharacterCardInfo>
            <CharacterCardInfoText>
              Skin color: <span>{character.skinColor}</span>
            </CharacterCardInfoText>
          </CharacterCardInfo>
        </Card>
        <Card>
          <CharacterCardInfo>
            <CharacterCardInfoText>
              Eye color: <span>{character.eyeColor}</span>
            </CharacterCardInfoText>
          </CharacterCardInfo>
        </Card>
        <Card>
          <CharacterCardInfo>
            <CharacterCardInfoText>
              Birth year: <span>{character.birthYear}</span>
            </CharacterCardInfoText>
          </CharacterCardInfo>
        </Card>
        <Card>
          <CharacterCardInfo>
            <CharacterCardInfoText>
              Gender: <span>{character.gender}</span>
            </CharacterCardInfoText>
          </CharacterCardInfo>
        </Card>
      </Grid>
      <Films filmsUrl={character.films} />
    </CharactersWrapper>
  );
}
