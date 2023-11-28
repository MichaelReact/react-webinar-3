const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

export const grammar=(num,...words)=>{
  let nums=['2','3','4'];
  let numLast=(num+'').split('').slice(-2);
  
  if(numLast[0]!=='1' && nums.includes(numLast[1])){
    return words[1];
  }else if(numLast.length===1 && nums.includes(numLast[0])) {
    return words[1];
  }else{
    return words[0];
  }

  
};

grammar(2);