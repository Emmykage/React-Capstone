import Home from "../pages/Home";
import store from "../../redux/configureStore/configureStore";
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";


it('Movie category renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
    <Provider store={store}>
    <Home />
    </Provider>
 
  </BrowserRouter>
  
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
