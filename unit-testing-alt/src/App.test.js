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

  test('data length should 10',async()=>{
    render(<App/>)
    await  waitFor(()=>{
    const listeItem = screen.getAllByRole('listitem');
    expect(listeItem.length).toEqual(10);
  })
  })



  test('the name of the first user should be "Clementina DuBuque "', async()=>{
    render(<App/>)
    await waitFor(()=>{
      const listeItem = screen.getAllByRole('listitem');
      const firstName = listeItem[9].textContent;
      expect(firstName).toBe('Clementina DuBuque');
  })
  })


  test('there should be a list in the component', async()=>{
    render(<App/>)
    await waitFor(()=>{
      const listElemets=screen.getByRole('list');
      expect(listElemets).toBeInTheDocument();
    });
  })
