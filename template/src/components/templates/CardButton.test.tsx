import React from 'react';
//import { render, screen } from '@testing-library/react';
import CardButton from './CardButton';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

const wrapper = shallow(<CardButton  loading name="helpdesk" onClick={() => {}}/>);

test('CardButton Rendered', () => {
  console.log("DEBUG:(" + wrapper.text() + ")")
  expect(wrapper.text()).toEqual('Helpdesk UserRead only access to all information. ')
  //const linkElement = screen.getByText(/Read/i);
  //expect(linkElement).toBeInTheDocument();
});
