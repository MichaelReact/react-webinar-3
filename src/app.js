import React, {useCallback,useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modals";
import Cart from "./components/cart";
/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  let [flag,setFlag]=useState(false);
  console.log(flag)
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
    onClose:(e)=>{
      // console.log(e.target)
      // e.target.closest('.modal-wrapper').style.display='none';
      setFlag(false);
    },
    onOpen:(e)=>{
      setFlag(true);
      // document.querySelector('.modal-wrapper').style.display='block';
    }
  }

  
    const newList=listModal.slice().map(item=>{
      item.all=item.price*item.count;
      return item;
   });
  
   const [price,quantity]=newList.reduce((item,nextItem)=>{
    item[0]=item[0]+nextItem.all;
    item[1]=nextItem.count?item[1]+1:item[1]+0;
     
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
    {flag?<Modal  onClose={callbacks.onClose} 
     

    >
      <Cart 
          list={listModal}
          onDelete={callbacks.onDeleteItem}
          price={price}       
      />
    </Modal>:''}
    </>
  );
}

export default App;
