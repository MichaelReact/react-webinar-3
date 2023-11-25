/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.codes=new Set(this.state.list.map(item=>item.code))
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
    // this.state.list.forEach((item,i,arr)=>{
    //  if(item===arr[arr.length-1]){

    //  }
    //   item.code=Math.random()*arr.length*10;
    // })
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    // this.state.list.forEach(item=>item.selectNum=0)
   console.log(this.state.list)
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    let newCode;
    // console.log(Math.floor(Math.random()*Math.max(...codes)+Math.max(...codes)))
    do{
      
      newCode=Math.max(...this.codes)+1
    }while([...this.codes].filter(code=>code===newCode).length>0)

    this.setState({
      ...this.state,
      list: [...this.state.list, {code: newCode, title: 'Новая запись',selectNum:0}]
    })
    const newArr=this.state.list.map(item=>item.code);
    this.codes=new Set([...this.codes].concat(newArr));
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code)
    })
    // this.state.list.forEach((item,i)=>item.code=i+1);
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.state.list.forEach(item=>{
      item.code!==code?item.selected=false:item.selected;
    });
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
         
            item.selected = !item.selected;
            console.log(item.selectNum)
            if(item.selected)++item.selectNum
            console.log(item);
         
        }
        return item;
      })
    })
  }
}

export default Store;
