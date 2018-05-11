import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  updateOffset: ['offset'],
  requestingJSON: ['flag'],
  postingsLoaded: ['postings']
});

export { Creators, Types };
