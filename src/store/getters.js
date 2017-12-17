export default {
  formList (state) {
    return (list, page, type) => {
      return equ_list.map(item => {
        return {
          src: item.pic_url,
          devName: item.name,
          state: item.status,
          clubName: item.belong_soc,
          borrowDate: '2017年2月10日',
          returnDate: '2017年2月13日',
          url: '/clubDevDetail/hasLend/1'
        }
      })
    }
  }
}