import { PrettyChatWindow} from 'react-chat-engine-pretty';
const ChatPage = (props) => {
    
    return (
    <div style={{ height: '100vh' }}>
       <PrettyChatWindow
       projectId='5d5413cb-b7cd-4bbf-b9f2-7a89f6202e8a' 
       username={props.user.username}
       secret={props.user.secret}
       style={{height:'100%'}}
       />
    </div>
    )
}
export default ChatPage