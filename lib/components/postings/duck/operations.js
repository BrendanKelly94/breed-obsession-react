import fetchJsonp from 'fetch-jsonp';
import {Creators} from './actions.js';

const updateOffset = Creators.updateOffset;
const openModal = Creators.openModal;
const closeModal = Creators.closeModal;
const selectPostAction = Creators.selectPost;
const setErrorAction = Creators.setError;
const postingsLoadedAction = Creators.postingsLoaded;
const requestingJSONAction = Creators.requestingJson;

const selectPost = (post) => {
  return (dispatch) => {
    dispatch(selectPostAction(post));
    dispatch(openModal());
  };
};

const fetchPostings = (params) => {

  return async (dispatch) => {
    //empty postings Array
    dispatch(postingsLoadedAction([]));
    //dispatch requestingJSON to toggle loader
    dispatch(requestingJSONAction(true));

    const { animal, breed, city, State, size, sex, age, offset } = params;
    let location = '';
    //if city is specified, join it to location, else search only by state
    (city)?(location = [city,State].join()):location = State;
    console.log(location);
    const keys = await (await fetch('keys')).json();

    const responseJSON = await (await fetchJsonp('https://api.petfinder.com/pet.find?'
    +'key=' + keys.petKey +
    '&animal=' + animal +
    '&breed='+ breed +
    '&location='+ location +
    '&size='+ size +
    '&sex='+ sex +
    '&age='+ age +
    '&offset='+ offset+
    '&format=json', {
      jsonpCallbackFunction: 'JSONP_CALLBACK'
    })).json();

    //update offset
    dispatch(updateOffset(responseJSON.petfinder.lastOffset['$t']));

    let postings = [];
    if(responseJSON.petfinder.pets.hasOwnProperty('pet')){
      responseJSON.petfinder.pets.pet.map((posting) => {
        postings.push(buildPostingObject(posting));
      });
    }else{
      dispatch(setErrorAction(true));
    }

    dispatch(postingsLoadedAction(postings));
  };
};

const buildPostingObject = (posting) => {
  //breed might be an array, if so join
  let breedString = '';
  if(Array.isArray(posting.breeds.breed)){
    posting.breeds.breed.forEach((breed) => {
      breedString += breed['$t'] + ', ';
    });
    breedString = breedString.substring(0,breedString.length-2);
  }else{
    breedString = posting.breeds.breed['$t'];
  }

  let filteredPics;
  if(posting.media.photos){
    filteredPics = posting.media.photos.photo.filter((pic) => pic['@size'] === 'x');
  }

  const postingObject = {
    id: posting.id['$t'],
    name: posting.name['$t'],
    age: posting.age['$t'],
    breed: breedString,
    sex: posting.sex['$t'],
    state: posting.contact.state['$t'],
    city: posting.contact.city['$t'],
    status: posting.status['$t'],
    thumbnail: (posting.media.photos)?posting.media.photos.photo[2].$t:null,
    pics: (filteredPics)?filteredPics:null,
    phone: (posting.contact.phone)? posting.contact.phone['$t']: 'not available',
    email: (posting.contact.email)? posting.contact.email['$t']: 'not available',
    description: posting.description['$t'],
    street:posting.contact.address2['$t'] + posting.contact.address1['$t'],
    zip: posting.contact.zip['$t']
  };

  return postingObject;
};



export default {
  fetchPostings,
  selectPost,
  closeModal
};
