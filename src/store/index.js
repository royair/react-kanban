import { observable, decorate } from 'mobx';

class Store {
}

decorate(Store, { calendar: observable });

export default new Store();
