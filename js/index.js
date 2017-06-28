import configureStore from './store'
import IdeaBox from './components/IdeaBox.js'
import '../css/reset.scss';
import '../css/app.scss';

const store = configureStore()

const ideaBox = new IdeaBox(store)

ideaBox.init()
