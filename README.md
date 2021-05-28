# react-privacycenter
React plugin to embed PORT.im Privacy Center

### Install

```js
$ npm install react-privacycenter
```
or
```js
$ yarn add react-privacycenter
```

### Usage

Import the Privacy Center component

```js
import { PrivacyCenter } from "react-privacycenter";
```

Wrap something in the Privacy Center link

```js
<PrivacyCenter fallback="https://privacy.port.im" id="XXX">Privacy Center</PrivacyCenter>
```

### Props/Options

> fallback - the fallback hosted url of your Privacy Center

> id - the UUID of your Privacy Center