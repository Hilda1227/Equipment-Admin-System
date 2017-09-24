export function serialize (payload) {
        let query = "/?";
        for(let key in payload){
            query += key + "=" + payload[key] + "&";
        }
        let result = query.substring(0, query.length-1);
        return result
    }
