import { screen } from '@testing-library/react';
import{renderTheme} from '../../../theme/render-theme'
import {Input} from './Input'
describe('<Input/>', () => {

	it('should have a value of searchValue', () => {

renderTheme(<Input type='text' name='load more'   />)

		 const button = screen.getByRole('input', { name: /load more/i });
		expect(button).toBeDisabled();
	   });








});
