import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './NameForm';
import TextareaForm from './TextareaForm';
import SelectForm from './SelectForm';
import MultipleInputsForm from './MultipleInputsForm';
import FormTest from './FormTest'

ReactDOM.render(
  <React.StrictMode>
    <NameForm />
    <TextareaForm />
    <SelectForm />
    <MultipleInputsForm />
    <FormTest />
  </React.StrictMode>,
  document.getElementById('root')
);

