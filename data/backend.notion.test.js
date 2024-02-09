const { fetchBatchGigs } = require('./backend.notion');

describe('Test suite for fetchBatchGigs', () => {
  test('setting page_size parameter should return the correct number of results', async () => {
    const response = await fetchBatchGigs({}, {}, undefined, 5);
    
    expect(Object.keys(response.results).length).toEqual(5);
  });

  // Add more test cases as needed
});