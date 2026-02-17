export function formatMessageTime(date){
    return new Date(date).toLocaleTimeString("en-US",{
        hour: "2-digit",
        minute: "numeric",
        hour12: false,
    })
}