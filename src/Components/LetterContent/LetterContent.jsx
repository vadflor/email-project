import { BsClock, BsFillPrinterFill, BsFillStarFill, BsReplyFill } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import { IoIosSend } from 'react-icons/io';

const LetterContent = ({ name, date, year, title, fullDesc, countOfAttachedFiles, starred}) => {
    return (
        <div className="content__right">
            <div className="content__right__header">
                <div className="header-autor">
                    <div className="header-autor-logo name-color-red">mk</div>
                    <div className="header-autor-name">{name}</div>
                </div>
                <div className="header-date">
                    <div className="header-date-icon"><BsClock /></div>
                    <div className="header-date-date">{date}, {year}</div>
                </div>
            </div>
            <div className="content__right__body">

                <div className="body-desc">
                    <div className="desc-title">{title}</div>
                    <p className="desc-text">{fullDesc}</p>
                </div>

                <div className="body-icons">

                    <div className="small-icons">
                        <div className="reply-icon"><BsReplyFill /></div>
                        <div className="print-icon"><BsFillPrinterFill /></div>
                    </div>
                    <div className="big-icons">

                        <div className="starred">
                            {starred ? (
                                <>
                                    <div className="star-icon"><BsFillStarFill /></div>
                                    <div className="stared-text">Starred</div>
                                </>
                            ): null
                            }
                        </div>
                        <div className="attachments">
                            {
                                countOfAttachedFiles !== "" ? (
                                    <>
                                    <div className="attach-icon"><FiPaperclip /></div>
                                    <div className="attach-block">
                                        <div className="attach-count">{countOfAttachedFiles}</div>
                                        <div className="attach-text">Attachments</div>
                                    </div>
                                    </>
                                ) : null
                            }
                        </div>

                    </div>
                </div>

            </div>
            <div className="content__right__footer">

                <input type="text" className="message-text" placeholder="Click here to Reply or Forward Mohamed'message"></input>
                <div className="message-icons">
                    <div className="attach-icon"><FiPaperclip /></div>
                    <div className="send-icon"><IoIosSend /></div>
                </div>

            </div>
        </div>
    )
}

export default LetterContent