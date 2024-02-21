import{MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
//multisocket:web socket that lets the users to connect with all the chats
//Multichatwind:bringsup the ui
//usemultichatlogic:state management,api calls that makes the chat work

const ChatsPage =(props)=>{
    const chatProps=useMultiChatLogic(
        '76c8fcad-bdbb-4905-a399-65539c468335',
         props.user.username,
          props.user.secret
          );
    return (
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
    )
}

export default ChatsPage;
