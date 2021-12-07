import React, { useRef, useState, useEffect } from 'react'

import firebase from './Firebase';
import { useAuth } from './context';
import { v4 as uuidv4 } from 'uuid';
import { FiSend } from 'react-icons/fi';
import { auth } from './Firebase';
import { useHistory } from 'react-router-dom';
export default function Chat() {
    const { uid, photoURL } = auth.currentUser;
    const empty = useRef();
    const history = useHistory();
    const ref = firebase.firestore().collection('messages');
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newMessage, setNewMessage] = useState();

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }

    const onCreate = async (e) => {
        e.preventDefault();
        await ref.add({
            message: newMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        setNewMessage('');
        empty.current.scrollIntoView({ behaviour: 'smooth' });
    }

    function getData() {
        ref.orderBy('createdAt').onSnapshot((snapshot) => {
            const items = [];
            snapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setData(items);
            setLoading(false);

        })
    }



    useEffect(() => {
        getData();
        console.log(data);
    }, [])

    return (
        <div className='App'>
            <div className='header block glow'>
                Superchat!
            </div>
            <button className='logout-tab' onClick={handleLogout}>Sign Out</button>
            <main>
                <div>
                    {loading === false && (data.map((dev) => (
                        <div className={`speech-bubble ${messageClass}`} key={dev.id}>
                            <img src={photoURL} />
                            <p>{dev.message}</p>
                        </div>

                    )))}

                </div>
                <div className='empty' ref={empty}></div>
            </main>
            <div className='a b'>
                <form onSubmit={onCreate}
                    className='bottom'
                >
                    <input className='chat-input ' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                    <button className='message-btn' type='submit' disabled={!newMessage}><FiSend /></button>
                </form>

            </div>

        </div>
    )
}
