export default class Idea {
  constructor(title) {
    this.title = title;
    this.id = Date.now()
    // this.delete = () => {
    //   removeIdea(this.id)
    // }
  }
}
