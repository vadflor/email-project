import { BsStar } from 'react-icons/bs';
import { BiPlus, BiSearch } from 'react-icons/bi';
import { FiPaperclip } from 'react-icons/fi';

import { useState } from 'react';

//list-active-item // add active class

const ListOfLetters = (props) => {
    const { changeId, letterItems, letterId } = props;


    return (
        <div className="content__center">
            <div className="content__center__search">
                <input className="search-input" type="text" name="search" placeholder='What are you looking for?' />
                <div className="search-icon"><BiSearch /></div>
            </div>

            {
                letterItems.map(item=> {
                    let letterClass = item.id === letterId ? "content__center__list list-active-item" : "content__center__list"
                    return (
                        <div className={letterClass} key={item.id} onClick={()=> changeId(item.id)}>
                            <div className="center-left">
                                <div className="center-left-icon">
                                {
                                    item.avatarImg !== "" ? <img src={item.avatarImg} alt="icon" /> : <div className="logo-name name-color-violet">mk</div>
                                }
                                </div>
                                <div className="center-left-checkbox">
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className="center-left-favorite"><BsStar /></div>
                            </div>
                            <div className="center-center">
                                <div className="autor-row">
                                    <div className="list-autor">{item.name}</div>
                                    <div className="dot-after-autor dot-color-violet"></div>
                                </div>
                                <div className="list-title">{item.title}</div>
                                <div className="list-text">{item.shortDesc}</div>
                            </div>
                            <div className="center-right">
                                <div className="right-date">{item.date}</div>
                                <div className="right-attached">
                                {
                                    item.countOfAttachedFiles !== "" ? 
                                    (<>
                                        <div className="attached-count">{item.countOfAttachedFiles}</div>
                                        <div className="attached-icon"><FiPaperclip /></div>
                                    </>
                                    ) : null
                                }
                                    
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="content__center__add">
                <div className="btn-add"><BiPlus /></div>
            </div>

        </div>
    )
}

export default ListOfLetters