import uuidv1 from 'uuid/v1';
import { decorate, observable } from "mobx";

class Kanban {
  constructor() {
    this.id            = uuidv1();
    this.boards        = [];
    this.selectedBoard = {};
    this.createdAt     = new Date();

    this.init();
  }

  init() {
    let board = new Board('My Board');
    this.boards.push(board);
    this.selectedBoard = board;
  }

  /* boards */
  addBoard(name) {
    let newBoard = new Board(name);
    this.boards.push(newBoard);
  }

  updateBoard(oldBoard, newBoard) {

  }

  deleteBoard() {

  }

  searchCard(keyword) {

  }

  selectBoard(id) {
    this.selectedBoard = this.boards.find((board) => board.id === id);
  }
}

class Board {
  constructor(name = 'New board') {
    this.id            = uuidv1();
    this.name          = name;
    this.lists         = [];
    this.collaborators = [];
    this.createdAt     = new Date();
  }

  addList(name) {
    let list = new List(name);
    this.lists.push(list);
  }

  updateList({ name }) {

  }

  addCollaborator(user) {

  }

  removeCollaborator(user) {

  }
}

class List {
  constructor(name) {
    this.id        = uuidv1();
    this.name      = name;
    this.cards     = [];
    this.createdAt = new Date();
  }

  addCard(title) {
    let card = new Card(title);
    this.cards.push(card);
  }
}

class Card {
  constructor(title) {
    this.id          = uuidv1();
    this.title       = title;
    this.priority    = 0;
    this.assignees   = [];
    this.attachments = [];
    this.createdAt   = new Date();
  }
}

decorate(Kanban, {
  id: observable,
  boards: observable,
  selectedBoard: observable,
  createdAt: observable,
});

decorate(Board, {
  id: observable,
  name: observable,
  lists: observable,
  collaborators: observable,
  createdAt: observable,
});

decorate(List, {
  id: observable,
  name: observable,
  cards: observable,
  createdAt: observable,
});

decorate(Card, {
  id: observable,
  title: observable,
  priority: observable,
  assignees: observable,
  attachments: observable,
  createdAt: observable,
});

export default Kanban;