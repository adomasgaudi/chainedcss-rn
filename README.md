<p align="center">
  <a href="https://github.com/adomasgaudi/Chainedcss" target="_blank">
    <h1 align="center">ChainedCSS-RN</h1>
  </a>
</p>
<p align="center">
    Minimalistic <strong>Method Chaining CSS</strong> - TailwindStyle for React Native
<br/>
    <a href="https://github.com/adomasgaudi/chainedcss-rn">github</a>
    <a href="https://www.npmjs.com/package/chainedcss-rn">npm</a>
</p>

---

# Installation

<br>
Install these packages:
<br>

```js
// for npm
npm i chainedcss-rn

// for yarn
yarn add chainedcss-rn

// for pnpm
pnpm add chainedcss-rn
```

<br>
<br>

## Usage for React and Next (up to Next.js 12)

At the top of every component

```js
import _ from 'chainedcss-rn';
```

<br>
<br>
<br>

# Rationale

**✨ You already know how to use it** - for the majority of basic styles ChainedCSS uses identical styling to Tailwind, to make sure users don't have to relearn everything again.

**✨ The power of objects and methods** - utilise the full power of js using objects and methods. Flexibility and Programability, far beyond css.

**✨ Clean minimalistic look** - ChainedCSS avoids all uneccesary symbols and extra code to bring css in js as close as possible to Tailwind css. CSS is too long, we've come to realise this after Tailwind became so popular. JSS, CSS in JS is even worse. ChainedCSS fixes this.

**✨ Custom functions** - Tailwind only has pre-determined classes. Is that a bug or a feature? If you thinks that is a feature then use ChainedCSS styles which are basically the same, however if the user wants to, she can customize many of them, because they are functions and can receive an input.

<br>

# Get Started

**✨ Use Tailwind-ish styles** - for the majority of basic styles ChainedCSS uses identical styling to Tailwind, to make sure users don't have to relearn everything again.

```js
import _ from 'chainedcss-rn';

const Component = () => {
  return (
    <View style={_.h(10).s}>Hello</View>
    <View 
      style={_.h(10).bg('red').justify('center').s} 
    >
      Hello
    </View>
  );
};

export default Component;
```

<br>
<br>
<br>

**✨ Use numbers and variables in the styles functions or just add the value to the name like in tailwind**

```js
const heightX = 4;
return (
  <View style={_.h(heightX).s}>Hello</View>
);
```

<br>
<br>
<br>

