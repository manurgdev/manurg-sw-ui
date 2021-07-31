import SithIcon from '../../public/icons/sith.svg';
import JediIcon from '../../public/icons/jedi.svg';
import { ToggleButton, ToggleContainer, ToggleText } from './Toggle.styles';
import Image from 'next/image';

export function Toggle({ theme, toggleTheme }: { theme: string; toggleTheme: string | (() => void) }) {
  const isLight = theme === 'light';
  return (
    <ToggleContainer>
      <ToggleText>{isLight ? 'Jedi Force' : 'Sith Dark Side'}</ToggleText>
      <ToggleButton lightTheme={isLight} onClick={toggleTheme as () => void}>
        <Image src={JediIcon} alt="A Jedi" />
        <Image src={SithIcon} alt="A Sith" />
      </ToggleButton>
    </ToggleContainer>
  );
}
