export function serialize (payload) {
        var query = "/?";
        for(var key in payload){
            query += key + "=" + payload[key] + "&";
        }
        var result = query.substring(0, query.length-1);
        return result
    }
