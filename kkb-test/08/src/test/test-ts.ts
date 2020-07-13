/**
 * 类型注解
 * 类型检测
 */
let str: string
str = '1'

// 原始类型 string number boolean undefined null symbol

//任何 any
//无返回 void

// 数组 any[]  Array<string>
// 对象 {}

// 类型别名 自定义类型
type Prop = {
  name: string
}

// 类型断言
let someValue: any = 'this is a string'
const someValueLength = (someValue as string).length

// 联合类型 或
let union: string | number
union = '1'
union = 1

// 交叉类型 与 都得满足
type First = { name: string }
type Second = { age: number }

type FirstAndSecond = First & Second
function fn1(): FirstAndSecond {
  return { name: '1', age: 1 }
}

// 可选
type Three = {
  name: string,
  age?: number
}

// 函数
function fn2(): void {

}

// 函数重载
// 场景多用于源码框架
// 函数用参数个数 类型 或者返回值类型区分同名函数
// 先声明 再实现
function watch(cb1: any): void
function watch(cb1: any, cb2: any): void

function watch(cb1: any, cb2?: any): void {
  if (cb2) {
    console.log('执行2');

  } else {
    console.log('执行1');

  }
}


// 类
class Parent {
  // private 私有属性
  // protected 受保护属性 类和子类可以访问
  // public 公开属性

  //参数属性
  // 构造函数参数加修饰符 可以定义为成员属性
  constructor(public tua = "tua") {
  }

  // 方法也有修饰符
  private someMethod() { }
}

// 接口
interface Feature {
  id: number;
  name: string;
}

// 范型
// 不指定类型 当使用的时候才指定类型 通用性
interface Feature2<T> {
  ok: 0 | 1;
  data: T;
}
