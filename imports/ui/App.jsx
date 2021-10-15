import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import FormDialog from "./FormDialog.jsx";
import BasicMenu from "./BasicMenu.jsx";

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <FormDialog />
    <BasicMenu />
  </div>
);
