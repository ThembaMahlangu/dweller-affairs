import React from 'react';
import './PopUp.css';


function PopUpChat() {
    const popup = document.querySelector('.chat-popup');
    const chatBtn = document.querySelector('.chat-btn');
    const submitBtn = document.querySelector('.submit')
    const chatArea = document.querySelector('.chat-area')
    const inputElm = document.querySelector('input')
    const emojiBtn = document.querySelector('#emoji-btn');
    const picker = new EmojiButton();


// Emoji selection 
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
        document.querySelector('input').value += emoji;
    })

    emojiBtn.addEventListener('click', () => {
        picker.togglePicker(emojiBtn);
    });
});

// chat button toggler

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    let temp = `<div className="out-msg">
    <span className="my-msg">${userInput}</span>
    <img src="img/raphael.jpg" className="avatar"
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = "";
})
  return (
    <section>
        <button className="chat-btn">
            <i className="material-icons"> comment </i>
        </button>

        <div className="chat-popup">
            <div className="badge">1</div>
            <div className="chat-area">
             <div className="income-msg">
                <img src="img/sakhile.jpeg" className="avatar" alt=""/>
                <span className="msg"> Hi, How can I help you?</span>
             </div>
            </div>

            <div className="input-area">
                <input type="text"/>
                <button id="emoji-btn"> &#127773;</button>
                <button className="submit"> <i className="material-icons"> send</i></button>
            </div>
        </div>
    </section>
  )
}

export default PopUpChat