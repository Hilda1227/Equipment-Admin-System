export const serialize = function (payload) {
  let query = "?";
  for(let key in payload){
    query += key + "=" + payload[key] + "&";
  }
  let result = query.substring(0, query.length-1);
  return result;
}
export const formData = function (data) {
  let formdata = new FormData();
  Object.keys(data).forEach(key => {
    if(typeof data[key] !== 'null' && typeof data[key] !== 'undefined')
    formdata.append(key, data[key]);
  })
  return formdata;
}

export const debounce = function (fn, delay, immudiate) {
  let timer = null;
  var later = function(context, args) {
    timer = null;
    if (args) fn.apply(context, args);
  };
  return function () {   
    const context = this, args = arguments;
    clearTimeout(timer);
    if(immudiate) {
        var callNow = !timer;
        timer = setTimeout(later, delay);
        if (callNow) fn.apply(this, args);  
    }
    else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
  }
}
