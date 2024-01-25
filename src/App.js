import './App.css';

import React,{ useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import img1 from './images/image-1.webp'
import img2 from './images/image-2.webp'
import img3 from './images/image-3.webp'
import img4 from './images/image-4.webp'
import img5 from './images/image-4.webp'
import img6 from './images/image-6.webp'




const finalBombCharacters =[

    {
        id:'1',
        name: 'Rickas',
        thumb:img1,
    },
    {
        id:'2',
        name: 'Disturbs',
        thumb:img2,
    },
    {
        id:'3',
        name: 'Kakashis',
        thumb:img3,
    },
    {
        id:'4',
        name: 'BKASH',
        thumb:img4,
    },
    {
        id:'5',
        name: 'Pablo',
        thumb:img5,
    },
    {
        id:'6',
        name: 'Jhon Weak',
        thumb:img6,
    }
]



function App() {
  const [characters, updateCharacters] = useState(finalBombCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const { source, destination,draggableId } = result;
    console.log(draggableId,'draggableId');
  const items = Array.from(characters);
  console.log(items,'characters');
  const [reorderedItem] = items.splice(source.index, 1);
  items.splice(destination.index, 0, reorderedItem);
  
  updateCharacters(items);
    
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bomb Squad Among Us</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map((item, index) => {
                  return (
                    
                      <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                      {(provided) => (
                        
                        
                          <li className='bo' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                          
                            <img src={item.thumb} className='pico' alt={`${item.name} Thumb`} />
                            
                            <p> {item.name}</p>
                          
                          </div>
                          
                        </li>
                        
                      )}
                      
                    </Draggable>
                    
                  
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
      
    </div>
    // <div className="App">
       
       
    //   <DragDropContext onDragEnd={handleOnDragEnd}>
    //   <Droppable droppableId="pics">
    //   {(provided) => (
    //  <ul className='ulist' {...provided.droppableProps}
    //  ref={provided.innerRef}>
    //     {pics.map(({id,pic},index) =>{
    //         return (
    //         <Draggable key={id} draggableId={id} index={index}>
    //             {(provided) => (
    //             <li 
    //             ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
    //                 <div className='borders'>
    //                 <h1>{id}</h1>
    //                <img src={pic} alt='gg' className="imag" />
    //                 </div>
    //         </li>)}
    //         </Draggable>
    //         );
    //     })}
    //     {provided.placeholder}
    //  </ul>
    
    
    // )}
    //  </Droppable>
    //  </DragDropContext>
    
    // </div>
    
  );
}

export default App;
