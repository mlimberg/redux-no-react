import configureStore from './store'
import IdeaList from './components/IdeaList.js'
import Form from './components/Form.js'
import '../css/reset.scss';
import '../css/app.scss';

const store = configureStore()

const form = new Form(store)
const ideaList = new IdeaList(store)

form.addEvents()
ideaList.init()
