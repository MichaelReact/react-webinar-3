import {generateCode} from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.modalState={list:[]};
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }
  
  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }
g
  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem(id) {
    console.log(id,this.state.list)
    const newItem=this.state.list.find(item=>item.code===id);
    console.log(newItem)
    if(!this.modalState.list.find(item=>item.code===newItem.code)){
     
      this.modalState.list=[...this.modalState.list,newItem];
    }
    
    
    
    // this.setState({
    //   ...this.state,
    //   list: [...this.state.list, {code: generateCode(), title: 'Новая запись'}]
    // })
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(id) {
    console.log(id)

    this.modalState.list.find(item=>item.code===id).count=0;
    
    this.modalState.list=this.modalState.list.filter(item=>item.code!==id);
  console.log(this.modalState.list)
    for (const listener of this.listeners) listener();
    // this.setState({
    //   ...this.state,
    //   // Новый список, в котором не будет удаляемой записи
    //   list: this.state.list.filter(item => item.code !== code)
    // })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
      this.modalState.list=this.modalState.list.map(item=>{
        if (item.code === code) {
            return {...item,count:!item.count ? 1:item.count+1};
           
        }
        return item;
      });
        
      
    
      for (const listener of this.listeners) listener();
      
  }
  getModalState(){
    return this.modalState;
  }
}

export default Store;
