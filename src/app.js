import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modals";
/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const listModal = store.getModalState().list;
console.log(listModal);
  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback((id) => {
      store.addItem(id);
    }, [store]),
    onClose:useCallback((e)=>{
      console.log(e.target)
      e.target.closest('.modal-wrapper').style.display='none';
    }),
    onOpen:useCallback((e)=>{
     
      document.querySelector('.modal-wrapper').style.display='block';
    })
  }

  
    const newList=listModal.slice().map(item=>{
      item.all=item.price*item.count;
      return item;
   });
  
   const [price,quantity]=newList.reduce((item,nextItem)=>{
    item[0]=item[0]+nextItem.all;
    item[1]=item[1]+nextItem.count;
     
     return item;
   },[0,0]);
  
  
  return (
    <>
    <PageLayout>
      <Head title='Магазин'/>
      <Controls onOpen={callbacks.onOpen} 
        listModal={listModal} 
        price={price} 
        quantity={quantity}
      />
      <List list={list}
            onAddItem={callbacks.onAddItem}
            onSelectItem={callbacks.onSelectItem}
            />
    </PageLayout>
    <Modal list={listModal} onClose={callbacks.onClose} 
      onDelete={callbacks.onDeleteItem}
      price={price}

    />
    </>
  );
}

export default App;
