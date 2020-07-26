var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 类型注解
 * 类型检测
 */
var str;
str = '1';
// 类型断言
var someValue = 'this is a string';
var someValueLength = someValue.length;
// 联合类型 或
var union;
union = '1';
union = 1;
function fn1() {
    return { name: '1', age: 1 };
}
// 函数
function fn2() {
}
function watch(cb1, cb2) {
    if (cb2) {
        console.log('执行2');
    }
    else {
        console.log('执行1');
    }
}
// 类
var Parent = /** @class */ (function () {
    // private 私有属性
    // protected 受保护属性 类和子类可以访问
    // public 公开属性
    //参数属性
    // 构造函数参数加修饰符 可以定义为成员属性
    function Parent(tua) {
        if (tua === void 0) { tua = "tua"; }
        this.tua = tua;
    }
    // 方法也有修饰符
    Parent.prototype.someMethod = function () { };
    return Parent;
}());
// 装饰器
// 类装饰器
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
function mua(target, name) {
    target[name] = 'mua~~~';
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    __decorate([
        mua
    ], Foo.prototype, "ns");
    return Foo;
}());
var foo = new Foo();
console.log('ns', foo.ns);
