## 1. 변수 

---

### 1) let

> 새로운 변수를 만드는 것

```
let color = "black"

let color = "blue"

=> error
```

```
let color = "black"

color = "blue"

=> console.log(color) => blue
```

----

### 2) const 

> 변수를 바꾸고 싶지 않을 떄. 변수를 영속적으로 할당하고 싶을 떄.

```
const pass ="blue"

pass = "black"

console.log(pass) => error 
```

---

### 3) var

```javascript
var pass = "black"

pass = "blue"

console.log(pass) => blue
```

자바스크립트가 처음 나왔을 때 var만 있었다. 하지만 var에 치명적 문제점이 있음.

---

20 + 30 : 50

"20"+"30" : 2030

"Hello" + " " +2020 : Hello 2020

7.5%2 : 1.5

1/0 : Infinity

"20"+30 : 2030(String)

---

### 4) var, let 그리고 호이스팅

**호이스팅** : **코드가 실행되기 전 변수들의 범위를 최상단으로 올리는 것.  인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미.**

**변수가 선언되기 전 호출하더라도 javascript는 선언과 호출을 분리해 undefined로 초기화를 한다.**

```
console.log(a)

var a = 1

console.log(a)
```

java를 공부한 저에게는 말이 안되는 코드였다.

변수 a가 정의 되기 전에 호출되므로 에러가 나는 것이 당연했다.

그러나 직접 코드를 돌려보면

undefined

1

이 출력되게 된다.

코드가 실행되기 전에 자바스크립트가 호이스팅을 할때 변수의 선언과 초기화를 undefined로 한다.

```
console.log(a)

a = 1

var a

console.log(a)
```

출력

undefined

1

```
for(var i =1; i<3; i++){

console.log(i)

}
```

결과

1

2

3

```
for(var i =1; i<3; i++){

console.log(i)

}

console.log(i)
```

결과

1

2

3

3

> 함수만 지역변수로 선언하고 나머지는 모두 전역변수로 올려버린다.



> ```
> var a = 1
>
> console.log(a)
>
> var a = 2
>
> console.log(a)
> ```

결과

1

2

> 같은 변수이름을 가지지만 정상적으로 작동. java를 배운 저에게는 거부감이 들었지만
>
> 이 문제를 해결하기위해 let이라는 것이 나왔다.

```
console.log(a)

let a = 2

console.log(a)
```

=> cannot access 'a' before initailization

tdz에 a가 들어가므로

---

## 2. 배열

```
let fruit = ["banana", "apple", "tomato"]

console.log(fruit)
```

결과

[ 'banana', 'apple', 'tomato' ]

### 1) 배열과 함께 쓰이는 함수

- pop : 마지막 인덱스의 value를 제거

- push : 마지막 인덱스의 value를 추가

- includes : fruit.includes("apple") => boolean값으로 해당 String포함한지 반환

- indexOf : fruit.indexOf("apple") => 해당 문자열이 몇 번째 인덱스에 있는지를 반환. 배열에 없는 값을 넣어 주면 -1을 반환한다

- slice : slice(num) => num이후의 인덱스 값들을 잘라서 반환

  slice(start, end) => start부터 end이전의 값들을 잘라 반환

  slice(start, num) => slice(2,1) 2번째부터 1개의 값을 잘라 반환

- splice(start, num) => start~end이전의 인덱스를 잘라 반환

> slice 와 splice의 차이점
>
> slice는 기존의 배열을 변형시키지 않지만
>
> splice는 기존의 배열에 결과를 반영한다. => 배열 변경됨

```
let animals= [
    "Ant",
    "Donkey",
    "Bat",
    "Bear",
    "Zebra"
]
console.log(animals);

// 배열 마지막 인덱스 제거하기
animals.pop()
console.log(animals)

// dog 추가하기
animals.push("dog")

// "Mouse","Tiger","Lion"추가하기
animals.push("Mouse","Tiger","Lion")
console.log(animals)

// "Human"이 있는가?
console.log(animals.includes("Human"))

// "Bat"을 "Monkey"로 바꾸시오
let index = animals.indexOf("Bat")
animals[index] = "Monkey"
console.log(animals)
```



---

## 3. 객체

표현식 {}

```
let student = {

name :"jaehyun",

class:1,

age:28

}
```

key : value로 정의해주면 된다.

value를 불러오려면 student.(value)를 하면된다. student.age 와 student["age"]는 같은 결과를 반환

value를 변경하고 싶으면 student.class = 2 or student["class"] = 2



## 4. 조건, 반복문

### 1) if

```
if(age <18 && age >20){
  ...
}
```

2가지 조건을 비교할 경우 &&을 꼭 써줘야한다.



## 5. 함수

```
function name(){
  
}
```



