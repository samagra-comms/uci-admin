

export const loginUrl= `${process.env.REACT_APP_nl_login_url}/api/login`;

export const searchBot = `${process.env.REACT_APP_UCI_BASE_URL}/admin/bot/search`;

export const getStartConversationUrl =(bot:string)=> `${process.env.REACT_APP_UCI_BASE_URL}/admin/bot/start/${bot}`

export const createBotUrl = `${process.env.REACT_APP_UCI_BASE_URL}/admin/bot`;

export const createSegmentUrl = `${process.env.REACT_APP_UCI_BASE_URL}/admin/user-segment`;

export const odkUploadUrl = `${process.env.REACT_APP_UCI_BASE_URL}/admin/form/upload`;

export const addLogicUrl = `${process.env.REACT_APP_UCI_BASE_URL}/admin/conversationLogic`

export const getBotByIdUrl =(id:string)=> `${process.env.REACT_APP_UCI_BASE_URL}/admin/bot/${id}`;

export const getSegmentCountUrl = (segment:string | number) => `${process.env.REACT_APP_nl_url}/segments/${segment}/mentors/count`