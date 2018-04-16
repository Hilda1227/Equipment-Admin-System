export default {
  canLend(state) {
    return state.canLend.map(item => ({
      src: item.pic_url,
      title: item.name,
      count: item.count,
      url: `/editorDev/modify/${item.id}`
    }))
  }, 
  hasLend(state) {
    return state.hasLend.map(item => ({
      ...item,
      state: `${item.equ_name} 借用时长 剩余${item.surplus_day}天`,
      url: `/clubDevDetail/hasLend/${item.br_id}?surplus_day=${item.surplus_day}`
    }))
  }, 
  hasTimeout(state) {
    return state.hasTimeout.map(item => ({
      ...item,
      state: `${item.equ_name}  对方已逾期`,
      url: `/clubDevDetail/hasTimeout/${item.br_id}?surplus_day=${item.surplus_day}`
    }))
  }, 
  waitComfirm(state) {
    return state.waitComfirm.map(item => ({
      ...item,
      state: '请确认设备',
      url: `/clubDevDetail/waitComfirm/${item.br_id}`
    }))
  }, 
  

  borrowing(state) {
    return state.borrowing.map(item => ({
      ...item,
      state: `借用时长 剩余${item.surplus_day}天`,
      url: `/borrowDevDetail/borrowing/${item.br_id}?surplus_day=${item.surplus_day}`
    }))
  },
  checking(state) {
    return state.checking.map(item => ({
      ...item,
      state: '等待审核',
      url: `/borrowDevDetail/checking/${item.br_id}`
    }))
  },
  hasTimeoutReturn(state) {
    return state.hasTimeoutReturn.map(item => ({
      ...item,
      state: '已逾期 请尽快归还',
      url: `/borrowDevDetail/hasTimeoutReturn/${item.br_id}`
    }))
  },
  waitComfirmReturn(state) {
    return state.waitComfirmReturn.map(item => ({
      ...item,
      state: '归还中 等待确认',
      url: `/borrowDevDetail/waitComfirmReturn/${item.br_id}`
    }))
  }
}