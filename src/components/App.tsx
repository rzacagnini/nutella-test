import React from 'react';

type AppParams = {
  message: string;
};

export const App = ({ message }: AppParams): JSX.Element => {
  return <h1> {message} </h1>;
};
