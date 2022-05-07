import React from 'react'

export default function TodoItem(props) {
    return (
        <li onClick={()=>{ //我們讓onClick的行為呼叫一個arrow fn，裡面再放另一個fn **只有這樣才能在click的時候觸發fn**
            props.onChecked(props.id)// 如果直接接'onCheck={props.onChecked(props.id)}'而不透過一個arrow fn的話，一但TodoItem compoenent被呼叫，該函式就會被馬上觸發。
        }}>
            {props.item}
        </li>
    )
}
