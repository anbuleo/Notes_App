import React from 'react'
export const UserDataContext = React.createContext(null)
function UserContext({children}) {
    let data= [
        {
          heading: "Feedback",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
          since: "5 days ago",
        },
        {
          heading: "Weekly Task",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
          since: "2 weeks ago",
        },
        {
          heading: "Lyrics",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
          since: "3 weeks ago",
        },
        {
          heading: "Loren ipsum",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
          since: "3 weeks ago",
        },
      ]; 
  return <UserDataContext.Provider value={{data}} >
  {children}
  </UserDataContext.Provider>
}

export default UserContext