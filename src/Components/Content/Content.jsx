
import Sidebar from '../Sidebar/Sidebar';
import ListOfLetters from '../ListOfLetters/ListOfLetters';
import LetterContent from '../LetterContent/LetterContent';
import { useState } from 'react';
import { letterItems } from '../../data';

const Content = () => {
    const [letterId, setLetterId] = useState(2);
    
    return (
        <div className="content">

            <Sidebar/>

            <ListOfLetters 
                letterId = {letterId}
                letterItems = {letterItems}
                changeId={id => setLetterId(id)}
            />
            {
                letterItems.map(item => {
                    if(item.id === letterId){
                        return (
                            <LetterContent 
                                key={item.id}
                                name = {item.name}
                                date = {item.date}
                                year = {item.year}
                                title = {item.title}
                                fullDesc = {item.fullDesc}
                                countOfAttachedFiles = {item.countOfAttachedFiles}
                                starred = {item.starred}
                            /> 
                        )
                    }
                })
            }
            
        </div>
    )
}

export default Content