import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FiSend } from "react-icons/fi";

// функция принимает имя пользователя и функция отправки сообщений
const MessageForm = ({ username, sendMessage }) => {
    // локальное состояние для текста сообщения
    const [text, setText] = useState("");

    // обрабатываем изменение текста
    const handleChangeText = (e) => {
        setText(e.target.value);
    };

    // обрабатываем отправку сообщения
    const handleSendMessage = (e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (trimmed) {
            sendMessage({ messageText: text, senderName: username });
            setText("");
        }
    };

    return (
        <>
            <Form onSubmit={handleSendMessage}>
                <Form.Group className="d-flex">
                    <Form.Control
                        value={text}
                        onChange={handleChangeText}
                        type="text"
                        placeholder="Message..."
                    />
                    <Button variant="success" type="submit">
                        <FiSend />
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
};

export default MessageForm;
