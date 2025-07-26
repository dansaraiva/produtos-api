import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o botão de adicionar', () => {
  render(<App />);
  // Procura por um elemento do tipo 'button' que tenha o nome/texto 'Adicionar'
  const buttonElement = screen.getByRole('button', { name: /adicionar/i });
  expect(buttonElement).toBeInTheDocument();
});