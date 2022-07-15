import { BsInbox, BsPencil, BsStar } from 'react-icons/bs';
import { BiGroup, BiPencil, BiPlus } from 'react-icons/bi';
import { FiTrash2, FiSend } from 'react-icons/fi';
import { IoTrashBinOutline } from 'react-icons/io5';

const Sidebar = () => {
    return (

        <div className="content__left">
            <div className="content__left__btn">
                <button>Create Message</button>
            </div>
            <div className="content__left__category">

                <div className="category-letter category-active">
                    <div className="category-letter-left">
                        <div className="category-letter-left-icon"><BsInbox /></div>
                        <div className="category-letter-left-text">Inbox</div>
                    </div>
                    <div className="category-letter-right">
                        <span className="letter-count letter-count-active">8</span>
                    </div>
                </div>

                <div className="category-letter ">
                    <div className="category-letter-left">
                        <div className="category-letter-left-icon"><BsStar /></div>
                        <div className="category-letter-left-text">Marked</div>
                    </div>
                    <div className="category-letter-right">
                        {/* <span>8</span> */}
                    </div>
                </div>

                <div className="category-letter ">
                    <div className="category-letter-left">
                        <div className="category-letter-left-icon"><BiGroup /></div>
                        <div className="category-letter-left-text">Group</div>
                    </div>
                    <div className="category-letter-right">
                        {/* <span>8</span> */}
                    </div>
                </div>

                <div className="category-letter ">
                    <div className="category-letter-left">
                        <div className="category-letter-left-icon"><BsPencil /></div>
                        <div className="category-letter-left-text">Draft</div>
                    </div>
                    <div className="category-letter-right">
                        {/* <span className="letter-count">8</span> */}
                    </div>
                </div>

                <div className="category-letter ">
                    <div className="category-letter-left">
                        <div className="category-letter-left-icon"><FiSend /></div>
                        <div className="category-letter-left-text">Sent</div>
                    </div>
                    <div className="category-letter-right">
                        <span className="letter-count">32</span>
                    </div>
                </div>

                <div className="category-letter ">
                    <div className="category-letter-left">
                        <div className="category-letter-left-icon"><FiTrash2 /></div>
                        <div className="category-letter-left-text">Deleted</div>
                    </div>
                    <div className="category-letter-right">
                        {/* <span className="letter-count">32</span> */}
                    </div>
                </div>

                <div className="category-letter ">
                    <div className="category-letter-left">
                        <div className="category-letter-left-icon"><IoTrashBinOutline /></div>
                        <div className="category-letter-left-text">Spam</div>
                    </div>
                    <div className="category-letter-right">
                        <span className="letter-count">128</span>
                    </div>
                </div>

            </div>
            <div className="content__left__create-labels">
                <div className="create-labels-title">labels</div>
                <div className="create-labels-icons">
                    <span><BiPencil /></span>
                    <span><BiPlus /></span>
                </div>
            </div>
            <div className="content__left__label">
                <div className="label-item">
                    <span className="dot-label red"></span>
                    <span className="text-label">personal</span>
                </div>
                <div className="label-item">
                    <span className="dot-label yellow"></span>
                    <span className="text-label">family</span>
                </div>
                <div className="label-item">
                    <span className="dot-label blue"></span>
                    <span className="text-label">friends</span>
                </div>
                <div className="label-item">
                    <span className="dot-label violet"></span>
                    <span className="text-label">work</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar