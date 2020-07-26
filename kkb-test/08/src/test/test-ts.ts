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


// 装饰器
// 类装饰器
// 参数只有一个 类构造函数
// 表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
// function log(target: Function) {
//   // target是构造函数 
//   console.log(target === Foo);// true 

//   target.prototype.log = function () {
//     console.log(this.bar);
//   }
// }

// @log
// class Foo {
//   bar = 'bar'
// }
// const foo = new Foo();
// // @ts-ignore  ts会忽略这一行
// foo.log()


// 方法装饰器
// 1-实例 2-方法名 3-descriptor对象:真实类型是PropertyDescriptor(类似于defineProperty 里面有value get set)
// function dong(target: any, name: string, descriptor: any) {
//   // 这里通过修改descriptor.value扩展了bar方法 
//   const baz = descriptor.value;
//   descriptor.value = function (val: string) {
//     console.log('dong~~');
//     baz.call(this, val);
//   }
//   return descriptor
// }


// class Foo {
//   bar = 'bar'

//   @dong
//   setBar(val: string) {
//     this.bar = val
//   }
// }
// const foo = new Foo()
// foo.setBar('lalala')


// 属性装饰器
// 仅接收2个参数 1-实例 2-属性名称
// function mua(target: any, name: string) {
//   target[name] = 'mua~~~'
// }

// 工厂函数的形式 可以配置参数
function mua(param: string) {
  // 返回才是装饰器函数
  return function (target: any, name: string) {
    target[name] = param
  }
}

class Foo {
  @mua('mua mua~~')
  ns!: string;
}

const foo = new Foo()
console.log('ns', foo.ns);
