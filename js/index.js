import configureStore from './store'
import IdeaBox from './components/IdeaBox.js'
import Form from './components/Form.js'
import '../css/reset.scss';
import '../css/app.scss';

const store = configureStore()

const ideaBox = new IdeaBox(store)
const form = new Form(store)

ideaBox.init()
form.addEvents()
