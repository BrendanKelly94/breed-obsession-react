import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  updateOffset: ['offset'],
  requestingJson: ['flag'],
  postingsLoaded: ['postings'],
  selectPost: ['post'],
  selectBox: ['box'],
  openModal: ['flag'],
  closeModal: ['flag'],
  setError: ['flag'],

});

export { Creators, Types };
