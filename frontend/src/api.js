import {BASE_URL} from './config';

export function loadBlocks(youngestBlockNumber) {
  const url = new URL(`${BASE_URL}/blocks`);

  if (youngestBlockNumber) {
    url.searchParams.append('last', youngestBlockNumber);
  }

  return fetch(url)
    .then(res => res.json());
}
