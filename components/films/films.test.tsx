import { render } from '../../test-utils/render';
import { Films } from '../../components/films/Films';
import { mockedFilmsUrl } from '../../__mocks__/mocks';

it('renders a film', () => {
  const { getByText } = render(<Films filmsUrl={mockedFilmsUrl} />);
  expect(getByText('Films')).toBeInTheDocument();
});
