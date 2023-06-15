

export const getDefaultHeaders =() => ({
    "Content-Type": "application/json",
    // authorization: process.env.REACT_APP_nl_login_token,
    "admin-token": process.env.REACT_APP_token,
    ownerID: process.env.REACT_APP_userId,
    ownerOrgID: process.env.REACT_APP_orgId,
  })