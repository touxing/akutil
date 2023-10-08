/**
 * 自定义封装 localStorage、sessionStorage
 */
export enum StorageType {
    session = 'session',
    local = 'local'
  }
  export class AkStorage {
    /** 存储key值前缀 */
    private prefix: string
    /** 单例的实例 */
    private static _instance: Map<string, AkStorage>
    private storage: Storage
    private engine = {
      [StorageType.session]: sessionStorage,
      [StorageType.local]: localStorage
    }
    // 单例模式
    constructor(prefix = '', type: StorageType = StorageType.local) {
      this.prefix = prefix
      this.storage = this.engine[type]
      if (!this.storage) {
        throw new Error("engine type error. it must be 'session','local'")
      }
      if (!AkStorage._instance) {
        AkStorage._instance = new Map()
      }
      if (!AkStorage._instance?.has(type)) {
        AkStorage._instance.set(type, this)
      }
      return AkStorage._instance.get(type) as AkStorage
    }
  
    private getFullKey(value: string) {
      return this.prefix + value
    }
    /**
     *
     * @param key
     * @param value
     * @param expire 过期时间，单位秒，默认0，永不过期
     * @returns
     */
    set(key: string, value: any, expire = 0) {
      try {
        const wrapData = {
          value,
          expire,
          time: Date.now() // 保存时间
        }
        const data = JSON.stringify(wrapData)
        this.storage.setItem(this.getFullKey(key), data)
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    }
    /**
     * 追加对象保持
     * @param key
     * @param value
     * @param expire
     * @returns
     */
    setInto(key: string, value: Record<string, any>, expire = 0) {
      try {
        const preData = this.get(key)
        const wrapData = {
          value,
          expire,
          time: Date.now() // 保存时间
        }
        if (preData) {
          Object.assign(wrapData.value, preData, value)
        }
        const data = JSON.stringify(wrapData)
        this.storage.setItem(this.getFullKey(key), data)
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    }
    /**
     * 获取值
     * @param key
     * @returns
     */
    get(key: string) {
      try {
        const localData = this.storage.getItem(this.getFullKey(key))
        if (localData === null) return localData
        const data = JSON.parse(localData)
        if (data.expire > 0 && Date.now() - data.time > data.expire * 1000) {
          // js时间戳是ms，13位数
          this.remove(key)
          return null
        }
        return data.value
      } catch (error) {
        console.error(error)
        return null
      }
    }
    /**
     *  remove a value of key
     * @param key
     */
    remove(key: string) {
      this.storage.removeItem(this.getFullKey(key))
    }
  
    /**
     * clear all value of the prefix key
     */
    clear(): void {
      Object.keys(this.storage).forEach(key => {
        if (key.startsWith(this.prefix)) {
          this.storage.removeItem(key)
        }
      })
    }
  }
  
  