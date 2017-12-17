export function serialize (payload) {
        var query = "?";
        for(var key in payload){
            query += key + "=" + payload[key] + "&";
        }
        var result = query.substring(0, query.length-1);
        return result
    }
export function formData (data) {
    let formdata = new FormData();
    Object.keys(data).forEach(key => {
      if(typeof data[key] !== 'null' && typeof data[key] !== 'undefined')
        formdata.append(key, data[key]);
    })
    return formdata;
  }