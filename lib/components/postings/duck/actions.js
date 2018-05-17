import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  updateOffset: ['offset'],
  requestingJson: ['flag'],
  postingsLoaded: ['postings'],
  selectPost: ['post'],
  openModal: ['flag'],
  closeModal: ['flag'],
});

export { Creators, Types };
