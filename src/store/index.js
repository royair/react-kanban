import { observable, decorate } from 'mobx';

import Kanban from './kanban';
import Users from './users';

class Store {
  kanban = new Kanban();
  users  = new Users();
}

decorate(Store, { kanban: observable, users: observable });

export default new Store();
