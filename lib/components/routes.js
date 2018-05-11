import AppRoot from './AppRoot';
import HomeContainer from './home/HomeContainer';
import PostingsContainer from './postings/PostingsContainer';

const routes = [
  { component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: HomeContainer
      },
      { path: '/postings',
        component: PostingsContainer
      }
    ]
  }
];

export default routes;
