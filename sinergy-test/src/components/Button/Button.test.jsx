import { fireEvent, screen, } from '@testing-library/react';
import {renderTheme} from '../../theme/render-theme'
import {Button} from '../Button/Button'

describe('<Button/>', () => {


	it('should render button with the test  "Load More"', () => {
		renderTheme(<Button  size='small'> Load More</Button>)

const button=screen.getByRole('button',{name: /load More/i});
expect.assertions(1);

expect(button).toBeInTheDocument();
});





it('should call function on button click', () => {
	const fn = jest.fn();
	renderTheme(<Button  click={fn} > Load More</Button>);


	const button=screen.getByRole('button',{name: /load More/i});


	fireEvent.click(button);

	expect(fn).toHaveBeenCalledTimes(1);
   });



});
