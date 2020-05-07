import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord, correctGuess, actionTypes } from './';

describe('correctGuess', () => {

  test('returns an action with type CORRECT_GUESS', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  })

})

// describe('getSecretWord action creator', () => {

  
 
// });
