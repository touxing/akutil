function transformRequest(data: any): any {
  // do something
  return data
}

function transformResponse(data: any): any {
  // do something
  return data
}

const defaults = {
  method: 'GET',
  header: {
    'content-type': 'application/json', // 默认值
  },
  timeout: 0, // 0 ms
  transformRequest: [
    function (data: any, headers?: any): any {
      return transformRequest(data)
    },
  ],
  transformResponse: [
    function (data: any, headers?: any): any {
      return transformResponse(data)
    },
  ],
  validateStatus(status: number): boolean {
    return status >= 200 && status < 300
  },
}

export default defaults
