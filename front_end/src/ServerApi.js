export const urlAPI = "http://localhost:2000";

export const ServerApi = (urlPath, method, userToken = null, bodySection = null) => {
    return fetch(urlAPI + urlPath, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
        },
        body: (method === 'GET' || method === 'DELETE') ? undefined : JSON.stringify(bodySection),
    })
}
