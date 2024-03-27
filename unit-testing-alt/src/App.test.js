import { render, screen, waitFor } from '@testing-library/react';
import App from './App';



test('The Header should contain Hello Users',async()=> {
  render(<App />)
  const header = screen.getByText(/Hello Users/i);
  expect(header).toBeInTheDocument()
})


test('fetches and rendersusers',async()=> {
  render(<App/>)
  await waitFor(()=>{
  expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0);
  })

})